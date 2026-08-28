import urllib.request, csv, io, json

url = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=0"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
content = urllib.request.urlopen(req).read().decode("utf-8")
rows = list(csv.reader(io.StringIO(content)))

header = rows[0]
print("Header:", header)

def parse_percent(s):
    if not s: return 0.0
    s = s.replace("%", "").replace(",", ".").strip()
    try:
        return float(s)
    except:
        return 0.0

def parse_int(s):
    if not s: return 0
    s = s.replace(".", "").replace(",", "").strip()
    try:
        return int(s)
    except:
        return 0

# Test first 10 rows
for i, r in enumerate(rows[1:11]):
    ppl = r[3]
    pml = r[2]
    kec = r[4]
    tot = parse_int(r[5])
    col_r = parse_percent(r[17]) # progres tanpa draft (% submit)
    col_s = parse_percent(r[18]) # selisih progres (% draft)
    col_t = parse_percent(r[19]) # progres approval (% approve)
    print(f"Row {i+1}: PPL: {ppl} | PML: {pml} | Kec: {kec} | Tot: {tot} | %Submit(R): {col_r}% | %Draft(S): {col_s}% | %Approve(T): {col_t}%")

# Aggregate by Kecamatan
kec_agg = {}
pml_agg = {}

for r in rows[1:]:
    if len(r) < 20: continue
    ppl = r[3].strip()
    pml = r[2].strip()
    kec = r[4].strip().upper()
    tot = parse_int(r[5])
    col_r = parse_percent(r[17]) # % submit
    col_s = parse_percent(r[18]) # % draft
    col_t = parse_percent(r[19]) # % approve
    
    # Also raw counts
    draft_count = parse_int(r[7])
    submit_count = parse_int(r[8])
    app_count = parse_int(r[10])
    
    if not kec: continue
    if kec not in kec_agg:
        kec_agg[kec] = {
            "total_muatan": 0,
            "weighted_submit": 0.0,
            "weighted_draft": 0.0,
            "weighted_approve": 0.0,
            "ppl_count": 0,
            "ppl_list": []
        }
    
    k = kec_agg[kec]
    k["total_muatan"] += tot
    k["weighted_submit"] += col_r * tot
    k["weighted_draft"] += col_s * tot
    k["weighted_approve"] += col_t * tot
    k["ppl_count"] += 1
    k["ppl_list"].append({
        "nama": ppl,
        "pml": pml,
        "muatan": tot,
        "submit": col_r,
        "draft": col_s,
        "approve": col_t
    })

    # PML aggregation
    pml_key = (kec, pml)
    if pml_key not in pml_agg:
        pml_agg[pml_key] = {
            "kec": kec,
            "nama": pml,
            "total_muatan": 0,
            "weighted_submit": 0.0,
            "weighted_draft": 0.0,
            "weighted_approve": 0.0,
            "ppl_count": 0
        }
    p = pml_agg[pml_key]
    p["total_muatan"] += tot
    p["weighted_submit"] += col_r * tot
    p["weighted_draft"] += col_s * tot
    p["weighted_approve"] += col_t * tot
    p["ppl_count"] += 1

print("\n--- KECAMATAN AGGREGATE ---")
tot_kab_muatan = 0
tot_kab_sub = 0.0
tot_kab_draft = 0.0
tot_kab_app = 0.0
tot_kab_ppl = 0

for kec, d in sorted(kec_agg.items()):
    m = d["total_muatan"] if d["total_muatan"] > 0 else 1
    avg_sub = d["weighted_submit"] / m
    avg_draft = d["weighted_draft"] / m
    avg_app = d["weighted_approve"] / m
    print(f"Kecamatan {kec:20s}: Muatan={d['total_muatan']:6d} | PPL={d['ppl_count']:2d} | %Submit={avg_sub:6.2f}% | %Draft={avg_draft:6.2f}% | %Approve={avg_app:6.2f}%")
    tot_kab_muatan += d["total_muatan"]
    tot_kab_sub += d["weighted_submit"]
    tot_kab_draft += d["weighted_draft"]
    tot_kab_app += d["weighted_approve"]
    tot_kab_ppl += d["ppl_count"]

kab_m = tot_kab_muatan if tot_kab_muatan > 0 else 1
kab_avg_sub = tot_kab_sub / kab_m
kab_avg_draft = tot_kab_draft / kab_m
kab_avg_app = tot_kab_app / kab_m

print("\n--- KABUPATEN TOTAL ---")
print(f"Total Muatan: {tot_kab_muatan} | Total PPL: {tot_kab_ppl} | Total PML: {len(pml_agg)}")
print(f"Kab % Submit (R): {kab_avg_sub:.2f}% | % Draft (S): {kab_avg_draft:.2f}% | % Approve (T): {kab_avg_app:.2f}%")
