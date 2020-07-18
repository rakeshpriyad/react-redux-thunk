import React, { useEffect,  Fragment } from 'react';
import { fetchingUsers } from '../../../api/api';
import { setEditing, setEditUser } from '../../../actions/userActions';
import { connect } from 'react-redux';
import UserTables from '../../../components/reports/UserTables'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
const Users = (props) => {

    useEffect(() => {
        // this is only executed once
        props.getUsers();
        props.edit(false);
    }, [])

    return (
        <React.Fragment>

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
export default connect(mapStateToProps, mapDispatchToProps)(Users);
