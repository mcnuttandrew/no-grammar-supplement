import {createCompoundSchema} from 'genson-js';
const {writeFile, readFile} = require('fs/promises');
const exec = require('child_process').exec;

function executeCommandLineCmd(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({stdout, stderr});
      }
    });
  });
}

const getFileNamesFromDir = (dir) => {
  return executeCommandLineCmd('ls ' + dir).then(({stdout, stderr}) => {
    if (stderr) {
      throw new Error(stderr);
    }
    return stdout.split('\n').filter((d) => d.length);
  });
};

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
