import {get, set} from 'idb-keyval';
import {tsvParse} from 'd3-dsv';

export function getRoute() {
  const href = location.href;
  if (!href.includes('#')) {
    return {language: null, file: null};
  }
  const [_, section, language, file] = href.split('#')[1].split('/');
  return {section, language, file};
}

export const last = (arr: any[]) => arr[arr.length - 1];
export type LangSort = 'none' | 'alphabetical' | 'carrier-language' | 'number-of-examples';

export type Directory = {[lang: string]: {[fileName: string]: string}};

export function createSort(
  langRows: LangMetaRow[],
  langSort: LangSort,
  langCounts: {[lang: string]: number}
): {sectionTitle: string; languages: {viewName: string; linkName: string}[]}[] {
  const toRep = (rows: LangMetaRow[]) => rows.map((x) => ({viewName: x.System, linkName: x.sysKey}));
  if (langSort === 'number-of-examples') {
    const languages = toRep(langRows.sort((a, b) => langCounts[b.sysKey] - langCounts[a.sysKey]));
    return [{sectionTitle: '', languages}];
  }
  if (langSort === 'alphabetical') {
    const languages = toRep(langRows.sort((a, b) => a.System.localeCompare(b.System)));
    return [{sectionTitle: '', languages}];
  }

  if (langSort === 'carrier-language') {
    const langGroups = langRows.reduce((acc, lang) => {
      // const exampleFileName = Object.keys(directory[lang.sysKey])[0];
      // const type = last(exampleFileName.split('.'));
      // const langType = overwrites[type] || type;
      acc[lang.Carrier] = (acc[lang.Carrier] || []).concat(lang);
      return acc;
    }, {});

    const secOrder = ['json', 'xml', 'yaml', 'js', 'python'];
    const toVal = (title) => secOrder.findIndex((x) => x === title.toLowerCase());
    return Object.entries(langGroups)
      .map(([type, langs]: [string, LangMetaRow[]]) => ({
        sectionTitle: type,
        languages: toRep(langs.sort((a, b) => a.System.localeCompare(b.System)))
      }))
      .sort((a, b) => toVal(a.sectionTitle) - toVal(b.sectionTitle));
  }

  // none
  return [{sectionTitle: '', languages: toRep(langRows)}];
}

export async function getBundle(): Promise<Directory> {
  const version = await get('bundle-hash');
  const deployedVersionNumber = await fetch('./bundle-hash.json').then((x) => x.json());
  if (deployedVersionNumber === version) {
    const directoryBundle = await get('bundle');
    if (directoryBundle) {
      return directoryBundle;
    }
  }
  const fetchedBundle = await fetch('./example-bundle.json').then((x) => x.json());
  set('bundle', fetchedBundle);
  set('bundle-hash', deployedVersionNumber);
  return fetchedBundle;
}

export type LangMetaRow = {
  System: string;
  sysKey: string;
  'harvest URL': string;
  License: string;
  Paper: string;
  Link: string;
  Domain: string;
  Description: string;
  Carrier: string;
};
export type LangMeta = {
  [lang: string]: LangMetaRow;
};
export async function getLangMeta(): Promise<LangMeta> {
  const parsedMeta = await fetch('./lang-meta.tsv')
    .then((x) => x.text())
    .then((x) => tsvParse(x) as LangMetaRow[]);

  return parsedMeta.reduce((acc, row) => {
    acc[row.sysKey] = row;
    return acc;
  }, {});
}

export const groupByKey = (data: LangMetaRow[], key: string): {key: string; count: number}[] =>
  Object.entries(
    data.reduce((acc, row) => {
      acc[row[key]] = (acc[row[key]] || 0) + 1;
      return acc;
    }, {} as {[x: string]: number})
  )
    .map(([key, count]) => ({key, count}))
    .sort((a, b) => a.count - b.count);

const removeImages = (fileContent) =>
  fileContent
    .split('\n')
    .map((x) => (x.includes('data:image') ? 'PNG' : x))
    .join('\n');
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
        return {lang, fileName, fileContent: removeImages(fileContent)};
      });
    return acc.concat(filteredFiles);
  }, []);
}

export function filterLanguagesBasedOnBadges(langMeta: LangMeta, filter: Badge[]): Set<string> {
  const filterMap = filter.reduce((acc, {badgeType, badgeValue}) => {
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
            return;
          }
          valid = filterMap[key].has(val);
        });
        return valid;
      }, {})
      .map(([key]) => key)
  );
}

