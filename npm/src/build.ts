import { writeFileSync } from "fs";
import glob from "glob";

const allUnisPaths = glob.sync("../data/**/*.json", { absolute: true });

const allUnis: any[] = allUnisPaths.map( p => require(p));

writeFileSync("./lib/unis.json", JSON.stringify(allUnis));
