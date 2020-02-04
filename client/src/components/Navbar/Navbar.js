import React, { useState } from 'react';
import styled from 'styled-components';
import DefaultButton from '../_common/DefaultButton';

import NavOther from './NavOther';
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    window.onresize = () => {
        setWindowWidth(window.innerWidth);
        console.log(windowWidth);
    }
    
    return (
        <>
        <NavbarContainer>
            <DefaultButton href="/" text="Home" />
            <NavVehicles />
            <NavSites />
            
            { windowWidth < 768 ? <NavOther /> : <>
            <DefaultButton href="/history" text="History" />
            <DefaultButton href="/info" text="Info" />
            <DefaultButton href="/launches" text="Launches" />
            <DefaultButton href="/missions" text="Missions" />
            <DefaultButton href="/payloads" text="Payloads" />
            </> }
        </NavbarContainer>

        
        </>
    );
}

export default Navbar;
