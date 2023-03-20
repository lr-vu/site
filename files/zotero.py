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

with open("./_data/publications-raw.yaml", "w") as stream:
    yaml.safe_dump(publications, stream, indent=4, allow_unicode=True)


def parse_publication(publication: dict) -> dict:
    """Parse what we get from publication to what we want to have.
    We only need the following fields:
    title, url, issued, author, container-title, keyword, issued
    """
    pub = {}

    pub["title"] = publication["data"]["title"]
    pub["url"] = publication["data"]["url"]
    pub["issued"] = publication["data"]["date"]

    pub["author"] = []

    for item in publication["data"]["creators"]:
        if item["creatorType"] == "author":
            if "lastName" in item:
                family = item["lastName"]
            else:
                family = ""
            if "firstName" in item:
                given = item["firstName"]
            else:
                given = ""
            if "name" in item:
                name = item["name"]
            else:
                name = ""

            pub["author"].append({"family": family, "given": given, "name": name})

    if "publicationTitle" in publication["data"]:
        pub["container-title"] = publication["data"]["publicationTitle"]
    elif "proceedingsTitle" in publication["data"]:
        pub["container-title"] = publication["data"]["proceedingsTitle"]
    else:
        pass
    pub["issued"] = publication["data"]["date"]

    return pub


publications = [parse_publication(pub) for pub in publications]

with open("./_data/publications.yaml", "w") as stream:
    yaml.safe_dump(publications, stream, indent=4, allow_unicode=True)
print("Done!")
