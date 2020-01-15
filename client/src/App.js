import React from 'react';
import logo from './images/spacex-logo.png';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CapsulesList from './components/CapsulesList';
import LaunchesList from './components/LaunchesList';
import LaunchDetails from './components/LaunchDetails';

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
    color: #a7a9ac;
    font-size: 1.2em;
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
                    <Route exact path="/" component={Home} />
                    <Route exact path="/capsules" component={CapsulesList} />
                    <Route exact path="/launches" component={LaunchesList} />
                    <Route exact path="/launches/:flightNumber" component={LaunchDetails} />

                </Switch>
            </AppContainer>
        </main>
    );
}

export default App;
