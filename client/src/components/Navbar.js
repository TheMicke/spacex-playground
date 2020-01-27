import React from 'react';
import styled from 'styled-components';
import DefaultButton from './_common/DefaultButton';

const NavbarContainer = styled.div`
    position: relative;
    bottom: 0;
    background-color: #37393a;
    width: 100%;
    height: 55px;
    margin-bottom: 50px;
`;

function Navbar() {
    return (
        <NavbarContainer>
            <DefaultButton href="/" text="Home" />
            <DefaultButton href="/capsules" text="Capsules" />
            <DefaultButton href="/cores" text="Cores" />
            <DefaultButton href="/dragons" text="Dragons" />
            <DefaultButton href="/history" text="History" />
            <DefaultButton href="/info" text="Info" />
            <DefaultButton href="/landing_pads" text="Landing Pads" />
            <DefaultButton href="/launches" text="Launches" />
            <DefaultButton href="/launch_pads" text="Launch Pads" />
            <DefaultButton href="/missions" text="Missions" />
            <DefaultButton href="/payloads" text="Payloads" />
            <DefaultButton href="/rockets" text="Rockets" />
            <DefaultButton href="/roadster" text="Roadster" />
            <DefaultButton href="/ships" text="Ships" />
        </NavbarContainer>
    );
}

export default Navbar;
