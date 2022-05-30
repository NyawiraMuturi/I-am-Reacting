import HemisphereDisplay from "./Components/HemisphereDisplay";
import React, { Component } from 'react'

export class App extends Component {

  state ={
    latitude: null,
    errorMessage: ''
  }

  componentDidMount(){
    console.log("component did mount")
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
      },
      (error)=> {
        this.setState({errorMessage: error.message})
      }
    );
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  render() {

    

    if (this.state.latitude && !this.state.errorMessage){
      return <div> <HemisphereDisplay latitude={this.state.latitude}/> </div>
    }
    if (!this.state.latitude && this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
    }
    else{
      return <div>Loading...</div>
    }
  }
}

export default App;
