import getUserList from "../services/getUserListText"

export default (userListText) => {
    let userListObject = userListText.split('\n\n')
    .map( user => {
		let arrayData = user.replaceAll("\n", " ")
		.split(" ")
		.map( user => user.split(":"))
		return Object.fromEntries(arrayData)
	})
	return userListObject
}