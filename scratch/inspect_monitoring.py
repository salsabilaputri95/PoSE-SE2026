import urllib.request, re, json, csv, io

url = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8")
        # Extract sheets
        # Google sheets embeds sheet tabs in items like: [0,0,"PPL",...] or similar
        tabs = re.findall(r'(\d+),0,"([^"]+)",0,', html)
        print("Tabs found (regex 1):", tabs)
        gids = re.findall(r'gid=(\d+)', html)
        print("Unique GIDs in page:", set(gids))
except Exception as e:
    print("Error fetching html:", e)

# Test GID 0
csv_url = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=0"
try:
    with urllib.request.urlopen(csv_url) as resp:
        content = resp.read().decode("utf-8")
        reader = list(csv.reader(io.StringIO(content)))
        print(f"GID 0 total rows: {len(reader)}")
        print("GID 0 header:", reader[0])
except Exception as e:
    print("Error gid 0:", e)
