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
export type LangSort = "none" | "alphebetical" | "carrier-language";

export function createSort(
  listOfLangs: string[],
  langSort: LangSort
): { sectionTitle: string; languages: string[] }[] {
  if (langSort === "alphebetical") {
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
