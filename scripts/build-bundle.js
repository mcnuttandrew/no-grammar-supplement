const {tsvParse} = require('d3-dsv');
const {writeFile, readFile} = require('fs/promises');
const exec = require('child_process').exec;

const crypto = require('crypto');

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
  const langMeta = await readFile('./public/lang-meta.tsv', 'utf-8').then((x) => tsvParse(x));
  const includedLangs = new Set(langMeta.map((x) => x.sysKey));
  const dirNames = await getFileNamesFromDir('./code-examples').then((x) =>
    x.filter((el) => !el.includes('.'))
  );
  const fileDirMap = {};
  for (let idx = 0; idx < dirNames.length; idx++) {
    const dirName = dirNames[idx];
    if (!includedLangs.has(dirName)) {
      continue;
    }
    const fileNames = await getFileNamesFromDir(`./code-examples/${dirName}`);
    const files = {};
    for (let jdx = 0; jdx < fileNames.length; jdx++) {
      const fileName = fileNames[jdx];
      const file = await readFile(`./code-examples/${dirName}/${fileName}`, 'utf-8');
      files[fileName] = file;
      if (fileName.endsWith('json')) {
        try {
          JSON.parse(file);
        } catch (e) {
          console.log(`problem parsing ${dirName}/${fileName}`);
        }
      }
    }
    fileDirMap[dirName] = files;
  }
  const bundle = JSON.stringify(fileDirMap);
  let hash = crypto.createHash('md5').update(bundle).digest('hex');
  writeFile('./public/example-bundle.json', bundle)
    .then(() => {
      console.log('written');
    })
    .catch((e) => {
      console.log(e);
    });

  writeFile('./public/bundle-hash.json', `"${hash}"`);
}

main();
