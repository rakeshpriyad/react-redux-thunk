import React, { useEffect, useState, Fragment } from 'react';
import { fetchingUsers, setEditing } from './actions/userActions';
import { connect } from 'react-redux';
import UserTables from './components/reports/UserTables'
import UserForm from './components/forms/users/UserForm';
import Header from './components/header';
import Footer from './components/footer';
const App = (props) => {

    useEffect(() => {
        // this is only executed once
        props.getUsers();
    }, [])
   // const [editing, setEditing] = useState(false);
    
    /* const edit = () => {
        setEditing(true);
    } */
    

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
                            <UserForm
                               users={props.user}
                              
                   />  
                       </Fragment>
                   ) : (
                       <Fragment>
                           <h2>Add user</h2>
                          <UserForm />  
                       </Fragment>
                   )}
                   <UserTables edit={props.edit} />   
                    
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
        editing: state.editUser
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchingUsers()),
        edit: (isEdit) => dispatch(setEditing(isEdit))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
