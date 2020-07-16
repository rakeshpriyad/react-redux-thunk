import React from 'react'
import LeftSide from '../side/LeftSide';
import RightSide from '../side/RightSide';
import Users from '../components/forms/users/Users';
const Body = (props) => {
    //const Inner = props.inner; 
    return (
        <React.Fragment >
        <div className="row">
            <LeftSide />
         
            <div className="column middle">
              { /*  <Inner /> */}
            </div>

            <RightSide />
        </div>
           
        </React.Fragment>
    );
}

export default Body;