export function VisitsToCredits(visits : number) : number {

    return visits *2;

}

export function CreditsToVisits(credits : number) : number {

    return Math.round(credits/2);

}