import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

function createFolderStructure(folderName) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const folderPath = join(__dirname, folderName);

    fs.mkdir(folderPath, (err) => {
        if (err) {
            console.log("Error while creating folder", err);
        }
        const filePath = join(folderPath, "index.js");
        const fileData = folderName;
        fs.writeFileSync(filePath, `console.log(${JSON.stringify(fileData)})`);

        console.log("Folder created successfully !");
    });
}

const sleep = (ms) => setTimeout(() => {}, ms);

for (let i = 0; i < 30; i++) {
    createFolderStructure(`Day-${i + 1}`);
    sleep(200);
}
