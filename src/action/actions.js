import C from './constants'

export function addUser(id, firstName, lastName, emailId, gender) {
    return {
        type: C.ADD_USER,
        payload: {id, firstName,lastName,emailId,gender}
    }
}

export const editUser = (id, firstName, lastName, emailId, gender) => {
	return {
		type : C.EDIT_USER,
		payload : {id, firstName,lastName,emailId,gender}
	}
}

export const removeUser = (id) => {
	return {
		type: C.REMOVE_USER,
		payload: id
	}
}

export const fetchUser = (id) => {
	return {
		type: C.FETCH_USER
	}
}
