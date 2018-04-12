import { call, put, takeEvery } from 'redux-saga/effects'
import C from '../action/constants'
import {fetchUser, postUser} from '../api/UserDataApi'


// worker Saga: will be fired on ADD_USER actions
function* addUser(action) {
	 try {
       const userData = yield call(fetchUser, action);       
       // Instructing middleware to dispatch corresponding action.
       yield put({type: C.ADD_USER_SUCCESS, payload : userData})
       yield put({type: C.SHOW_MODAL, payload : {"title" : "Success", "body":"Record has been added succesfully.", "okButtonName":"OK", "closeButtonName":"Cancel", "isShow" :true}});            
   } catch (e) {
      yield put({type: C.ADD_ERROR, message: e.message});
   }
}

function* addUserData(action) {
   try {
       const userData = yield call (postUser,action.payload.listObj);
       console.log("Test : "+userData);     
       // Instructing middleware to dispatch corresponding action.
       yield put({type: C.ADD_USER_DATA_SUCCESS, payload : {fetching : false, listObj : userData}});
       yield put({type: C.SHOW_MODAL, payload : {"title" : "Success", "body":"Record has been added succesfully.", "okButtonName":"OK", "closeButtonName":"Cancel", "isShow" :true}});                 
   } catch (e) {
      yield put({type: C.ADD_ERROR, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `ADD_USER` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(C.ADD_USER, addUser);
  yield takeEvery(C.ADD_USER_DATA, addUserData)
}

export default mySaga;