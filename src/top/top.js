import React from 'react'
import Header from '../components/header';
import '../App.css';
const Top = () => {
    return (
        <React.Fragment>
        <div className="header">
            <h1>User App </h1>
        </div>
        <div className="topnav">
            <Header />
        </div>
       
      </React.Fragment>
    );
}

export default Top;