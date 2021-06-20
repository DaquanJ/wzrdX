import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Browse from './components/Browse';
import About from './components/About';
import Searchbar from './components/Searchbar';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Browse} />
          <Route path='/search' component={Searchbar} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



/*
Search bar html & css - 'transparency' ; https://speckyboy.com/search-field-sexy-css/ (incorporated my own styling)
required attribute ensures form is filled out before submission can be made
using .map with .filter - 'referenced the bottom response (qwermike)' ; https://stackoverflow.com/questions/53040288/filter-function-with-ternary
*/

