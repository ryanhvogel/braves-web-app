import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Charlie from './components/pages/Charlie';
import Ian from './components/pages/Ian';
import Max from './components/pages/Max';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/charlie' component={Charlie} /> 
          <Route path='/ian' component={Ian} />
          <Route path='/max' component={Max} />
        </Switch>
      </Router>
    </>
  );
}

export default App;