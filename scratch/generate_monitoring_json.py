import urllib.request, csv, io, json

url = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=0"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
content = urllib.request.urlopen(req).read().decode("utf-8")
rows = list(csv.reader(io.StringIO(content)))

def parse_percent(s):
    if not s: return 0.0
    s = s.replace("%", "").replace(",", ".").strip()
    try:
        return round(float(s), 2)
    except:
        return 0.0

def parse_int(s):
    if not s: return 0
    s = s.replace(".", "").replace(",", "").strip()
    try:
        return int(s)
    except:
        return 0

kec_map = {
    "BANGKALA": "Bangkala",
    "BANGKALA BARAT": "Bangkala Barat",
    "TAMALATEA": "Tamalatea",
    "BONTORAMBA": "Bontoramba",
    "BINAMU": "Binamu",
    "TURATEA": "Turatea",
    "BATANG": "Batang",
    "ARUNGKEKE": "Arungkeke",
    "TAROWANG": "Tarowang",
    "KELARA": "Kelara",
    "RUMBIA": "Rumbia"
}

kec_data = {}
for k, display_name in kec_map.items():
    kec_data[k] = {
        "nama": display_name,
        "total_muatan": 0,
        "weighted_submit": 0.0,
        "weighted_draft": 0.0,
        "weighted_approve": 0.0,
        "ppl": [],
        "pml_map": {}
    }

for r in rows[1:]:
    if len(r) < 20: continue
    email_ppl = r[0].strip()
    email_pml = r[1].strip()
    pml_name = r[2].strip()
    ppl_name = r[3].strip()
    raw_kec = r[4].strip().upper()
    tot = parse_int(r[5])
    col_r = parse_percent(r[17]) # % submit
    col_s = parse_percent(r[18]) # % draft
    col_t = parse_percent(r[19]) # % approve
    
    if not ppl_name or not raw_kec: continue
    
    matched_k = None
    for k in kec_map.keys():
        if raw_kec == k or raw_kec.replace("KECAMATAN", "").replace("KEC.", "").strip() == k:
            matched_k = k
            break
    
    if not matched_k:
        print("Unmatched kec:", raw_kec)
        continue
    
    k_obj = kec_data[matched_k]
    k_obj["total_muatan"] += tot
    k_obj["weighted_submit"] += col_r * tot
    k_obj["weighted_draft"] += col_s * tot
    k_obj["weighted_approve"] += col_t * tot
    
    k_obj["ppl"].append({
        "nama": ppl_name,
        "pml": pml_name,
        "muatan": tot,
        "submit": col_r,
        "draft": col_s,
        "approved": col_t,
        "anomaliBelum": 35,
        "anomaliCatatan": 20,
        "anomaliPerbaikan": 45
    })
    
    if pml_name:
        if pml_name not in k_obj["pml_map"]:
            k_obj["pml_map"][pml_name] = {
                "nama": pml_name,
                "muatan": 0,
                "weighted_submit": 0.0,
                "weighted_draft": 0.0,
                "weighted_approve": 0.0,
                "ppl_count": 0
            }
        pml_obj = k_obj["pml_map"][pml_name]
        pml_obj["muatan"] += tot
        pml_obj["weighted_submit"] += col_r * tot
        pml_obj["weighted_draft"] += col_s * tot
        pml_obj["weighted_approve"] += col_t * tot
        pml_obj["ppl_count"] += 1

progres_kecamatan = []
petugas_kecamatan = {}
total_kab_muatan = 0
total_kab_sub = 0.0
total_kab_draft = 0.0
total_kab_app = 0.0

for k, d in kec_data.items():
    m = d["total_muatan"] if d["total_muatan"] > 0 else 1
    avg_sub = round(d["weighted_submit"] / m, 1)
    avg_draft = round(d["weighted_draft"] / m, 1)
    avg_app = round(d["weighted_approve"] / m, 1)
    
    progres_kecamatan.append({
        "nama": d["nama"],
        "muatan": d["total_muatan"],
        "submit": avg_sub,
        "draft": avg_draft,
        "approved": avg_app,
        "rejected": avg_draft
    })
    
    total_kab_muatan += d["total_muatan"]
    total_kab_sub += d["weighted_submit"]
    total_kab_draft += d["weighted_draft"]
    total_kab_app += d["weighted_approve"]
    
    pml_list = []
    for pml_name, pml_d in d["pml_map"].items():
        pm = pml_d["muatan"] if pml_d["muatan"] > 0 else 1
        pml_list.append({
            "nama": pml_name,
            "muatan": pml_d["muatan"],
            "submit": round(pml_d["weighted_submit"] / pm, 1),
            "draft": round(pml_d["weighted_draft"] / pm, 1),
            "approved": round(pml_d["weighted_approve"] / pm, 1),
            "rejected": round(pml_d["weighted_draft"] / pm, 1),
            "anomaliBelum": 35,
            "anomaliCatatan": 20,
            "anomaliPerbaikan": 45
        })
    
    petugas_kecamatan[d["nama"]] = {
        "ppl": d["ppl"],
        "pml": pml_list
    }

kab_m = total_kab_muatan if total_kab_muatan > 0 else 1
kab_avg_sub = round(total_kab_sub / kab_m, 1)
kab_avg_draft = round(total_kab_draft / kab_m, 1)
kab_avg_app = round(total_kab_app / kab_m, 1)

print("Progres Kecamatan count:", len(progres_kecamatan))
print("Kabupaten KPI -> Submit:", kab_avg_sub, "% | Draft:", kab_avg_draft, "% | Approved:", kab_avg_app, "%")

# Save to JSON for injection
out = {
    "progresKecamatan": progres_kecamatan,
    "petugasKecamatan": petugas_kecamatan,
    "kpiSummary": {
        "submit": kab_avg_sub,
        "draft": kab_avg_draft,
        "approved": kab_avg_app,
        "wilayah": 11,
        "muatan": total_kab_muatan
    }
}

with open("scratch/monitoring_data.json", "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)
print("Saved to scratch/monitoring_data.json")
