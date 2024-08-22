import './App.css';
import { Component } from 'react';
import axios from 'axios'
import Brewery from './Brewery';


class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfBeer : [],
      arrayofLikes : [],
      searchTerm : ""
    }
  }

  componentDidMount() {
    axios.get("https://api.openbrewerydb.org/v1/breweries")
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({arrayOfBeer})
      
    })
  }

  likeBrewery = (index) => {

    if (this.state.arrayofLikes.includes(index)) {

      index = this.state.arrayofLikes.indexOf(index)
      console.log(index)
      const newArray = [
        ...this.state.arrayofLikes.slice(0, index), // Elements before the one to delete
        ...this.state.arrayofLikes.slice(index + 1) // Elements after the one to delete
      ];
      console.log(newArray)
      this.setState({arrayofLikes: newArray});
    } else {
      this.setState({arrayofLikes: [...this.state.arrayofLikes, index]})
    }
    console.log(this.state.arrayofLikes)
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({stringList: [...this.state.stringList, this.state.inputValue]})
  //   this.setState({inputValue: ""})
  //   this.setState({colorList: [...this.state.colorList, this.state.color]})
  // }

  visibilityCheck = (beer) => {
    if (beer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
      return true
    } else {
      return false
    }
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h3>Search for a brewery name here.</h3>
        <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return  <Brewery key={index} index={index} beer={beer} liked={this.state.arrayofLikes.includes(index)} clickFunc={() => this.likeBrewery(index)} visible={this.visibilityCheck(beer)}></Brewery>
          })}
        </ol>
      </header>
    </div>
    )
  };
}

export default App;
