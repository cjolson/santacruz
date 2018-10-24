import React, { Component } from 'react';
import './App.css';

class City extends Component {

  renderImage() {
    if (this.props.pics == null) {
      return (null);
    }
    console.log('there a pic')
    return (
      <img className='featured-pic' src={this.props.pics[0]} alt='' />
    );
  }

  render() {
    return (
      <div>
        <div className='exit-city' onClick={this.props.onClose}>X</div>
        <div>
          {this.renderImage()}
          <img src={this.props.label} alt={this.props.name} />
        </div>
      </div>
    );
  }
}

export default City;
