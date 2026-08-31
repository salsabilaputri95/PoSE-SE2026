import json
import re

with open('scratch/anomali_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

# 1. Update kpiKabupaten in data.js
old_kpi_pattern = r'kpiKabupaten:\s*\{[\s\S]*?\n\s*\},'
new_kpi = """kpiKabupaten: {
        "targetKeluargaUsaha": "148.025",
        "totalMuatan": 171629,
        "persentaseApproved": 86.0,
        "persentaseSubmit": 97.5,
        "persentaseDraft": 1.8,
        "persentaseRejected": 1.9,
        "persentaseProgresTotal": 56,
        "totalPPL": 327,
        "totalPML": 48,
        "totalAnomali": 2005,
        "anomaliUsahaTotal": 1518,
        "anomaliUsahaSelesai": 1314,
        "anomaliUsahaBelum": 204,
        "persentaseAnomaliUsahaSelesai": 86.6,
        "persentaseAnomaliUsahaBelum": 13.4,
        "anomaliKeluargaTotal": 487,
        "anomaliKeluargaSelesai": 473,
        "anomaliKeluargaBelum": 14,
        "persentaseAnomaliKeluargaSelesai": 97.1,
        "persentaseAnomaliKeluargaBelum": 2.9,
        "persentaseAnomaliBelum": 10.9,
        "persentaseAnomaliCatatan": 30.9,
        "persentaseAnomaliPerbaikan": 58.3,
        "totalUsahaPusat": 34,
        "totalKeluargaKhusus": 28
    },"""

data_js = re.sub(old_kpi_pattern, new_kpi, data_js, count=1)

# 2. Update each kecamatan in progresKecamatan
for item in parsed['kecamatan'].items():
    kec, kdata = item
    # Update in progresKecamatan
    pat = rf'({{\s*"nama":\s*"{kec}",[\s\S]*?"anomaliBelum":\s*)[\d\.]+(,[\s\S]*?"anomaliCatatan":\s*)[\d\.]+(,[\s\S]*?"anomaliPerbaikan":\s*)[\d\.]+'
    repl = rf'\g<1>{kdata["anomaliBelum"]}\g<2>{kdata["anomaliCatatan"]}\g<3>{kdata["anomaliPerbaikan"]}'
    data_js = re.sub(pat, repl, data_js)

# 3. Update each kecamatan in petugasKecamatan with anomali stats
for kec, kdata in parsed['kecamatan'].items():
    pattern = rf'("{kec}":\s*\{{\s*\n\s*"muatan":\s*\d+,\s*\n\s*"progres":\s*[\d\.]+,)'
    match = re.search(pattern, data_js)
    if match:
        extra_fields = f"""\n        anomaliTotal: {kdata['anomaliTotal']},
        anomaliUsahaTotal: {kdata['anomaliUsahaTotal']},
        anomaliUsahaSelesai: {kdata['anomaliUsahaSelesai']},
        anomaliUsahaBelum: {kdata['anomaliUsahaBelum']},
        persentaseAnomaliUsahaSelesai: {kdata['persentaseAnomaliUsahaSelesai']},
        persentaseAnomaliUsahaBelum: {kdata['persentaseAnomaliUsahaBelum']},
        anomaliKeluargaTotal: {kdata['anomaliKeluargaTotal']},
        anomaliKeluargaSelesai: {kdata['anomaliKeluargaSelesai']},
        anomaliKeluargaBelum: {kdata['anomaliKeluargaBelum']},
        persentaseAnomaliKeluargaSelesai: {kdata['persentaseAnomaliKeluargaSelesai']},
        persentaseAnomaliKeluargaBelum: {kdata['persentaseAnomaliKeluargaBelum']},
        anomaliBelum: {kdata['anomaliBelum']},
        anomaliCatatan: {kdata['anomaliCatatan']},
        anomaliPerbaikan: {kdata['anomaliPerbaikan']},
        anomaliPplList: {json.dumps(kdata['anomaliPplList'], indent=12).strip()},
        anomaliPmlList: {json.dumps(kdata['anomaliPmlList'], indent=12).strip()},"""
        
        clean_header = match.group(1)
        data_js = data_js.replace(clean_header, clean_header + extra_fields, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_js)

print('Successfully updated js/data.js with complete Anomali breakdown!')
