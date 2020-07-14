import React from 'react';

import { connect } from 'react-redux';

const UserTables = (props) => {
    
    return (
        <div>
            User list
            
            <div>{props.users.map(u => 
                (<div key={u.id}>
                <div>User Id {u.id} </div>
                <div>User name {u.name} </div>
                <div>User Age {u.age} </div>
                <div>User Salary {u.salary} </div>
                </div>)
            )}</div>
        </div>

    );
}



const mapStateToProps = state => {
    return {
     users: state.users
    }
 };
 
 
  export default connect(mapStateToProps)(UserTables);