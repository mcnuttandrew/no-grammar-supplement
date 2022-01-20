import { getFileNamesFromDir, executeCommandLineCmd } from "hoopoe";
import { writeFile, readFile } from "fs/promises";

import crypto from "crypto";

async function main() {
  const dirNames = await getFileNamesFromDir("./code-examples").then((x) =>
    x.filter((el) => !el.includes("."))
  );
  const fileDirMap = {};
  for (let idx = 0; idx < dirNames.length; idx++) {
    const dirName = dirNames[idx];
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
