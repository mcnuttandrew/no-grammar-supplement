import stringify from "json-stringify-pretty-compact";
import { get, set } from "idb-keyval";
import { tsvParse } from "d3-dsv";

export function getRoute() {
  const href = location.href;
  if (!href.includes("#")) {
    return { language: null, file: null };
  }
  const [_, language, file] = href.split("#")[1].split("/");
  return { language, file };
}

const alphaCompare = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
const last = (arr: any[]) => arr[arr.length - 1];
export type LangSort = "none" | "alphabetical" | "carrier-language";

export type Directory = { [lang: string]: { [fileName: string]: string } };

export function createSort(
  listOfLangs: string[],
  langSort: LangSort,
  directory: Directory
): { sectionTitle: string; languages: string[] }[] {
  if (langSort === "alphabetical") {
    const languages = listOfLangs.sort(alphaCompare);
    return [{ sectionTitle: "", languages }];
  }

  if (langSort === "carrier-language") {
    const overwrites = { ac: "json", ts: "js", xsl: "xml" };
    const langGroups = listOfLangs.reduce((acc, lang) => {
      const exampleFileName = Object.keys(directory[lang])[0];
      const type = last(exampleFileName.split("."));
      const langType = overwrites[type] || type;
      acc[langType] = (acc[langType] || []).concat(lang);
      return acc;
    }, {});

    return Object.entries(langGroups)
      .map(([type, langs]: [string, string[]]) => ({
        sectionTitle: type,
        languages: langs.sort(alphaCompare),
      }))
      .sort((a, b) => a.sectionTitle.localeCompare(b.sectionTitle));
  }

  // none
  return [{ sectionTitle: "", languages: listOfLangs }];
}

export type Modifier = "none" | "json-small" | "json-dense";
export function modifyPresentation(code: string | null, mod: Modifier): string {
  switch (mod) {
    case "json-small":
      try {
        return stringify(JSON.parse(code));
      } catch (e) {
        return code || "";
      }
    case "json-dense":
      try {
        return stringify(JSON.parse(code), { maxLength: 200 });
      } catch (e) {
        return code || "";
      }
    case "none":
      return code || "";

    default:
      return "";
  }
}

export async function getBundle() {
  const version = await get("bundle-hash");
  const deployedVersionNumber = await fetch("./bundle-hash.json").then((x) =>
    x.json()
  );
  if (deployedVersionNumber === version) {
    const directoryBundle = await get("bundle");
    if (directoryBundle) {
      return directoryBundle;
    }
  }
  const fetchedBundle = await fetch("./example-bundle.json").then((x) =>
    x.json()
  );
  set("bundle", fetchedBundle);
  set("bundle-hash", deployedVersionNumber);
  return fetchedBundle;
}

export type LangMetaRow = {
  System: string;
  sysKey: string;
  "harvest URL": string;
  License: string;
  Paper: string;
  Link: string;
  Domain: string;
};
export type LangMeta = {
  [lang: string]: LangMetaRow;
};
export async function getLangMeta(): Promise<LangMeta> {
  const parsedMeta = await fetch("./lang-meta.tsv")
    .then((x) => x.text())
    .then((x) => tsvParse(x) as LangMetaRow[]);

  return parsedMeta.reduce((acc, row) => {
    acc[row.sysKey] = row;
    return acc;
  }, {});
}
