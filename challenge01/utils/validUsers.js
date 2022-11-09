import { options } from "./constants"

export default (users) => {
	return users.filter( user => options.every( option => option in user))
}