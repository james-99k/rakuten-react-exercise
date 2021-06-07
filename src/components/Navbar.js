import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './Navbar.css'

function navBar() {
    let state = {
        username: 'James'
    }
    return (
        <div>
            <Router>
                <div>
                    <nav id='navbar'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                        <div className="nav-details">
                            <p className="nav-username"> {state.username} </p>
                        </div>
                    </nav>
                </div>
            </Router>
        </div>
    )
}

export default navBar
