import React from 'react';
import logo from './images/spacex-logo.png'
import './App.css';

import CapsulesList from './components/CapsulesList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Spacex logo" />
                <p>
                    <code>Playground</code><br />
                </p>
            </header>
            <CapsulesList />
        </div>
    );
}

export default App;
