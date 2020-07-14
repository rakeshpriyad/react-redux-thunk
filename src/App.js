import React, { useEffect } from 'react';
import { fetchingUsers } from './actions/userActions';
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
                    <UserForm />
                    <UserTables />
                    
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
        users: state.users
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchingUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);