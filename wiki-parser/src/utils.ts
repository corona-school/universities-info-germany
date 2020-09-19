//parses int with german decimal point
export function parseGermanInt(s: string) {
    return parseInt(s.replace(/\./g, ""));
}

const umlautMap = {
    "ä": "ae",
    "ö": "oe",
    "ü": "ue",
    "ß": "ss",
    "ae": "ä",
    "oe": "ö",
    "ue": "ü",
    "ss": "ß"
}
const umlautRegex = /ä|ö|ü|ß/gi

export function replaceUmlaute(s: string) {
    return s.replace(umlautRegex, (matchedS, other) => {
        const res: string = (umlautMap as any)[matchedS.toLowerCase()];

        if (matchedS === matchedS.toUpperCase()) { //if uppercase...
            return res.toUpperCase();
        }
        return res
    })
}