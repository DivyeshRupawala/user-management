import C from '../action/constants'
import { combineReducers } from 'redux'

export const userList = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_USER :
	    return state	      
	      // return [...state, action.payload]
	    case C.REMOVE_USER :
	      return state.filter(user => user.id !== action.payload)
	    case C.EDIT_USER :
	      return state.map(user => {
	      		if (user.id === action.payload.id) {
	      			let obj = Object.assign({}, action.payload);
	      			return obj;
	      		} else {
	      			return user;
	      		}	      	 
	      })
	    case C.ADD_USER_SUCCESS:
	    	return [...state,
	    			...action.payload]  
	    case C.FETCH_USER :
	      return state	 		 
	    default:
	      return state
	  }
}

export const errors = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_ERROR :	      
	      return [...state, action.payload]	   
	    default:
	      return state
	  }
}

export const notificationList = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_USER :	      
	      return [...state, action.payload]
	    case C.REMOVE_USER :
	      return state.filter(user => user.id !== action.payload)
	    default:
	      return state
	  }
}

export default combineReducers({
  userList,
  errors,
  notificationList
})
