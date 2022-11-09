import axios from "axios"
import { endpoints, url } from "../utils/constants"

export default async () => {
    return await axios(url + endpoints.userListText)
    .then( res => res.data)
    .then( data => {
        return data
    })
}