export const filterFilterForNewBadge = (filter, badge) =>
  filter.filter((x) => x.bageType !== badge.badgeType && x.badgeValue !== badge.badgeValue);

export const buildKeyOptions = (langMeta: LangMeta, allowedCols: Set<string>): {[lang: string]: string[]} =>
  Object.entries(
    Object.values(langMeta).reduce((acc, row) => {
      Object.entries(row).forEach(([key, val]) => {
        if (!allowedCols.has(key)) {
          return;
        }
        acc[key] = (acc[key] || []).concat(val);
      });
      return acc;
    }, {})
  ).reduce((acc, [key, vals]) => {
    acc[key] = Array.from(new Set(vals as any));
    return acc;
  }, {});

// export const badges = [
//   'Abstraction Mechanism',
//   'Alt API Available',
//   'Coded Domain',
//   'Conceptual Model',
//   'Data manipulation',
//   'Execution Model',
//   'Extensible',
//   'Formal Definition Available',
//   'Language Form',
//   'Language',
//   'Output Type',
//   'Provides Accessibility',
//   'Source',
//   'System'
//   // "Domain",
// ];

export const badges = [
  'System',
  // "LatexKey",
  // "sysKey",
  // "harvest URL",
  // "License",
  // "Paper",
  // "Paper Link",
  // "Link",
  // "Domain",
  'Carrier',
  'Coded Domain',
  // "Description",
  'Output Type',
  'Conceptual Model',
  'Abstraction Mechanism',
  'Source',
  'Language Form',
  'Coded Domain',
  'Execution Model',
  'Alt API Available',
  'Extensible',
  'Formal Definition Available',
  'Language',
  'Data manipulation',
  'Provides Accessibility',
  'Juxtaposition strategy',
  'Allowed Data Type',
  'Data model'
];
export type Badge = {badgeType: string; badgeValue: string};

export const badgeExplanation = {
  'Abstraction Mechanism':
    'Whether or not the language has means for expressing abstraction. This includes control flow statements, conditionals, and variables.',
  'Alt API Available':
    'Whether or not there is an alternative way to control the functionality of the language (such as the DSL expressed in another language or through an API).',
  Carrier: 'The host language for the DSL.',
  'Coded Domain':
    'What general purpose the language is meant to serve. These are coded into Charting, enhancing an specific Interaction, working in a particular Domain, and enabling a particular Chart Type.',
  'Conceptual Model': 'The model underpinning the way in which the language operates.  ',
  'Data manipulation':
    'The mechanisms that language provides for interacting with data. Coded into no ops, just filters, and richer language than filters.',
  Domain: "An un-coded description of the language's purpose.",
  'Execution Model':
    'The mechanism by which the language is executed. Includes Compiled, Interpreted, and Embedded.',
  Extensible: 'Whether or not the language can be customized to taste and task.',
  'Formal Definition Available':
    'Whether or not there is a format definition available for that language. This is somewhat loose notion of formality and includes JSON and XML schema as formal definitions.',
  'Language Form':
    'Whether the language is internal (defined and executed within a host language) or external (requires an interpreter or compiler to execute).',
  Language: 'The carrier language of the DSL.',
  'Output Type': 'What the output of the system is.',
  'Provides Accessibility': "Whether or not the language provides it's own accessibility features.",
  Source:
    'The type of organization that spawned this language. This includes industry, open source, and academia.',
  System: 'The name of the language.',
  'Juxtaposition strategy': 'The way in which the system facilitates combining graphics.',
  'Allowed Data Type': 'The generic type of data that is expected by the system',
  'Data model': 'The conceptual model under which data is treated, closely related to the conceptual model'
};
badges.forEach((x) => {
  if (!badgeExplanation[x]) {
    console.log(`missing explanation for ${x}`);
  }
});

export function classnames(classObject: {[val: string]: boolean}): string {
  return Object.keys(classObject)
    .filter((name) => classObject[name] && name)
    .join(' ');
}

export const getLangCounts = (directory: Directory): {[lang: string]: number} =>
  Object.entries(directory)
    .map(([key, files]) => ({
      key,
      files: Object.values(files).length
    }))
    .reduce((acc, row) => ({...acc, [row.key]: row.files}), {});
