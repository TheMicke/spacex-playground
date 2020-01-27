import React from 'react';
import styled from 'styled-components';
import logo from '../images/spacex-playground.png';

const AppFooter = styled.footer`
    background-color: #37393a;
    height: 250px;
    padding-bottom: 25px;
    color: white;
    margin-top: 75px;
`;

const FooterLogo = styled.img`
    position: absolute;
    width: 150px;
    margin: 50px;
    margin-left: -75px;
    pointer-events: none;
`;

function Footer() {
    return (
        <>
            <AppFooter>
                <FooterLogo src={logo} />
            </AppFooter>
        </>
    );
}

export default Footer;
