import React from 'react'
import { Button } from 'reactstrap';
import InputWithLabel from '../../commonComponent/inputWithLabel'
import PanelWithHeader from '../../commonComponent/panelWithHeader'

const AddUser = ({user, history, onAddUser=f=>f, onEditUser=f=>f, onShowModal=f=>f}) => {
	let _firstName, _lastName, _emailId, _gender, _id=0;

	const FIRST_NAME_ID = "firstName";
	const LAST_NAME_ID = "lastName";
	const EMAIL_ID = "emailId";

	if (user && user[0]) {
		_id = user[0].id;
		_firstName = user[0].firstName;
		_lastName = user[0].lastName;
		_emailId = user[0].emailId;
		_gender = user[0].gender;
	}

	const onClickAddUser = () => {
		//onShowModal("Success", "Record has been added Success fully", "OK", "Cancel", true);
		if (_id > 0) {
			onEditUser(onAddUser(getObject (_id)));	
		} else {
			onAddUser(getObject (Math.floor(Math.random() * 10)));
		}
		window.location = "#/userList"		
	}

	const getObject = (id) => 
		({
			"id" : id,	
			"firstName" : _firstName,
			"lastName" : _lastName,
			"emailId" : _emailId,
			"gender" : _gender
		})

	const onGenderChange = (value) => {		
		_gender = value;
	}

	const onChangeValue = (event, id) => {		
		let value = event.currentTarget.value;
		if (id === FIRST_NAME_ID) {
			_firstName = value;			
		} else if (id === LAST_NAME_ID) {
			_lastName = value;
		} else {
			_emailId = value;
		}
	}

	return (		
		<PanelWithHeader title="Add User">			
	    	<InputWithLabel label="First Name" type="text" id={FIRST_NAME_ID} defaultVal={_firstName} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Last Name" type="text" id={LAST_NAME_ID} defaultVal={_lastName} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Email" type="text" id={EMAIL_ID} defaultVal={_emailId} onChangeValue={onChangeValue}/>			    	

	    	<div><label htmlFor="gender"> Gender : &nbsp;</label>
	    		<input			    			 
	    			type="radio" 
	    			name="gender" 
	    			value="Male" 
	    			onChange={event => onGenderChange('Male')}
	    			defaultChecked={_gender === 'Male'}/> Male
	    		<input 
	    			type="radio" 
	    			name="gender" 
	    			value="Female" 
	    			onChange={event => onGenderChange('Female')}
	    			defaultChecked={_gender === 'Female'}/> Female
	    	</div>
	    	<Button color="primary" onClick={onClickAddUser}>Submit</Button>
		</PanelWithHeader>
	)
}

export default AddUser;	