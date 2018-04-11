import UserDataList from '../ui/UserDataList'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeUser } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		userDataList : state.userData.list
	})

const mapDispatchToProps = (dispatch) => 
	({
		onRemoveUser(id) {
			dispatch(
				removeUser(id)
			)
		}
		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(UserDataList)	

export default withRouter(Container)


