import React from 'react';
import './css/Navbar.css';

import NavbarButton from './NavbarButton';

function Navbar() {

    return (
    <div id="navbar" className="navbar">
        <NavbarButton href="/" text="Home" />
        <NavbarButton href="/capsules" text="Capsules" />
    </div>
    );
}

export default Navbar;