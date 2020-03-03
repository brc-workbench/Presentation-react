import React, { Component, useState } from 'react';
//import PropTypes from 'prop-types';
//import { NavLink } from 'react-router-dom';

interface HeaderComponentProps { 
    title: string,
    initialState: boolean
};

// useState Hook cannot be used within a class: define as FC instead
const Header: React.FC<HeaderComponentProps> = ({title, initialState}) => {
    
        const [isNavOpen, setIsNavOpen] = useState(initialState);
        const location = window.location.pathname.split('/')[1] || 'home';

        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">
                                    Disabled
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="http://example.com"
                                    id="dropdown01"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    
};
/* 
Header.propTypes = {
    title: PropTypes.string,
    routes: PropTypes.array
}; */

export default Header;
