import React, { Component } from 'react';
import './App.css';

class City extends Component {
  constructor() {
    super();
    this.setState = {
      image: 0,
    }
  }

  generateMustSee() {
    var elements = [];
    var must_see = this.props.must_see;
    for(var i=0; i<must_see.length; i++) {
      elements.push(
        <p>{must_see[i]}</p>
      );
    }
    return (
      <div>
        {elements}
      </div>
    );
  }

  generateTopFive() {
    var elements = [];
    var top_five = this.props.top_five
    for(var i=0; i<top_five.length; i++) {
      elements.push(
        <li>{top_five[i]}</li>
      );
    }
    return (
      <ol>
        {elements}
      </ol>
    );
  }

  generateContent() {
    return(
      <div className='content'>
        <h1>{this.props.title}</h1>
        <p>{this.props.intro}</p>
        <h2>{this.props.name} Must See</h2>
        {this.generateMustSee()}
        <h2>{this.props.name} Top Five</h2>
        {this.generateTopFive()}
      </div>
    );
  }

  generateImages() {
    var elements = [];
    for(var i=0; i<6; i++) {
      elements.push(
        <div className='placeholder' />
      );
    }
    return(
      <div className='image-previews'>
        {elements}
      </div>
    );
  }

generateFeature() {
    return(
      <div className='featured'>
        <div className='placeholder-img' />
        <img className='city-label' src={this.props.label} alt=''/>
      </div>
    );
}

  render() {
    return (
      <div className='city-view'>
          {this.generateFeature()}
          <div className='exit-city' onClick={this.props.onClose}>X</div>
          <div className='details'>
            {this.generateContent()}
            {this.generateImages()}
          </div>
      </div>
    );
  }
}

export default City;
