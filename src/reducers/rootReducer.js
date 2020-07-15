

import { combineReducers } from 'redux';
import userReducer, {fetchUsersReducer, loadingUserReducer, editUserReducer, editingUserReducer} from '../reducers/userReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    userReducer: userReducer,
    users: fetchUsersReducer,
    loading: loadingUserReducer,
    editingUser: editingUserReducer,
    editUser: editUserReducer,
    form: formReducer
 }) 
 

export default rootReducer;
