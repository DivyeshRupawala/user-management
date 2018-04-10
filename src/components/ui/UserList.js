import React, {Component} from 'react'
import { Panel} from 'react-bootstrap';

export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userData : props.userList
		}

		this.removeUser = this.removeUser.bind(this);
	}

	componentDidMount() {
		//alert("DID mount")
		//fetchUserList();
	}

	removeUser(id) {
		//alert("Removed "+id);
		this.props.onRemoveUser(id);		
	}

	render() {
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
						  {this.state.userData.map((data, i) =>
			                    <tr key={i}>
							      <td>{data.firstName}</td>
							      <td>{data.lastName}</td>
							      <td>{data.emailId}</td>
							      <td>{data.gender}</td>
							      <td> <a onClick={() => this.removeUser(data.id)}>Remove </a>
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
}

// const UserList = () => 
// 	(
// 		<div>
// 			<Panel bsStyle="info">
// 			    <Panel.Heading>
// 			      <Panel.Title componentClass="h3">User List</Panel.Title>
// 			    </Panel.Heading>
// 			    <Panel.Body>
// 			    	 <table>
// 					  <thead>
// 					  <tr>
// 					     <th>First Name</th>
// 					     <th>Last Name</th>
// 					     <th>Email</th>
// 					     <th>Gender</th>
// 					  </tr>
// 					  </thead>
// 					  <tfoot>
// 					  <tr>
// 					      <td>Sum</td>
// 					      <td>$180</td>
// 					      <td>test@gmailcom</td>
// 					      <td>Male</td>
// 					  </tr>
// 					  </tfoot>
// 					  <tbody>
// 					  <tr>
// 					     <td>January</td>
// 					     <td>$100</td>
// 					     <td>testa@asd.com</td>
// 					     <td>Male</td>
// 					  </tr>
// 					  <tr>
// 					      <td>February</td>
// 					      <td>$80</td>
// 					      <td>asd@ad.com</td>
// 					      <td>Female</td>
// 					  </tr>
// 					  </tbody>
// 					</table>
// 			    </Panel.Body>
// 		 	</Panel>	
// 		</div>
// 	)

// export default UserList;	