import React, {Component} from 'react'
import PanelWithHeader from '../../commonComponent/panelWithHeader'

const UserDataList = ({userDataList, onRemoveUser=f=>f}) => {

	const userData = userDataList;
	
	const removeUser = (id) => {		
		onRemoveUser(id);		
	}
	return(
		<PanelWithHeader title="User List">
		    	 <table>
				  <thead>
				  <tr>
				     <th>User Id</th>
				     <th>Title</th>
				     <th>Body</th>
				     <th>Action</th>
				  </tr>
				  </thead>
				  <tbody>
					  {userData.map((data, i) =>
		                    <tr key={i}>
						      <td>{data.userId}</td>
						      <td>{data.title}</td>
						      <td>{data.body}</td>						      
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
	
export default UserDataList;	