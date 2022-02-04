import { get, set } from "idb-keyval";
import { tsvParse } from "d3-dsv";

export function getRoute() {
  const href = location.href;
  if (!href.includes("#")) {
    return { language: null, file: null };
  }
  const [_, section, language, file] = href.split("#")[1].split("/");
  return { section, language, file };
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
    return [{ sectionTitle: "", languages: listOfLangs.sort(alphaCompare) }];
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

    const secOrder = ["json", "xml", "yaml", "js", "py"];
    const toVal = (title) =>
      secOrder.findIndex((x) => x === title.toLowerCase());
    return Object.entries(langGroups)
      .map(([type, langs]: [string, string[]]) => ({
        sectionTitle: type,
        languages: langs.sort(alphaCompare),
      }))
      .sort((a, b) => toVal(a.sectionTitle) - toVal(b.sectionTitle));
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
  Description: string;
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
  )
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => a.count - b.count);

const removeImages = (fileContent) =>
  fileContent
    .split("\n")
    .map((x) => (x.includes("data:image") ? "PNG" : x))
    .join("\n");
export function parseResults(directory: Directory, key: string) {
  return Object.entries(directory).reduce((acc, [lang, files]) => {
    const filteredFiles = Object.entries(files)
      .filter(([fileName, fileContent]) => {
        return (
          lang.toLowerCase().includes(key.toLowerCase()) ||
          fileName.toLowerCase().includes(key.toLowerCase()) ||
          removeImages(fileContent).toLowerCase().includes(key.toLowerCase())
        );
      })
      .map(([fileName, fileContent]) => {
        return { lang, fileName, fileContent: removeImages(fileContent) };
      });
    return acc.concat(filteredFiles);
  }, []);
}

export const badges = [
  "Language Form",
  "Coded Domain",
  "Execution Model",
  "Formal Definition Available",
  "Extensible",
  "Alt API Available",
  "Abstraction Mechanism",
  "Source",
];
export type Badge = { badgeType: string; badgeValue: string };

export function filterLanguagesBasedOnBadges(
  langMeta: LangMeta,
  filter: Badge[]
): Set<string> {
  const filterMap = filter.reduce((acc, { badgeType, badgeValue }) => {
    if (!acc[badgeType]) {
      acc[badgeType] = new Set();
    }
    acc[badgeType].add(badgeValue);
    return acc;
  }, {});
  return new Set(
    Object.entries(langMeta)
      .filter(([lang, props]) => {
        let valid = true;
        Object.entries(props).forEach(([key, val]) => {
          if (!filterMap[key] || !valid) {
            // console.log(row, key, !filterMap[key], !valid);
            return;
          }
          valid = filterMap[key].has(val);
        });
        // console.log(lang, props, valid);
        return valid;
      }, {})
      .map(([key]) => key)
  );
}
