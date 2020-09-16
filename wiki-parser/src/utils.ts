//parses int with german decimal point
export function parseGermanInt(s: string) {
    return parseInt(s.replace(/,/g, ""));
}