const { getFileNamesFromDir, executeCommandLineCmd } = require("hoopoe");
const { tsvParse } = require("d3-dsv");
const { writeFile, readFile } = require("fs/promises");

const crypto = require("crypto");

async function main() {
  const langMeta = await readFile("./public/lang-meta.tsv", "utf-8").then((x) =>
    tsvParse(x)
  );
  const includedLangs = new Set(langMeta.map((x) => x.sysKey));
  const dirNames = await getFileNamesFromDir("./code-examples").then((x) =>
    x.filter((el) => !el.includes("."))
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
      const file = await readFile(
        `./code-examples/${dirName}/${fileName}`,
        "utf-8"
      );
      files[fileName] = file;
    }
    fileDirMap[dirName] = files;
  }
  const bundle = JSON.stringify(fileDirMap);
  let hash = crypto.createHash("md5").update(bundle).digest("hex");
  writeFile("./public/example-bundle.json", bundle)
    .then(() => {
      console.log("written");
    })
    .catch((e) => {
      console.log(e);
    });

  writeFile("./public/bundle-hash.json", `"${hash}"`);
}

main();
