import { v4 as uuidv4 } from 'uuid';
import University, { Location, TypeValues } from "../../formats/uni";
import { WikiFormat } from "./types/wikiFormat";
import { parseDoctorate, parseName, parseSponsor, parseStates, parseStudentCount } from "./wikiFormatParser";


function convertToOutputFormat(data: WikiFormat): University {
    const { officialName, locationNames } = parseName(data);

    //uni Type
    const uniType = data.Form as any;
    if (!TypeValues.includes(uniType)) {
        throw new Error(`Unsupported type of uni "${data.Form}"`);
    }

    //sponsor
    const sponsor = parseSponsor(data);

    //states + locations
    const states = parseStates(data);
    let locations: Location[] = [];

    const n = Math.max(locationNames.length, states.length);

    for (let i = 0; i < n; i++) {
        locations.push({
            name: i < locationNames.length ? locationNames[i] : "",
            state: i < states.length ? states[i] : states[0]
        });
    }

    //doctorate
    const doctorate = parseDoctorate(data);

    //student count
    const studentCount = parseStudentCount(data);

    //UUID for uni
    const uuid = uuidv4();

    //Return
    return {
        uuid: uuid,
        officialName: officialName,
        type: uniType,
        sponsor: sponsor,
        nicknames: [], //not given, default to empty array
        locations: locations,
        doctorate: doctorate,
        studentCount: studentCount
    }
}

export function convert(data: WikiFormat[]) {
    return data.map(convertToOutputFormat);
}