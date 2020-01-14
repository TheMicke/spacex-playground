import React from 'react';
import logo from './images/spacex-logo.png';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CapsulesList from './components/CapsulesList';

const AppContainer = styled.div`
    text-align: center;
`;

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

const SubHeading = styled.p`

`;

function App() {
    return (
        <main>
            <AppContainer>
                <AppHeader>
                    <AppLogo src={logo} alt="Spacex logo" />
                    <SubHeading><code>Playground</code></SubHeading>
                </AppHeader>
                <Navbar />

                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/capsules" component={CapsulesList} />
                </Switch>
            </AppContainer>
        </main>
    );
}

export default App;
