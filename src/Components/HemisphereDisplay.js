import { Divider } from '@material-ui/core';
import React, { Component } from 'react'

export class HemisphereDisplay extends Component {

  constructor(props){
    super(props)

    this.state ={
      latitude: null,
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
      },
      (error)=> {
        this.setState({errorMessage: error.message})
      }
    );
  }

  render() {
    if (this.state.latitude && !this.state.errorMessage){
      return <div>{this.state.latitude}</div>
    }
    if (!this.state.latitude && this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
    }
    else{
      return <div>Loading...</div>
    }
  }
}

export default HemisphereDisplay



