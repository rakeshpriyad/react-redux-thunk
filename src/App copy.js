import React, { useEffect, useState, Fragment } from 'react';
import { fetchingUsers, setEditing, setEditUser } from './actions/userActions';
import { connect } from 'react-redux';
import UserTables from './components/reports/UserTables'
import AddUserForm from './components/forms/users/AddUserForm';
import EditUserForm from './components/forms/users/EditUserForm';
import Header from './components/header';
import Footer from './components/footer';
import Bottom from './bottom/bottom';
import Top from './top/top';
import Body from './body/body';

import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import store from './store/configStore'
import Users from './components/forms/users/Users';
import U from './components/users/u';
import A from './components/accounts/a';

const App = () => {

    return(
    <Provider store={store}>
    <Router>
    <div>
      <Top />
      
      <Switch>
      <Route exact path='/' component={U} />
      <Route exact path='/A' component={A} />
      {/* 
        
        
        <Route exact path='/' component={Home} />
      <Route exact path='/UserApp' component={UserApp} />
      <Route exact path='/CustomerApp' component={CustomerApp} />

      <Route exact path='/AccountSummary' component={AccountSummary} />
      <Route exact path='/AccountStatement' component={AccountStatement} />
      <Route exact path='/Recharge' component={Recharge} />
      <Route exact path='/ElectricityBill' component={ElectricityBill} />
      <Route exact path='/Payments' component={Payments} />
      <Route exact path='/User' component={User} />
      <Route exact path='/Users' component={UserTable} />
      <Route exact path='/UsersLoad' component={UsersWithReduxSaga} />
      */}
      </Switch>

        <A />
        </div>
        </Router>
    {/*<Router>
      <div>
        <Top />
        <Switch>
        <Route exact path='/U' component={U} />
    <Route exact path='/A' component={A} /> */}
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/UserApp' component={UserApp} />
        <Route exact path='/CustomerApp' component={CustomerApp} />

        <Route exact path='/AccountSummary' component={AccountSummary} />
        <Route exact path='/AccountStatement' component={AccountStatement} />
        <Route exact path='/Recharge' component={Recharge} />
        <Route exact path='/ElectricityBill' component={ElectricityBill} />
        <Route exact path='/Payments' component={Payments} />
        <Route exact path='/User' component={User} />
        <Route exact path='/Users' component={UserTable} />
        <Route exact path='/UsersLoad' component={UsersWithReduxSaga} />
        */}
   {/*     </Switch>
        <React.Fragment>
            <Body inner={Users}/>
            <Bottom />
         </React.Fragment>
      </div>
    </Router>
*/}
    </Provider>
    )  
}

export default App;


{/* 

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

*/}