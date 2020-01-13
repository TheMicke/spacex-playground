import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import CapsulesList from './components/CapsulesList'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/capsules" component={CapsulesList} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('content'))