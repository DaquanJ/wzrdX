import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      search: '',
     }
  }

handleSubmit = (e) => {
  e.preventDefault()
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

  render() { 
    
    return ( 
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='search' placeholder='What wizard knowledge do you seek?' />
          <input type='submit' value='Search' />
        </form>
      </div>
     );
  }
}
 
export default App;
