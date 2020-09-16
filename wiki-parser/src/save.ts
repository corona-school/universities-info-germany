import { writeFileSync } from "fs";
import { join } from "path";
import University from "../../formats/uni";

function unifiedFilenameFromString(s: string) {
    return s.toLowerCase().trim().replace(/ *[-–] */g, "-").replace(/ /g, "_").replace(/&/g, "und").replace(/\//g, "-");
}

function createOutputFile(destinationFileStructure: string, uniName: string) {
    return join(destinationFileStructure, unifiedFilenameFromString(uniName) + ".json");
}

export function saveOutputData(data: University[], destinationFileStructure: string) {
    data.forEach(d => {
        const json = JSON.stringify(d);

        writeFileSync(createOutputFile(destinationFileStructure, d.officialName), json);
    })
}