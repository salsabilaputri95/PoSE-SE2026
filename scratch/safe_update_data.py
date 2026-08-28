import json

with open('scratch/new_monitoring_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update links.monitoringPetugas
p_links = content.find('links: {')
p_mon = content.find('monitoringPetugas:', p_links)
p_mon_end = content.find('\n', p_mon)
content = content[:p_mon] + 'monitoringPetugas: "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit?gid=1206401506#gid=1206401506",' + content[p_mon_end+1:]

# 2. Update progresKecamatan
pos_prog_start = content.find('progresKecamatan: [')
pos_prog_end = content.find('\n    petugasKecamatan:', pos_prog_start)
if pos_prog_end == -1:
    pos_prog_end = content.find('\n    // Breakdown', pos_prog_start)
    if pos_prog_end == -1:
        # find closing bracket of progresKecamatan
        pos_prog_end = content.find('],', pos_prog_start) + 2

prog_str = 'progresKecamatan: ' + json.dumps(new_data['progresKecamatan'], indent=8, ensure_ascii=False) + ','
# Find where progresKecamatan array ends
p_end_prog = content.find('\n    // Breakdown', pos_prog_start)
if p_end_prog == -1:
    p_end_prog = content.find('\n    petugasKecamatan:', pos_prog_start)

content = content[:pos_prog_start] + prog_str + '\n\n    // Breakdown Petugas per Kecamatan (PPL & PML)\n    ' + content[content.find('petugasKecamatan:', pos_prog_start):]

# 3. Update petugasKecamatan
pos_pet_start = content.find('petugasKecamatan: {')
pos_pet_end = content.find('\n    // 8 KBLI Unggulan', pos_pet_start)
if pos_pet_end == -1:
    pos_pet_end = content.find('\n    kbliJeneponto:', pos_pet_start)

pet_str = 'petugasKecamatan: ' + json.dumps(new_data['petugasKecamatan'], indent=8, ensure_ascii=False) + ',\n\n    '
content = content[:pos_pet_start] + pet_str + content[pos_pet_end:]

# 4. Update kpiKabupaten
kpi = new_data['kpi']
import re
content = re.sub(r'persentaseSubmit:\s*[0-9\.]+', f'persentaseSubmit: {kpi["persentaseProgres"]}', content)
content = re.sub(r'persentaseDraft:\s*[0-9\.]+', f'persentaseDraft: {kpi["persentaseOpenDraft"]}', content)
content = re.sub(r'persentaseProgres:\s*[0-9\.]+', f'persentaseProgres: {kpi["persentaseProgres"]}', content)
content = re.sub(r'persentaseOpenDraft:\s*[0-9\.]+', f'persentaseOpenDraft: {kpi["persentaseOpenDraft"]}', content)
content = re.sub(r'persentaseApproved:\s*[0-9\.]+', f'persentaseApproved: {kpi["persentaseApproved"]}', content)
content = re.sub(r'totalMuatan:\s*[0-9]+', f'totalMuatan: {kpi["totalMuatan"]}', content)
content = re.sub(r'totalPPL:\s*[0-9]+', f'totalPPL: {kpi["totalPPL"]}', content)
content = re.sub(r'totalPML:\s*[0-9]+', f'totalPML: {kpi["totalPML"]}', content)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated js/data.js successfully!')
