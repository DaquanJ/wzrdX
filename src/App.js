import React, { Component } from 'react';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Browse from './components/Browse';
import About from './components/About';
import Category from './components/Category';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/app.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      search: '',
     }
  }

componentDidMount = async () => {
  try {
    const response = await axios.get('http://hp-api.herokuapp.com/api/characters')
    this.setState({data: response.data})
    console.log(response.data)
  } catch (error) {
    console.log('Something went wrong!', error)
  }
}

handleSearch = () => {
    this.state.data.filter(
    info => info.name.toLowerCase() === this.state.search.toLowerCase() || info.house.toLowerCase() === this.state.search.toLowerCase())
    .map(info => (<Categories key={info.name} image={info.image} character={info.name} />)) 
}

handleChange = (e) => {
  this.setState({search: e.target.value})
}

  render() { 
    return ( 
      <div>
        <Router>
        <Nav/>
        <Searchbar data={this.state.data} search={this.state.search} handleSearch={this.handleSearch} handleChange={this.handleChange}  /> 
        <p id='knowledge' > </p>
        {/* {this.state.data.map(character => (<Categories key={character.name} image={character.image} character={character.name} />))} */}
        {/* {this.state.data.map(browse => (<Browse key={browse.name} image={browse.image} name={browse.name} />))} */}
        <Switch>
        <Route path='/browse' component={Browse} />
        <Route path='/about' component={About} />
        <Route path='/category:name' component={Category} />
        </Switch>
        <Footer/>
        </Router>
      </div>
     );
  }
}


/* 
Search bar html & css - 'transparency' ; https://speckyboy.com/search-field-sexy-css/ (incorporated my own styling)
required attribute ensures form is filled out before submission can be made 
*/
 
export default App;
