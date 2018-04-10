import React, {Component} from 'react'
import { Panel} from 'react-bootstrap';

const UserList = ({userList, onRemoveUser=f=>f}) => {

	const userData = userList;
	const removeUser = (id) => {		
		onRemoveUser(id);		
	}

	return(
			<div>
			<Panel bsStyle="info">
			    <Panel.Heading>
			      <Panel.Title componentClass="h3">User List</Panel.Title>
			    </Panel.Heading>
			    <Panel.Body>
			    	 <table>
					  <thead>
					  <tr>
					     <th>First Name</th>
					     <th>Last Name</th>
					     <th>Email</th>
					     <th>Gender</th>
					     <th>Action</th>
					  </tr>
					  </thead>
					  <tbody>
						  {userData.map((data, i) =>
			                    <tr key={i}>
							      <td>{data.firstName}</td>
							      <td>{data.lastName}</td>
							      <td>{data.emailId}</td>
							      <td>{data.gender}</td>
							      <td> <a onClick={() => removeUser(data.id)}>Remove </a>
							      	   <a href={'#addUser/'+data.id}>Edit </a>
							      </td>
							  </tr>)
						  }					 
					  </tbody>
					  
					</table>
			    </Panel.Body>
		 	</Panel>	
		</div>
	)
}
	
export default UserList;	