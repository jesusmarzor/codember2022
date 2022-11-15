import { isSpace, isLowercaseInAscii } from "./validate"

export default (encryptedMessage) => {
    let encryptNumberText = ""
    let decryptedMessage = ""
    encryptedMessage.split("").map ( numberText => {
        if (isSpace(numberText)) 
            decryptedMessage += " "
        else {
            encryptNumberText = encryptNumberText + numberText
            const number = parseInt(encryptNumberText)
            if (isLowercaseInAscii(number)) {
                decryptedMessage += String.fromCharCode(number)
                encryptNumberText = ""
            }
        }
    })
    return decryptedMessage
  }