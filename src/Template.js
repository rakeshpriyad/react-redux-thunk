import React from 'react';
import LeftSide from './side/LeftSide';
import RightSide from './side/RightSide';
import './App.css'
const Template = (props) => {
  const InnerBody = props.body;
 // console.log("Body" + InnerBody);
  return (
    <React.Fragment>
      <div className="row">
        <LeftSide />
        <div className="column middle">
          <InnerBody />
        </div>
        <RightSide />
      </div>
    </React.Fragment>
  )
}

export default Template;

