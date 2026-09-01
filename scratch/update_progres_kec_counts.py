import json
import re

with open('scratch/anomali_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

# 1. Update progresKecamatan
for kec, kdata in parsed['kecamatan'].items():
    pat = rf'({{\s*"nama":\s*"{kec}",[\s\S]*?"anomaliBelum":\s*)[\d\.]+(,[\s\S]*?"anomaliCatatan":\s*)[\d\.]+(,[\s\S]*?"anomaliPerbaikan":\s*)[\d\.]+'
    repl = rf'\g<1>{kdata["anomaliBelum"]}\g<2>{kdata["anomaliCatatan"]}\g<3>{kdata["anomaliPerbaikan"]},\n                "anomaliTotal": {kdata["anomaliTotal"]},\n                "belumCount": {kdata["belumCount"]},\n                "catatanCount": {kdata["catatanCount"]},\n                "perbaikanCount": {kdata["perbaikanCount"]}'
    data_js = re.sub(pat, repl, data_js)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_js)

print('Updated progresKecamatan in js/data.js!')
