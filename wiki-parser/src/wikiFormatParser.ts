import { OutputFileType } from "typescript";
import { Sponsor, StudentCount } from "../../formats/uni";
import { WikiFormat } from "./types/wikiFormat";
import { parseGermanInt } from "./utils";

export function parseName(data: WikiFormat): ({
    officialName: string;
    locationNames: string[];
}) {
    let locationNames: string[] = []
    
    const regex = /\((.+)\)/
    const nameLocations = data.Name.match(regex);
    if (nameLocations) {
        locationNames = nameLocations[0].slice(1,-1).split(",").map(s => s.trim());
    }

    const officialName = data.Name.replace(regex, "").trim();

    return {
        officialName: officialName,
        locationNames: locationNames
    };
}

export function parseSponsor(data: WikiFormat): Sponsor {
    switch (data.Träger) {
        case "staatlich":
            return "public";
        case "privat":
            return "private";
        case "konfessionell":
            return "confessional";
        default:
            throw new Error("unknown sponsor type");
    }
}

export function parseStates(data: WikiFormat): string[] {
    const trimmed = data.Land.trim();

    return trimmed.split("\n").map(s => s.trim());
}

export function parseDoctorate(data: WikiFormat): boolean {
    return data.Promotionsrecht === "ja";
}

export function parseStudentCount(data: WikiFormat): StudentCount | undefined {
    if (data.Studierende.length === 0 || data.Stand.length === 0) {
        return undefined;
    }
    //check if student count is number
    const count = parseGermanInt(data.Studierende);
    if (!count) {
        throw new Error(`Invalid student count ${data.Studierende} for data: ${JSON.stringify(data)}`);
    }

    //add date info
    const dateInfo = data.Stand;

    return {
        count: count,
        date: dateInfo
    }
}