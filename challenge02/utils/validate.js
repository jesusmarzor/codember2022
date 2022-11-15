import { MAX_ASCII, MIN_ASCII } from "./constants"

export const isLowercaseInAscii = (number) => {
    return number >= MIN_ASCII && number <= MAX_ASCII
}

export const isSpace = (string) => {
    return string === " "
}