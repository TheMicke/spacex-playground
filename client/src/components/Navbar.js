import React from 'react';
import './css/Navbar.css';

import NavbarButton from './NavbarButton';

function Navbar() {

    return (
    <div id="navbar" className="navbar">
        <a href="/">Home</a>
        <a href="/capsules">Capsules</a>
    </div>
    );
}

export default Navbar;