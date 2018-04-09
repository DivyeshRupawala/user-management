import React, {Component} from 'react'
import { Panel, Grid, Row, Col, Clearfix} from 'react-bootstrap';

const UserList = () => 
	(
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
					  </tr>
					  </thead>
					  <tfoot>
					  <tr>
					      <td>Sum</td>
					      <td>$180</td>
					      <td>test@gmailcom</td>
					      <td>Male</td>
					  </tr>
					  </tfoot>
					  <tbody>
					  <tr>
					     <td>January</td>
					     <td>$100</td>
					     <td>testa@asd.com</td>
					     <td>Male</td>
					  </tr>
					  <tr>
					      <td>February</td>
					      <td>$80</td>
					      <td>asd@ad.com</td>
					      <td>Female</td>
					  </tr>
					  </tbody>
					</table>
			    </Panel.Body>
		 	</Panel>	
		</div>
	)

export default UserList;	