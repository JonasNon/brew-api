import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios'
import Brewery from './Brewery';


class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfBeer : []
    }
  }

  componentDidMount() {
    axios.get("https://api.openbrewerydb.org/v1/breweries")
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({arrayOfBeer})
    })
  }



  render() {
    return (
    <div className="App">
      <header className="App-header">
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            console.log(this.state.arrayOfBeer[index].name)
            return  <Brewery key={index} index={index} beer={beer}></Brewery>
          })}
        </ol>
      </header>
    </div>
    )
  };
}

export default App;
