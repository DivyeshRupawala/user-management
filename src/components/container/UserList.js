import UserList from '../ui/UserList'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeUser } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		userList : state.userList
	})

const mapDispatchToProps = (dispatch, subscribe) => 
	({
		onRemoveUser(id) {
			dispatch(
				removeUser(id)
			)
		},
		onFetchUser() {
			dispatch(
				
			)
		}
		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(UserList)	

export default withRouter(Container)


