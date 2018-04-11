import C from '../action/constants'

const notificationList = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_USER :	      
	      return [...state, action.payload]
	    case C.REMOVE_USER :
	      return state.filter(user => user.id !== action.payload)
	    default:
	      return state
	  }
}

export default notificationList;
