import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import store from './store/configStore'
import {addUser, updateUser, findUsers, removeUser,createUser, fetchingUsers, saveUser, submitRemoveUser, submitUpdateUser, submitSaveUser} from './actions/userActions'

ReactDOM.render(
<Provider store={store}>
    <App />
 </Provider>  ,
  document.getElementById('root')
)
