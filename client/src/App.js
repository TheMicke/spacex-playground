import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CapsulesList from './components/Capsules/CapsulesList';
import CapsuleDetails from './components/Capsules/CapsuleDetails';
import CoresList from './components/Cores/CoresList';
import CoreDetails from './components/Cores/CoreDetails';
import DragonsList from './components/Dragons/DragonsList';
import DragonDetails from './components/Dragons/DragonDetails';
import HistoryList from './components/History/HistoryList';
import HistoryDetails from './components/History/HistoryDetails';
import Info from './components/Info/Info';
import LandingPadsList from './components/LandingPads/LandingPadsList';
import LandingPadDetails from './components/LandingPads/LandingPadDetails';
import LaunchesList from './components/Launches/LaunchesList';
import LaunchDetails from './components/Launches/LaunchDetails';
import LaunchPadsList from './components/LaunchPads/LaunchPadsList';
import LaunchPadDetails from './components/LaunchPads/LaunchPadDetails';
import MissionsList from './components/Missions/MissionsList';
import MissionDetails from './components/Missions/MissionDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PayloadsList from './components/Payloads/PayloadsList';
import PayloadDetails from './components/Payloads/PayloadDetails';
import RocketsList from './components/Rockets/RocketsList';
import RocketDetails from './components/Rockets/RocketDetails';
import Roadster from './components/Roadster/Roadster';
import ShipsList from './components/Ships/ShipsList';
import ShipDetails from './components/Ships/ShipDetails';

import BackToTopButton from './components/_common/BackToTopButton';

const AppContainer = styled.div`
    text-align: center;
    background-color: #fff;
`;

const PageContainer = styled.div`
    margin: auto;
    max-width: 1280px;
`;

function App() {
    return (
        <main>
            <AppContainer>
                <BackToTopButton />
                <Header />
                <PageContainer>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/capsules" component={CapsulesList} />
                        <Route exact path="/capsules/:capsuleSerial" component={CapsuleDetails} />
                        <Route exact path="/cores" component={CoresList} />
                        <Route exact path="/cores/:coreSerial" component={CoreDetails} />
                        <Route exact path="/dragons" component={DragonsList} />
                        <Route exact path="/dragons/:dragonId" component={DragonDetails} />
                        <Route exact path="/history" component={HistoryList} />
                        <Route exact path="/history/:historyId" component={HistoryDetails} />
                        <Route exact path="/info" component={Info} />
                        <Route exact path="/landing_pads" component={LandingPadsList} />
                        <Route exact path="/landing_pads/:landingPadId" component={LandingPadDetails} />
                        <Route exact path="/launches" component={LaunchesList} />
                        <Route exact path="/launches/:flightNumber" component={LaunchDetails} />
                        <Route exact path="/launch_pads" component={LaunchPadsList} />
                        <Route exact path="/launch_pads/:siteId" component={LaunchPadDetails} />
                        <Route exact path="/missions" component={MissionsList} />
                        <Route exact path="/missions/:missionId" component={MissionDetails} />
                        <Route exact path="/payloads" component={PayloadsList} />
                        <Route exact path="/payloads/:payloadId" component={PayloadDetails} />
                        <Route exact path="/rockets" component={RocketsList} />
                        <Route exact path="/rockets/:rocketId" component={RocketDetails} />
                        <Route exact path="/roadster" component={Roadster} />
                        <Route exact path="/ships" component={ShipsList} />
                        <Route exact path="/ships/:shipId" component={ShipDetails} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </PageContainer>
                <Footer />
            </AppContainer>
        </main>
    );
}

export default App;
