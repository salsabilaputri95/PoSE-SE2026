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
        "belumCount": 218,
        "catatanCount": 619,
        "perbaikanCount": 1168,
        "totalUsahaPusat": 34,
        "totalKeluargaKhusus": 28
    },"""

data_js = re.sub(old_kpi_pattern, new_kpi, data_js, count=1)

# 2. Update progresKecamatan
for kec, kdata in parsed['kecamatan'].items():
    pat = rf'({{\s*"nama":\s*"{kec}",[\s\S]*?"anomaliBelum":\s*)[\d\.]+(,[\s\S]*?"anomaliCatatan":\s*)[\d\.]+(,[\s\S]*?"anomaliPerbaikan":\s*)[\d\.]+'
    repl = rf'\g<1>{kdata["anomaliBelum"]}\g<2>{kdata["anomaliCatatan"]}\g<3>{kdata["anomaliPerbaikan"]}'
    data_js = re.sub(pat, repl, data_js)

# 3. For each kecamatan in petugasKecamatan, update anomaliPplList, anomaliPmlList and count fields
for kec, kdata in parsed['kecamatan'].items():
    # Replace anomaliPplList if present
    ppl_str = json.dumps(kdata['anomaliPplList'], indent=12)
    pml_str = json.dumps(kdata['anomaliPmlList'], indent=12)
    
    pat_ppl = rf'anomaliPplList:\s*\[[\s\S]*?\n\s*\]'
    pat_pml = rf'anomaliPmlList:\s*\[[\s\S]*?\n\s*\]'
    
    # We can replace anomaliPplList and anomaliPmlList for this kecamatan
    # Let's find the kecamatan block
    kec_start = data_js.find(f'"{kec}":')
    if kec_start != -1:
        # Find next kecamatan or end of petugasKecamatan
        next_kec_start = data_js.find('\n    },', kec_start)
        kec_block = data_js[kec_start:next_kec_start]
        
        # Replace inside kec_block
        new_kec_block = re.sub(r'anomaliPplList:\s*\[[\s\S]*?\n\s*\]', f'anomaliPplList: {ppl_str.strip()}', kec_block, count=1)
        new_kec_block = re.sub(r'anomaliPmlList:\s*\[[\s\S]*?\n\s*\]', f'anomaliPmlList: {pml_str.strip()}', new_kec_block, count=1)
        new_kec_block = re.sub(r'belumCount:\s*\d+,?', f'belumCount: {kdata["belumCount"]},', new_kec_block)
        if 'belumCount:' not in new_kec_block:
            new_kec_block = new_kec_block.replace(f'anomaliTotal: {kdata["anomaliTotal"]},', f'anomaliTotal: {kdata["anomaliTotal"]},\n        belumCount: {kdata["belumCount"]},\n        catatanCount: {kdata["catatanCount"]},\n        perbaikanCount: {kdata["perbaikanCount"]},')
            
        data_js = data_js[:kec_start] + new_kec_block + data_js[next_kec_start:]

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_js)

print('Successfully updated js/data.js!')
