import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../_common/DefaultButton';

import NavSites from './NavSites';
import NavVehicles from './NavVehicles';

const NavbarContainer = styled.div`
    background-color: #37393a;
    width: 100%;
    height: 51px;
    margin-top: -1px;
    margin-bottom: 50px;
`;

function Navbar() {
    return (
        <>
        <NavbarContainer>
            <DefaultButton href="/" text="Home" />
            <NavVehicles />
            <NavSites />
            <DefaultButton href="/history" text="History" />
            <DefaultButton href="/info" text="Info" />
            <DefaultButton href="/launches" text="Launches" />
            <DefaultButton href="/missions" text="Missions" />
            <DefaultButton href="/payloads" text="Payloads" />
        </NavbarContainer>

        
        </>
    );
}

export default Navbar;
