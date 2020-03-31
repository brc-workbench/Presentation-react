import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderComponentProps { 
    title: string,
    initialState: boolean
};

// useState function Hook cannot be used within a class: define as FC instead
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
                            <Link className='nav-link' to="/originalGrids">Original Grids</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/uploadSchedule">Upload Schedule</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/gridDemo">Grid Demo</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                Disabled
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="https://getbootstrap.com/docs/4.4/components/navbar/"
                                id="dropdown01"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
