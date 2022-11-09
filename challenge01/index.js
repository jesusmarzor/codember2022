import getUserListText from "./services/getUserListText"
import transformUserListTextToObject from "./utils/transformUserListTextToObject"
import validUsers from "./utils/validUsers"

let userListText = await getUserListText()
let userListObject = transformUserListTextToObject(userListText)
userListObject = validUsers(userListObject)

console.log(userListObject.length + userListObject[userListObject.length - 1].usr)