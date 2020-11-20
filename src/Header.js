import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js' 
const Header = () => {
    return (
       <>
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container text-center">
                <Link to="/">
                <h1 style={{color: "white"}}>Home</h1>
                </Link>

            </div>
        </nav>
       </>
    );
};

export default Header;