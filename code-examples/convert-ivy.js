import fs from "fs";
import ivyTemplates from "./ivy/template-snapshot.json";

ivyTemplates.forEach(({ name, template }) => {
  const fileName = name.replaceAll(" ", "-").toLowerCase();
  fs.writeFile(
    `./code-examples/ivy/${fileName}.json`,
    JSON.stringify(JSON.parse(template), null, 2),
    (err) => {
      if (err) console.log("err", err);
      // else {
      //   console.log("File written successfully\n");
      //   console.log("The written has the following contents:");
      // }
    }
  );
});
