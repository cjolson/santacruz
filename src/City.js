import React, { Component } from 'react';
import './App.css';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      feature: 0,
    });
  }

  generateMustSee() {
    var elements = [];
    var must_see = this.props.must_see;
    for(var i=0; i<must_see.length; i++) {
      elements.push(
        <p key={i}>{must_see[i]}</p>
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
    var top_five = this.props.top_five;
    for(var i=0; i<top_five.length; i++) {
      elements.push(
        <li key={i}>{top_five[i]}</li>
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

  selectImage(id) {
    console.log('selected '+id);
    this.setState({
      feature: id,
    });
    console.log(this);
  }

  generateImages() {
    var elements = [];
    var pics = this.props.pics;
    for(var i=0; i<pics.length; i++) {
      console.log('place image '+i);
      elements.push(
        <div
          key={i}
          className='img-preview-container'
          onClick={this.selectImage.bind(this, i)}>
          <img
            className='img-view'
            src={pics[i]}
            alt='' />
        </div>
      );
    }
    return(
      <div className='image-previews'>
        {elements}
      </div>
    );
  }

generateFeature() {
  console.log(this.state);
  console.log(this);
    return(
      <div className='featured'>
        <div className='featured-container'>
          <img
            className='img-view'
            src={this.props.pics[this.state.feature]}
            alt='' />
        </div>
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
