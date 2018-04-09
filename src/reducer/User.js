import C from '../action/constants'
import { combineReducers } from 'redux'

export const userList = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_USER :	      
	      return [...state, action.payload]
	    case C.REMOVE_USER :
	      return state.filter(user => user.id !== action.payload)
	    default:
	      return state
	  }
}

export const errors = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_USER :	      
	      return [...state, action.payload]
	    case C.REMOVE_USER :
	      return state.filter(user => user.id !== action.payload)
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
