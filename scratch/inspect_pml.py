import urllib.request, csv, io, json

# Check sheet gids from 0 to 10
for gid in [0, 1, 2, 3, 4, 5, 203875323, 105002898, 46846179]:
    try:
        url = f"https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid={gid}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        content = urllib.request.urlopen(req).read().decode("utf-8")
        reader = list(csv.reader(io.StringIO(content)))
        print(f"GID {gid}: Success! Rows: {len(reader)}, Header: {reader[0][:5] if reader else 'empty'}")
    except Exception as e:
        # print(f"GID {gid}: {e}")
        pass

# Let's inspect GID 0 rows
url0 = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=0"
content0 = urllib.request.urlopen(urllib.request.Request(url0, headers={"User-Agent": "Mozilla/5.0"})).read().decode("utf-8")
reader0 = list(csv.reader(io.StringIO(content0)))
print("\nTotal rows in GID 0:", len(reader0))
print("Header:", reader0[0])
print("\nFirst 5 rows:")
for r in reader0[1:6]:
    print(r[:6], "R:", r[17] if len(r)>17 else "", "S:", r[18] if len(r)>18 else "", "T:", r[19] if len(r)>19 else "")
