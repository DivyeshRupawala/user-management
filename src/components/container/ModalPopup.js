import ModalPopup from '../ui/ModalPopup'
import { connect } from 'react-redux'
import { closeModal } from '../../action/actions'

const mapStateToProps = (state, props) => 
	({
		title : state.modalPopup.title,
        body :  state.modalPopup.body,
        okButtonName : state.modalPopup.okButtonName, 
        closeButtonName : state.modalPopup.closeButtonName,
        isShow : state.modalPopup.isShow
	})

const mapDispatchToProps = dispatch => 
	({
		onCloseModal() {
			dispatch(
				closeModal()
			)
		}		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(ModalPopup)	

export default Container;


