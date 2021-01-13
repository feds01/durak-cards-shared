import {CardNumerics, CardSuits} from "./consts";

export interface CardType {
    value: number,
    suit: string
    card: string,
}

/**
 * Possible move types that any player can make.
 * */
export enum MoveTypes {
    PLACE,
    COVER,
    FORFEIT,
}

/**
 * Simple function to split the card string into it's 'numerical'
 * value and it's 'suit' value.
 *
 * @param {string} card String representing card which is to be parsed.
 * @return {CardType} The numerical and suit component of the card.
 * */
export function parseCard(card: string): CardType {

    // ensure the numeric and suit are valid
    const suit = card.substring(card.length - 1);
    const rawNumeric = card.substring(0, card.length - 1);

    if (!Object.keys(CardSuits).includes(suit)) {
        throw new Error("Invalid card suit.");
    }

    if (!CardNumerics.includes(rawNumeric)) {
        throw new Error("Invalid card numeric.")
    }

    return {value: CardNumerics.indexOf(rawNumeric) + 2, suit, card};
}