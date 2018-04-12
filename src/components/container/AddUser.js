import AddUser from '../ui/AddUser'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addUser, editUser, showModal } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		user : props.routeParams.id ?  state.userList.filter(data => data.id === props.routeParams.id) : []		
	})

const mapDispatchToProps = dispatch => 
	({
		onAddUser({id, firstName,lastName,emailId,gender}) {
			dispatch(
				addUser(id, firstName, lastName, emailId, gender)
			)
		},
		onEditUser({id, firstName,lastName,emailId,gender}) {
			dispatch(
				editUser(id, firstName, lastName, emailId, gender)
			)
		},
		onShowModal(title, body, okButtonName, closeButtonName, isShow) {
			dispatch(
				showModal(title, body, okButtonName, closeButtonName, isShow)
			)
		}
		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(AddUser)	

export default withRouter(Container)


