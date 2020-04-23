import React, { Component } from 'react';
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

handleSubmit = (e) => {
  e.preventDefault()
}

handleSearch = () => {
  console.log(this.state.search)
}



  render() { 
    
    return ( 
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="search" placeholder="What knowledge do you seek..." onChange={e => (this.setState({search: e.target.value}))} required/>
          <button type="submit" onClick={this.handleSearch}>Search</button>
        </form>   
      </div>
     );
  }
}

/* required att. ensures form is filled out before submission can be made */
 
export default App;
