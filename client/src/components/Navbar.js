import React from 'react';
import styled from 'styled-components';

import NavbarButton from './NavbarButton';

const NavbarContainer = styled.div`
    position: relative;
    bottom: 0;
    background-color: #37393a;
    width: 100%;
    height: 50px;
`;

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarButton href="/" text="Home" />
            <NavbarButton href="/launches" text="Launches" />
            <NavbarButton href="/capsules" text="Capsules" />
        </NavbarContainer>
    );
}

export default Navbar;
