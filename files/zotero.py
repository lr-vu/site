"""This script fetches the raw data from Zotero, parses it. The raw zotero file is saved
at `./_data/publications-raw.yaml` and the parsed file is saved 
at `./_data/publications.yaml`. The parsed yaml will be used by 
`research/publications.md to generate the publications page."""
import os
from pyzotero import zotero
import yaml

library_id = 4989916
library_type = "group"
api_key = os.environ.get("ZOTERO_API_KEY")

zot = zotero.Zotero(library_id, library_type, api_key)
print("Fetching data form Zotero...")
publications = zot.everything(zot.top())

with open("./_data/publications.yaml", "w") as stream:
    yaml.safe_dump(publications, stream, indent=4, allow_unicode=True)
print("Done!")
