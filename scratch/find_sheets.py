import urllib.request, re, json, csv, io

# Fetch HTML and search for all sheet IDs and sheet names in the workbook
url = "https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/edit"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
html = urllib.request.urlopen(req).read().decode("utf-8")

# Extract all sheet metadata
sheets_meta = re.findall(r'\{\\\"name\\\":\\\"(.*?)\\\",.*?\\\"sheetId\\\":(\d+)', html)
print("Found sheets_meta:", sheets_meta)

if not sheets_meta:
    # Alternative patterns in bootstrapData
    matches = re.findall(r'\[(\d+),0,\"(.*?)\"', html)
    print("Matches 2:", matches)

# Check all possible sheet names or gids
for match in re.finditer(r'\"([^\"]+)\",\d+,\d+,\d+,\"[^\"]*\",(\d+)', html):
    print("Match:", match.groups())
