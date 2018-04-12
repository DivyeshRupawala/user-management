import React from 'react'
import PanelWithHeader from '../../commonComponent/panelWithHeader'

const UserList = ({userList, onRemoveUser=f=>f}) => {

	const userData = userList;
	
	const removeUser = (id) => {		
		onRemoveUser(id);		
	}
	return(
		<PanelWithHeader title="User List">
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
		</PanelWithHeader>
	)
}
	
export default UserList;	