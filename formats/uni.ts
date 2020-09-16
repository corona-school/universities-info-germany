export const SponsorValues = ["public", "private", "confessional"] as const;
export type Sponsor = (typeof SponsorValues)[number];

export const TypeValues = ["Uni", "FH", "PH", "DH"] as const;
export type Type = (typeof TypeValues)[number];

export type Location = {
    name: string;
    state: string;
};

export type StudentCount = {
    count: number;
    date: string;
};

type University = {
    uuid: string;
    officialName: string;
    nicknames: string[];
    type: Type;
    sponsor: Sponsor;
    locations?: Location[];
    studentCount?: StudentCount;
    doctorate: boolean;
    website?: string;
    emailDomains?: string[];
};

export default University;