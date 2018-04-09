import React, {Component} from 'react'
import { Button } from 'reactstrap';
import { Label, PageHeader, Panel } from 'react-bootstrap';

const AddUser = ({onAddUser=f=>f}) => {
	let _firstName, _lastName, _emailId, _gender;

	const onClickAddUser = () => {
		console.log("Test : "+_firstName.value+_lastName.value+_emailId.value+_gender)
		onAddUser({			
			"firstName" : _firstName.value,
			"lastName" : _lastName.value,
			"emailId" : _emailId.value,
			"gender" : _gender
		})
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
			    			type="text" />
			    	</div>

			    	<div>
			    		<label htmlFor="lastName"> Last Name : &nbsp;</label>
			    		<input 
			    			ref={input => _lastName = input} 
			    			id="lastName" 
			    			type="text" />
			    	</div>

			    	<div>
			    		<label htmlFor="email"> Email : &nbsp;</label>
			    		<input
			    			ref={input => _emailId = input}  
			    			id="email" 
			    			type="email" />
			    	</div>

			    	<div>
			    		<label htmlFor="gender"> Gender : &nbsp;</label>
			    		<input id="male" type="radio" name="gender"/> Male
			    		<input id="female" type="radio" name="gender"/> Female
			    	</div>
			    	<Button color="primary" onClick={onClickAddUser}>Submit</Button>
			    </Panel.Body>
		 	</Panel>			
		</div>
	)
}

export default AddUser;	