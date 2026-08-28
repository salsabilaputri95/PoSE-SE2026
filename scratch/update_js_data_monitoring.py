import json, re

with open('scratch/new_monitoring_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update links
content = re.sub(
    r'monitoringPetugas:\s*"[^"]+"',
    'monitoringPetugas: "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit?gid=1206401506#gid=1206401506"',
    content
)

# Update kpiKabupaten
kpi = new_data['kpi']
content = re.sub(r'persentaseSubmit:\s*[0-9\.]+', f'persentaseSubmit: {kpi["persentaseProgres"]}', content)
content = re.sub(r'persentaseDraft:\s*[0-9\.]+', f'persentaseDraft: {kpi["persentaseOpenDraft"]}', content)
content = re.sub(r'persentaseProgres:\s*[0-9\.]+', f'persentaseProgres: {kpi["persentaseProgres"]}', content)
content = re.sub(r'persentaseOpenDraft:\s*[0-9\.]+', f'persentaseOpenDraft: {kpi["persentaseOpenDraft"]}', content)
content = re.sub(r'persentaseApproved:\s*[0-9\.]+', f'persentaseApproved: {kpi["persentaseApproved"]}', content)
content = re.sub(r'totalMuatan:\s*[0-9]+', f'totalMuatan: {kpi["totalMuatan"]}', content)
content = re.sub(r'targetKeluargaUsaha:\s*"[^"]+"', f'targetKeluargaUsaha: "{kpi["targetKeluargaUsaha"]}"', content)
content = re.sub(r'totalPPL:\s*[0-9]+', f'totalPPL: {kpi["totalPPL"]}', content)
content = re.sub(r'totalPML:\s*[0-9]+', f'totalPML: {kpi["totalPML"]}', content)

# Replace progresKecamatan
prog_json = json.dumps(new_data['progresKecamatan'], indent=2, ensure_ascii=False)
content = re.sub(r'progresKecamatan:\s*\[[\s\S]*?\n\s*\],', f'progresKecamatan: {prog_json},', content)

# Replace petugasKecamatan
pet_json = json.dumps(new_data['petugasKecamatan'], indent=2, ensure_ascii=False)
content = re.sub(r'petugasKecamatan:\s*\{[\s\S]*?\n\s*\},', f'petugasKecamatan: {pet_json},', content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated js/data.js successfully!')
