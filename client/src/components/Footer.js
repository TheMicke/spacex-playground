import React from 'react';
import styled from 'styled-components';
import logo from '../images/spacex-playground.png';

const AppFooter = styled.footer`
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #37393a;
    min-height: 250px;
    padding-bottom: 25px;
    color: white;
    margin-top: 75px;
`;

const FooterLogo = styled.img`
    display: block;
    width: 150px;
    margin: 50px auto;
    pointer-events: none;
`;

const FooterNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-top: 50px;

@media screen and (min-width: 768px) {
    max-width: 1280px;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
    padding-top: 50px;
}
`;

const FooterNavLeftBlock = styled.div`
    display: inline-flex;
    flex-direction: column;

    a, a:hover, a:active, a:visited {
        margin-bottom: 5px;
    }
`;

const FooterNavCenterBlock = styled.div`
    display: inline-flex;
    flex-direction: column;

    a, a:hover, a:active, a:visited {
        margin-bottom: 5px;
    }
`;

const FooterNavRightBlock = styled.div`
    display: inline-flex;
    flex-direction: column;

    a, a:hover, a:active, a:visited {
        margin-bottom: 5px;
    }
`;

function Footer() {
    return (
        <>
            <AppFooter>

                <FooterNavContainer>
                    <FooterNavLeftBlock>
                        <a href="/" text="">Home</a>
                        <a href="/capsules">Capsules</a>
                        <a href="/cores">Cores</a>
                        <a href="/dragons">Dragons</a>
                        <a href="/history">History</a>
                    </FooterNavLeftBlock>
                    
                    <FooterNavCenterBlock>
                        <a href="/info">Info</a>
                        <a href="/landing_pads">Landing Pads</a>
                        <a href="/launches">Launches</a>
                        <a href="/launch_pads">Launch Pads</a>
                        <a href="/missions">Missions</a>
                    </FooterNavCenterBlock>
                    
                    <FooterNavRightBlock>
                        <a href="/payloads">Payloads</a>
                        <a href="/rockets">Rockets</a>
                        <a href="/roadster">Roadster</a>
                        <a href="/ships">Ships</a>
                    </FooterNavRightBlock>
                </FooterNavContainer>

                <FooterLogo src={logo} />
            </AppFooter>
        </>
    );
}

export default Footer;
