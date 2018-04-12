import { combineReducers } from 'redux'
import userData from './userData'
import userList from './userList'
import notificationList from './notificationList'
import errors from './errors'
import modalPopup from './modalPopup'


export default combineReducers({ 
  userList,
  userData,
  notificationList,
  errors,
  modalPopup
})