import React, { useEffect, useState, Fragment } from 'react';
import { fetchingUsers, setEditing, setEditUser } from './actions/userActions';
import { connect } from 'react-redux';
import UserTables from './components/reports/UserTables'
import AddUserForm from './components/forms/users/AddUserForm';
import EditUserForm from './components/forms/users/EditUserForm';
import Header from './components/header';
import Footer from './components/footer';
const App = (props) => {

    useEffect(() => {
        // this is only executed once
        props.getUsers();
        props.edit(false);
    }, [])


    return (
        <React.Fragment>
            <div className="header">
                <h1>User App </h1>
            </div>
            <div className="topnav">
                <Header />
            </div>
            <div className="row">
                <div className="column side">
                </div>
                <div className="column middle">
                    {props.editing
                        ? (
                       <Fragment>
                           <h2>Edit user</h2>
                            <EditUserForm users={props.user} />  
                       </Fragment>
                         ) : (
                       <Fragment>
                           <h2>Add user</h2>
                          <AddUserForm />  
                       </Fragment>
                   )}
                   <UserTables edit={props.edit} editUser={props.editUser}/>   
                </div>
                <div className="column side">
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
        editing: state.editingUser

    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchingUsers()),
        edit: (isEdit) => dispatch(setEditing(isEdit)),
        editUser : (user) => dispatch(setEditUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

//xx