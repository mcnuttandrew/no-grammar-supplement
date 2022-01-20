import { getFileNamesFromDir, executeCommandLineCmd } from "hoopoe";
import { writeFile, readFile } from "fs/promises";

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
  writeFile("./public/example-bundle.json", JSON.stringify(fileDirMap))
    .then(() => {
      console.log("written");
    })
    .catch((e) => {
      console.log(e);
    });
}

main();
