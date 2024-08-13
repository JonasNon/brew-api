import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios'
import Brewery from './Brewery';


class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfBeer : [],
      arrayofLikes : []
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
    // arrayOfBeer.map((beer, id) => {
    //   if (index == id) {
    //     this.setState({arrayofLikes})
    //   }
    //   this.setState({})
    // })
    // this.setState({[...this.state.arrayofLikes, }])
    if (this.state.arrayofLikes.includes(index)) {
      // let removed = [...this.state.arrayofLikes.slice(0, index), ...this.state.arrayofLikes.slice(index+1, 1)]
      // console.log("removed: ", removed)
      // this.setState({removed})
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



  render() {
    return (
    <div className="App">
      <header className="App-header">
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return  <Brewery key={index} index={index} beer={beer} liked={this.state.arrayofLikes.includes(index)} clickFunc={() => this.likeBrewery(index)}></Brewery>
          })}
        </ol>
      </header>
    </div>
    )
  };
}

export default App;
