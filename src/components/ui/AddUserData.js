import React from 'react'
import { Button } from 'reactstrap';
import InputWithLabel from '../../commonComponent/inputWithLabel'
import PanelWithHeader from '../../commonComponent/panelWithHeader'

const AddUserData = ({userData, onAddUserData=f=>f}) => {
	let _userId, _title, _body, _id=0;
	
	const USER_ID = "userId";
	const TITLE_ID = "titleId";
	const BODY_ID = "bodyId";	

	const clickHandler = () => {
		onAddUserData(getObject());	
		window.location = "#/userDataList"		
	}

	const getObject = (id) => {
		return {
			"id": _id,
		    "userId": _userId,		    
		    "title": _title,
		    "body": _body
		}
	}

	const onChangeValue = (event, id) => {		
		let value = event.currentTarget.value;
		if (id === USER_ID) {
			_userId = value;			
		} else if (id === TITLE_ID) {
			_title = value;
		} else {
			_body = value;
		}
	}

	return (		
		<PanelWithHeader title="Add User Data">
		  	<InputWithLabel label="User ID" type="text" id={USER_ID} defaultVal={_userId} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Title" type="text" id={TITLE_ID} defaultVal={_title} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Body" type="text" id={BODY_ID} defaultVal={_body} onChangeValue={onChangeValue}/>	    	
	    	<Button color="primary" onClick={clickHandler}>Submit</Button>
		</PanelWithHeader>
	)
}

export default AddUserData;	