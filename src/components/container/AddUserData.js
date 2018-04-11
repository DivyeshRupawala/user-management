import AddUserData from '../ui/AddUserData'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addUserData } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		userData : state.userData		
	})

const mapDispatchToProps = dispatch => 
	({
		onAddUserData({id, userId, title, body}) {
			dispatch(
				addUserData(id, userId, title, body)
			)
		}		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(AddUserData)	

export default withRouter(Container)


