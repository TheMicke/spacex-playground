import React from 'react';
import logo from './images/spacex-playground.png';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CapsulesList from './components/Capsules/CapsulesList';
import CoresList from './components/Cores/CoresList';
import CoreDetails from './components/Cores/CoreDetails';
import DragonsList from './components/Dragons/DragonsList';
import DragonDetails from './components/Dragons/DragonDetails';
import LaunchesList from './components/Launches/LaunchesList';
import LaunchDetails from './components/Launches/LaunchDetails';

const AppContainer = styled.div`
    text-align: center;
`;

const PageContainer = styled.div`
    margin: auto;
    max-width: 1280px;
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

function App() {
    return (
        <main>
            <AppContainer>
                <AppHeader>
                    <AppLogo src={logo} alt="Spacex logo" />
                </AppHeader>
                <Navbar />

                <PageContainer>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/capsules" component={CapsulesList} />
                        <Route exact path="/cores" component={CoresList} />
                        <Route exact path="/cores/:coreSerial" component={CoreDetails} />
                        <Route exact path="/dragons" component={DragonsList} />
                        <Route exact path="/dragons/:dragonId" component={DragonDetails} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/launches" component={LaunchesList} />
                        <Route exact path="/launches/:flightNumber" component={LaunchDetails} />
                    </Switch>
                </PageContainer>
            </AppContainer>
        </main>
    );
}

export default App;
