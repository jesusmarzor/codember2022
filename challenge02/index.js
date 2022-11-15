import getEncryptedMessage from "./services/getEncryptedMessage"
import convertAsciiToText from "./utils/convertAsciiToText"

const encryptedMessage = await getEncryptedMessage()

const decryptedMessage = convertAsciiToText(encryptedMessage)

console.log(decryptedMessage)
