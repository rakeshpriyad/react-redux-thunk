import * as actions from './userActionCreators'

export const createUser = (name, age, salary) => {
    return { name, age, salary }
}

export const addUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: actions.UPDATE_USER,
        payload: user
    }
}

export const removeUser = (id) => {
    return {
        type: actions.DELETE_USER,
        payload: id
    }
}

export const findUsers = () => {
    return {
        type: actions.FIND_USERS,
        payload: ""
    }
}


//======= Thunk call fetch api==============

export const fetchedUsers = (users) => {
    return {
        type: actions.FETCHED_USERS,
        payload: users
    }
}
export const loadingUsers = () => {
    return { type: actions.LOADING_USERS }
}

export const saveUser = (user) => ({
    type: actions.SAVE_USER,
    payload: user
});

export const saveUserFailed = (statusErrors) => {
    return { type: actions.SAVE_USER_FAILED, errors: statusErrors }
}
export const updateUserFailed = (statusErrors) => {
    return { type: actions.UPDATE_USER_FAILED, errors: statusErrors }
}

export const setEditing = (isEdit) => ({
    type: actions.SET_EDIT,
    payload: isEdit
});

export const setEditUser = (user) => ({
    type: actions.SET_EDIT_USER,
    payload: user
});
