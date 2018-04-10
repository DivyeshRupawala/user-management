import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterMapping from './RouterMapping'
import registerServiceWorker from './registerServiceWorker';
//import sampleData from './initialState'
import { createStore, applyMiddleware} from 'redux'
import appReducer from './reducer/User'
import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/Sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

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

const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga)

Window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<RouterMapping />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
