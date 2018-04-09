import AddUser from '../ui/AddUser'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addUser } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		
	})

const mapDispatchToProps = dispatch => 
	({
		onAddUser({firstName,lastName,emailId,gender}) {
			dispatch(
				addUser(firstName, lastName, emailId, gender)
			)
		}
		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(AddUser)	

export default withRouter(Container)


