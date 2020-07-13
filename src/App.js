import React from 'react';
import { fetchingUsers } from './actions/userActions';
import { connect } from 'react-redux';
import UserTables from './components/reports/usersTable'
const App = (props) => {
    return (
        <div>
            App
             { props.fetchingUsers() } 
            <UserTables />
        </div>

    );
}

const mapStateToProps = state => {
   return {
    users: state.users
   }
};

//export default App;
export const mapDispatchToProps = (dispatch) => {
    return {
        fetchingUsers: () => { dispatch(fetchingUsers()) }
    }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(App);