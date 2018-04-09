import C from './constants'
import fetch from 'isomorphic-fetch'

export function addUser(firstName, lastName, emailId, gender) {

    return {
        type: C.ADD_USER,
        payload: {firstName,lastName,emailId,gender}
    }

}
