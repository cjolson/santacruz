import React, { Component } from 'react';
import City from './City.js';
import './App.css';

import map_pin from './assets/map_pin.png';
import map from './assets/map.png';
import logo from './assets/logo.png';

class Map extends Component {
  constructor(props) {
    super(props);
    var aptos = {name: 'aptos'};
    var bouldercreek = {name: 'bouldercreek'};
    var capitola = {name: 'capitola'};
    var davenport = {name: 'davenport'};
    var felton = {name: 'felton'};
    var santacruz = {name: 'santacruz'};

    this.state = {
      list: [aptos, bouldercreek, capitola, davenport, felton, santacruz],
      mapview: 1,
      detail: null,
    }
  }

  viewCityDetail(id) {
    var city = this.state.list[id];
    console.log(city.name);
    return null;
  }

  renderMapPins() {
    var elements = [];
    for (var i=0; i<this.state.list.length; i++) {
        var pin = this.state.list[i];
        elements.push(
          <div
            className={pin.name+' pin-container'}
            onClick={this.viewCityDetail.bind(this, i)}
            key={i}>
            <img className='pin' src={map_pin} alt=''/>
          </div>
        );
    }
    return (
      <div>
        {elements}
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <div className="map-container">
          <img
            className="map"
            src={map}
            alt="map"
            />
            {this.renderMapPins()};
        </div>
        <div className="logo-container">
          <img
            className = "logo"
            src = {logo}
            alt = "santa cruz"/>
        </div>
      </div>
    );
  }
}

export default Map;
