import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMapping from './RouterMapping'
import registerServiceWorker from './registerServiceWorker';
//import sampleData from './initialState'
import { createStore} from 'redux'
import appReducer from './reducer/User'
import { Provider } from 'react-redux'

const initialState = {
	"userList": [
		{
			"id" : 15,
			"firstName" : "Test",
			"lastName" : "xyz",
			"emailId" : "xyz@gmail.com",
			"gender" : "Male"
		}
		
	],	
	"errors": [],
	"notificationList": []
};

const store = createStore(appReducer, initialState);

Window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<RouterMapping />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
