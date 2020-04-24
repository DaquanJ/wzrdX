import React, { Component } from 'react';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Footer from './components/Footer';
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


handleSearch = (e) => {
  e.preventDefault()
  const knowledge = this.state.data.filter(info => info === this.state.search.toLowerCase())
  console.log(knowledge)

}

  render() { 
    return ( 
      <div>
        <Nav/>
        <form className="search">
          <input type="search" placeholder="What knowledge do you seek..." onChange={e => (this.setState({search: e.target.value}))} required/>
          <button type="submit" onClick={this.handleSearch}>Search</button>
        </form>   
        {this.state.data.map(character => (<Categories character={character.name} />))}
        <Footer/>
      </div>
     );
  }
}


/* 
Search bar html & css - 'transparency' ; https://speckyboy.com/search-field-sexy-css/ (incorporated my own styling)
required attribute ensures form is filled out before submission can be made 
*/
 
export default App;
