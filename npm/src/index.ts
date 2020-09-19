import University from "./uniFormat";

// ++++ main data that is exported
const uniData: University[] = require("./unis.json");

export default uniData;


// ++++ convenience functions that are commonly used in conjunction with the university list +++ 
export function uniByName(n: string): University | undefined {
    return uniData.find( u => u.officialName === n);
}

export function uniByUUID(uuid: string): University | undefined {
    return uniData.find( u => u.uuid === uuid);
}

export function unisMatchingNickname(nickname: string): University[] {
    return uniData.filter( u => hasNickname(u, nickname));
}

export function hasNickname(university: University, nickname: string): boolean {
    return !!university.nicknames.find(nn => nn.toLowerCase().includes(nickname.toLowerCase()))
}
