import React, { Component } from 'react';
import './App.css';

class City extends Component {

  render() {
    return (
      <div>
        <div class='exit-city' onClick={this.props.onClose}>X</div>
        <img src={this.props.label} alt={this.props.name}></img>
      </div>
    );
  }
}

export default City;
