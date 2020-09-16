import dotenv from "dotenv";
import csvParser from "csv-parser";
import fs from "fs";
import { convert } from "./convert";
import { saveOutputData } from "./save";

//load envs
dotenv.config();

//get output directory path
const outputDirectoryStructurePath: string = process.env.OUTPUT_STRUCTURE!;
//get uni list csv path
const listPath: string = process.env.INPUT_FILE!;

//read csv file
const parser = csvParser({
    separator: ";"
});

const results: any[] = [];
fs.createReadStream(listPath)
    .pipe(parser)
    .on('data', (data: any) => results.push(data))
    .on('end', () => {
        const converted = convert(results);

        saveOutputData(converted, outputDirectoryStructurePath);
    });