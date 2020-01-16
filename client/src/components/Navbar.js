import React from 'react';
import styled from 'styled-components';
import DefaultButton from './common/DefaultButton';

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
            <DefaultButton href="/" text="Home" />
            <DefaultButton href="/launches" text="Launches" />
            <DefaultButton href="/capsules" text="Capsules" />
            <DefaultButton href="/cores" text="Cores" />
            <DefaultButton href="/dragons" text="Dragons" />
        </NavbarContainer>
    );
}

export default Navbar;
