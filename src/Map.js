import React, { Component } from 'react';
import City from './City.js';
import './App.css';
import locations from './locations.js';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./map_assets', false, /\.(png|jpe?g|svg)$/));


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: locations,
      mapview: 1,
      city: null,
    }
  }

  selectCity(id) {
    var city = this.state.locations[id];
    console.log(city.name);
    var cityView = (
      <City
        onClose = {(ev) => this.setState({city: null, mapview: 1})}
        label={city.label}
        name={city.name}
        pics={city.pics}
      />);
    this.setState({
      mapview: 0,
      city: cityView,
    });
    return null;
  }

  renderMapPins() {
    var elements = [];
    var cities = this.state.locations;
    var keys = Object.keys(cities);
    console.log('generating pins...');
    for (var i=0; i<keys.length; i++) {
      var pin = cities[keys[i]];
      console.log(i+1);
      elements.push(
        <div
          className={pin.name+' pin-container'}
          onClick={this.selectCity.bind(this, keys[i])}
          key={i}>
          <img className='pin' src={images['map_pin.png']} alt='pin'/>
        </div>
      );
    }
    return (
      <div>
        {elements}
      </div>
    );
  }

  renderCity() {
    if (this.state.city != null) {
      return this.state.city;
    }
  }

  renderMap() {
    return (
      <div className="home">
        <div className="map-container">
          <img
            className="map"
            src={images['map.png']}
            alt="map"
            />
          {this.renderMapPins()};
        </div>
        <div className="logo-container">
          <img
            className = "logo"
            src = {images['logo.png']}
            alt = "santa cruz"/>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.mapview === 1) {
      return (this.renderMap());
    }
    return (this.renderCity());
  }
}

export default Map;
