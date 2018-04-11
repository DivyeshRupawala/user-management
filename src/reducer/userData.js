import C from '../action/constants'

const userData = (state=[], action) => {
	switch(action.type) {
		case C.ADD_USER_DATA :
	    	return {fetching : action.payload.fetching, list : state.list};
	    case C.REMOVE_USER_DATA :
	      return state.filter(user => user.id !== action.payload);	    
	    case C.ADD_USER_DATA_SUCCESS:
	    	return {fetching : action.payload.fetching, list : [...state.list, action.payload.listObj]};
	    case C.FETCH_USER :
	      return state;
	    default:
	      return state;
	}
}

export default userData;