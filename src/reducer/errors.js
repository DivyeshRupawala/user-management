import C from '../action/constants'

const errors = (state=[], action) => {
	switch(action.type) {
	    case C.ADD_ERROR :	      
	      return [...state, action.payload]	   
	    default:
	      return state
	  }
}

export default errors;