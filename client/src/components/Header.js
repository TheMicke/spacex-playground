import React from 'react';
import styled from 'styled-components';
import logo from '../images/spacex-playground.png';
import Navbar from './Navbar/Navbar';


const AppHeader = styled.header`
    background-color: #37393a;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppLogo = styled.img`
    width: 70%;
    pointer-events: none;
`;

function Header() {
    return (
        <>
            <AppHeader>
                <AppLogo src={logo} alt="Spacex logo" />
            </AppHeader>
            <Navbar />
        </>
    );
}

export default Header;