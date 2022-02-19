import {createCompoundSchema} from 'genson-js';
const {getFileNamesFromDir, executeCommandLineCmd} = require('hoopoe');
const {writeFile, readFile} = require('fs/promises');
async function main() {
  const dirNames = await getFileNamesFromDir('./code-examples').then((x) =>
    x.filter((el) => !el.includes('.'))
  );
  //   const dirNames = ['antv-spec'];
  for (let idx = 0; idx < dirNames.length; idx++) {
    const dirName = dirNames[idx];

    const fileNames = await getFileNamesFromDir(`./code-examples/${dirName}`);
    const files = [];

    for (let jdx = 0; jdx < fileNames.length; jdx++) {
      const fileName = fileNames[jdx];
      const file = await readFile(`./code-examples/${dirName}/${fileName}`, 'utf-8');
      if (fileName.endsWith('json') || fileName.endsWith('ac')) {
        try {
          files.push(JSON.parse(file));
        } catch (e) {
          console.log(`problem parsing ${dirName}/${fileName}`);
        }
      }
    }
    if (files.length) {
      writeFile(`./inferred-schemas/${dirName}.json`, JSON.stringify(createCompoundSchema(files), null, 2));
    }
  }
}
main();
