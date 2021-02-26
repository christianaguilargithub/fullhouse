import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Products from './components/Products.js'
import Services from './components/Services.js'
import ContactUs from './components/ContactUs.js'
import Home from './components/Home.js'

import './index.css'

const App = () => {
  return(
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Products" component={Products} />
            <Route path="/Services" component={Services} />
            <Route path="/ContactUs" component={ContactUs} />
          </Switch>
      </Router>
    </div>
  )
}

export default App;