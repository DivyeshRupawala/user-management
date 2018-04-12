import React from 'react';
import {render} from 'react-dom';
import './index.css';
import RouterMapping from './RouterMapping'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux'
import appReducer from './reducer/index'
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
	"notificationList": [],
	"userData" : {
		fetching : false,
		list : [
			{	
				"id": 1,
			    "userId": 1,		    
			    "title": "to provide or to reject the blind are welcome option to find",
			    "body": "And it takes suscipit follow accepted lightly with reprehenderit discomfort may be the entire nostrum of the things that happens is that they are extremely"
			}
		]
	},
	"modalPopup" : {
		title: "Title", 
        body:"Body",
        okButtonName : "Ok", 
        closeButtonName : "Cancel", 
        isShow : false
	}
};

const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga)

Window.store = store;

render(
	<Provider store={store}>
		<RouterMapping />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
