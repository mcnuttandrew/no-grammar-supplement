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
export const last = (arr: any[]) => arr[arr.length - 1];
export type LangSort =
  | "none"
  | "alphabetical"
  | "carrier-language"
  | "number-of-examples";

export type Directory = { [lang: string]: { [fileName: string]: string } };

export function createSort(
  listOfLangs: string[],
  langSort: LangSort,
  directory: Directory,
  langCounts: { [lang: string]: number }
): { sectionTitle: string; languages: string[] }[] {
  if (langSort === "number-of-examples") {
    const languages = listOfLangs.sort((a, b) => langCounts[b] - langCounts[a]);
    return [{ sectionTitle: "", languages }];
  }
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

export type Modifier =
  | "none"
  | "json-small"
  | "json-dense"
  | "viewer"
  | "collapsed";
export function modifyPresentation(code: string | null, mod: Modifier): string {
  let parsedCode = {};
  try {
    parsedCode = JSON.parse(code);
  } catch (e) {
    return code || "";
  }
  switch (mod) {
    case "json-small":
      return stringify(parsedCode);
    case "json-dense":
      return stringify(parsedCode, { maxLength: 200 });
    case "collapsed":
      return JSON.stringify(parsedCode);
    case "none":
    default:
      return code || "";
  }
}

export async function getBundle(): Promise<Directory> {
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

export const groupByKey = (
  data: LangMetaRow[],
  key: string
): { key: string; count: number }[] =>
  Object.entries(
    data.reduce((acc, row) => {
      acc[row[key]] = (acc[row[key]] || 0) + 1;
      return acc;
    }, {} as { [x: string]: number })
  ).map(([key, count]) => ({ key, count }));
