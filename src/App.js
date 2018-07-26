import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Route children={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route children={Footer} />
    </React.Fragment>
  </Router>
);

export default App;