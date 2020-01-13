import React from 'react';
import logo from './images/spacex-logo.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CapsulesList from './components/CapsulesList';

function App() {
    return (
        <main>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Spacex logo" />
                    <p>
                        <code>Playground</code>
                        <br />
                    </p>
                </header>
                <Navbar />

                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/capsules" component={CapsulesList} />
                </Switch>
                </div>
            </main>
    );
}

export default App;
