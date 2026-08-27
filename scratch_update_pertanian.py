import json
import os

with open('scratch_pertanian_data.json', 'r', encoding='utf-8') as f:
    pertanian_data = json.load(f)

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add link
target_str = 'usahaBesar: "https://docs.google.com/spreadsheets/d/18e4NwGBJy8myLvNLTVj1jV4pLpwgqZn3/edit?usp=sharing",'
replacement_str = 'pertanian: "https://docs.google.com/spreadsheets/d/19DcV3CA0FkcpsZldqd-ChW8JL0SgcVFX-dC7Y_0_3So/edit?gid=46846179#gid=46846179",\n        ' + target_str

if 'pertanian:' not in content:
    content = content.replace(target_str, replacement_str)

pertanian_json = json.dumps(pertanian_data['desaList'], indent=4, ensure_ascii=False)
kpi_json = json.dumps({
    'totalUtp2023': pertanian_data['totalUtp2023'],
    'totalSe2026': pertanian_data['totalSe2026'],
    'persentaseRealisasi': pertanian_data['persentaseKab'],
    'totalDesa': len(pertanian_data['desaList'])
}, indent=4)

insert_block = f",\n    kpiPertanian: {kpi_json},\n    pertanianList: {pertanian_json}\n"

idx = content.rfind('};')
if idx != -1:
    new_content = content[:idx] + insert_block + content[idx:]
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('js/data.js updated successfully')
else:
    print('Error: Could not find }; in js/data.js')
