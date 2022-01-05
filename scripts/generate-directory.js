import { getFileNamesFromDir } from "hoopoe";
import { writeFile } from "fs";

async function main() {
  const dirNames = await getFileNamesFromDir("code-examples").then((x) =>
    x.filter((el) => !el.includes("."))
  );
  const fileDirMap = {};
  for (let idx = 0; idx < dirNames.length; idx++) {
    const dirName = dirNames[idx];
    const files = await getFileNamesFromDir(`code-examples/${dirName}`);
    fileDirMap[dirName] = files;
  }
  const directory = Object.entries(fileDirMap).map(([name, files]) => {
    return { name, files };
  });
  writeFile("./public/directory.json", JSON.stringify(directory), (e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("written");
    }
  });
  executeCommandLineCmd("cp -rf code-examples/ public/build/code-examples");
}

main();
