import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
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

  render() { 
    
    return ( 
      <div>

      </div>
     );
  }
}
 
export default App;
