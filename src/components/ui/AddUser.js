import React from 'react'
import { Button } from 'reactstrap';
import { Panel } from 'react-bootstrap';

const AddUser = ({user, history, onAddUser=f=>f, onEditUser=f=>f}) => {
	let _firstName, _lastName, _emailId, _gender, _id=0;

	if (user && user[0]) {
		_id = user[0].id;
		_firstName = user[0].firstName;
		_lastName = user[0].lastName;
		_emailId = user[0].emailId;
		_gender = user[0].gender;
	}

	const onClickAddUser = () => {
		//console.log("Test : "+_firstName.value+_lastName.value+_emailId.value+_gender)
		if (_id > 0) {
			onEditUser({
				"id" : _id,	
				"firstName" : _firstName.value,
				"lastName" : _lastName.value,
				"emailId" : _emailId.value,
				"gender" : _gender
			})	
		} else {
			onAddUser({
				"id" : Math.floor(Math.random() * 10),	
				"firstName" : _firstName.value,
				"lastName" : _lastName.value,
				"emailId" : _emailId.value,
				"gender" : _gender
			})	
		}

		window.location = "#/userList"		
	}

	const onGenderChange = (value) => {
		//console.log(" Gender "+value);
		_gender = value;
	}

	return (	
		<div>
			<Panel bsStyle="info">
			    <Panel.Heading>
			      <Panel.Title componentClass="h3">User Form</Panel.Title>
			    </Panel.Heading>
			    <Panel.Body>
			    	<div>
			    		<label htmlFor="firstName"> First Name : &nbsp;</label>
			    		<input
			    			ref={input => _firstName = input} 
			    			id="firstName" 
			    			type="text"			    			
			    			defaultValue={_firstName}/>
			    	</div>

			    	<div>
			    		<label htmlFor="lastName"> Last Name : &nbsp;</label>
			    		<input 
			    			ref={input => _lastName = input} 
			    			id="lastName" 
			    			type="text" 
			    			defaultValue={_lastName}/>
			    	</div>

			    	<div>
			    		<label htmlFor="email"> Email : &nbsp;</label>
			    		<input
			    			ref={input => _emailId = input}  
			    			id="email" 
			    			type="email" 
			    			defaultValue={_emailId}/>
			    	</div>

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
			    </Panel.Body>
		 	</Panel>			
		</div>
	)
}

export default AddUser;	