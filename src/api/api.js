import * as actions from '../actions/userActionCreators'
import {loadingUsers, fetchedUsers, saveUser,updateUserFailed,saveUserFailed, updateUser, removeUser} from '../actions/userActions'
export const URL ='http://localhost:3000/'
export const METHOD_GET = 'GET'
export const METHOD_PUT = 'PUT'
export const METHOD_POST = 'POST'
export const METHOD_DELETE = 'DELETE'
export const CONTENT_JSON_TYPE = {'Content-type' : 'application/json' }
export const CONTEXT_USER = 'users/'
export const USERS_S_URL = actions.URL + CONTEXT_USER

export const fetchingUsers = () => {
   return (dispatch) => {
      dispatch(loadingUsers())
      fetch(USERS_S_URL)
         .then(res => res.json())
         .then(users => {
          // console.log("users----"+ users)
           dispatch(fetchedUsers(users))
        }).catch(error => console.error(error));
   }
} 

export const submitSaveUser = (user) =>{
    console.log("Saving.."+JSON.stringify(user));
    return (dispatch) => {
            fetch(USERS_S_URL, {
            method: METHOD_POST,
            headers:CONTENT_JSON_TYPE,
            body: JSON.stringify(user)
        }).then( res => res.json())
            .then(result => {
                console.log("result--save--"+ result)
                if(result.errors){
                    dispatch(saveUserFailed(result.errors))
                } else {
                    dispatch(saveUser(result));
                }
        }).catch(error => console.error(error));
    }
    
 } 

 export const submitUpdateUser =(user) =>{
    //console.log(user.id);
     return (dispatch) => {
        
             fetch(USERS_S_URL + user.id, {
             method: METHOD_PUT,
             headers: CONTENT_JSON_TYPE,
             body: JSON.stringify(user)
         }).then( res => res.json())
             .then(result => {
                 if(result.errors){
                     dispatch( updateUserFailed(result.errors))
                 } else {
                     console.log("update result "+ result)
                     dispatch(updateUser(user));
                     dispatch(fetchingUsers());
                 }
         }).catch(error => console.error(error));
     }
  }
 
  export const submitRemoveUser = (id) => {
    return (dispatch) => {
        fetch(USERS_S_URL + id, {
            method: METHOD_DELETE
        }).then(() => {
            dispatch(removeUser(id));
        })
    }
};