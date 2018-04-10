import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import C from '../action/constants'

//import Api from '...'

// export function fetchUser(userId) {
//   // `axios` function returns promise, you can use any ajax lib, which can
//   // return promise, or wrap in promise ajax call
//   return fetch("https://jsonplaceholder.typicode.com/posts/1");
// };

export const fetchUser = async () => {
  try {
    const response = await fetch("https://my.api.mockaroo.com/users?key=093b4d30");
    const data = await response.json();
    return data;
  } catch(e) {

  }
}

// worker Saga: will be fired on ADD_USER actions
function* addUser(action) {
	console.log("Add User Saga : "+JSON.stringify(action.payload)); 
  
   try { 
       // let obj = Object.assign({}, action.payload);
       // obj.firstName = "Saga name";
       // yield put({type: C.ADD_USER_SUCCESS, payload: obj})  

       const userData = yield call(fetchUser, action.payload);
       // console.log("user "+userData);
       // let payloadList = [];
       // if (userData && userData.results) {
       //  userData.results.map( (value,i ) => {
       //    let obj = {};
       //    obj.id = value.id.value;
       //    obj.firstName = value.name.first;
       //    obj.lastName = value.name.last;
       //    obj.emailId = value.email;
       //    obj.gender = value.gender;

       //    payloadList.push(obj);
       //  })
       // }
      // Instructing middleware to dispatch corresponding action.
      yield put({type: C.ADD_USER_SUCCESS, payload : userData})                   
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
}

export default mySaga;