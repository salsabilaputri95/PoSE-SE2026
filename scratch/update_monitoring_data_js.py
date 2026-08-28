import json, re

with open("scratch/monitoring_data.json", "r", encoding="utf-8") as f:
    mon_data = json.load(f)

with open("js/data.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace monitoring link
new_mon_link = 'https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit?gid=0#gid=0'
js_content = re.sub(r'monitoringPetugas:\s*"[^"]*"', f'monitoringPetugas: "{new_mon_link}"', js_content)

# Update kpiKabupaten
kpi = mon_data["kpiSummary"]
js_content = re.sub(r'"persentaseApproved":\s*[\d\.]+', f'"persentaseApproved": {kpi["approved"]}', js_content)
js_content = re.sub(r'"persentaseSubmit":\s*[\d\.]+', f'"persentaseSubmit": {kpi["submit"]}', js_content)
js_content = re.sub(r'"persentaseDraft":\s*[\d\.]+', f'"persentaseDraft": {kpi["draft"]}', js_content)
if '"persentaseDraft"' not in js_content:
    js_content = js_content.replace(f'"persentaseSubmit": {kpi["submit"]},', f'"persentaseSubmit": {kpi["submit"]},\n        "persentaseDraft": {kpi["draft"]},')
js_content = re.sub(r'"totalMuatan":\s*\d+', f'"totalMuatan": {kpi["muatan"]}', js_content)
js_content = re.sub(r'"totalPPL":\s*\d+', '"totalPPL": 327', js_content)
js_content = re.sub(r'"totalPML":\s*\d+', '"totalPML": 48', js_content)

# Replace progresKecamatan
prog_json_str = json.dumps(mon_data["progresKecamatan"], indent=8, ensure_ascii=False)
js_content = re.sub(
    r'progresKecamatan:\s*\[[\s\S]*?\n\s*\],',
    f'progresKecamatan: {prog_json_str},',
    js_content,
    count=1
)

# Replace petugasKecamatan
petugas_json_str = json.dumps(mon_data["petugasKecamatan"], indent=8, ensure_ascii=False)
js_content = re.sub(
    r'petugasKecamatan:\s*\{[\s\S]*?\n\s*\},(\s*// --------------------------------------------------------------------------|\s*// Daftar Referensi KBLI|\s*kbliList:)',
    f'petugasKecamatan: {petugas_json_str},\n\n\\1',
    js_content,
    count=1
)

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Updated js/data.js successfully!")
