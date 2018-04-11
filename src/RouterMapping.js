import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import AddUser from './components/container/AddUser';
import UserList from './components/container/UserList';
import AddUserData from './components/container/AddUserData';
import UserDataList from './components/container/UserDataList';

export default class RouterMapping extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={AddUser} />
					<Route path="/addUserData" component={AddUserData} />
					<Route path="/userDataList" component={UserDataList} />					
					<Route path="/addUser" component={AddUser} />
					<Route path="/addUser/:id" component={AddUser} />
					<Route path="/userList" component={UserList} />					
				</Route>					
			</Router>
		)
	}
}
