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
        <div className="row">
            <div className="column side">
            </div>
        </div>
      </React.Fragment>
    );
}

export default Top;