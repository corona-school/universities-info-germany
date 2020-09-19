import { writeFileSync } from "fs";
import { join } from "path";
import University from "../../formats/uni";
import { replaceUmlaute } from "./utils";

const disallowedFileNameCharacters = /[^A-z-_0-9]/g;
function unifiedFilenameFromString(s: string) {
    return replaceUmlaute(s) //no umlaute
        .toLowerCase() //everything should be lower case
        .trim() //no leading or trailing whitespaces
        .replace(/ *[-–] */g, "-").replace(/ /g, "_").replace(/&/g, "und").replace(/\//g, "-") //those characters should be replaced
        .replace(disallowedFileNameCharacters, ""); //remove everything else
}

function createOutputFile(destinationFileStructure: string, uniName: string) {
    return join(destinationFileStructure, unifiedFilenameFromString(uniName) + ".json");
}

export function saveOutputData(data: University[], destinationFileStructure: string) {
    data.forEach(d => {
        const json = JSON.stringify(d, null, "\t");

        writeFileSync(createOutputFile(destinationFileStructure, d.officialName), json);
    })
}