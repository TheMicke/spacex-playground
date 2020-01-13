import React from 'react';
import './css/NavbarButton.css';

function NavbarButton(props) {
    return (
        <a href={props.href}>
            <div className="navbar-button">
                <p className="navbar-button-text">{props.text}</p>
            </div>
        </a>
    );
}

export default NavbarButton;
