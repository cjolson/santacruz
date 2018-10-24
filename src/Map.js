import React, { Component } from 'react';
import City from './City.js';
import './App.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

class Map extends Component {
  constructor(props) {
    super(props);
    var aptos = {name: 'aptos', label: images['label_aptos.png']};
    var bouldercreek = {name: 'bouldercreek', label: images['label_bouldercreek.png']};
    var capitola = {name: 'capitola', label: images['label_capitola.png']};
    var davenport = {name: 'davenport', label: images['label_davenport.png']};
    var felton = {name: 'felton', label: images['label_felton.png']};
    var santacruz = {name: 'santacruz', label: images['label_santacruz.png']};

    this.state = {
      list: [aptos, bouldercreek, capitola, davenport, felton, santacruz],
      mapview: 1,
      city: null,
    }
  }

  selectCity(id) {
    var city = this.state.list[id];
    console.log(city.name);
    var cityView = <City
      onClose = {(ev) => this.setState({city: null, mapview: 1})}
      label={city.label}
      name={city.name} />;
    this.setState({
      mapview: 0,
      city: cityView,
    });
    return null;
  }

  renderMapPins() {
    var elements = [];
    for (var i=0; i<this.state.list.length; i++) {
        var pin = this.state.list[i];
        elements.push(
          <div
            className={pin.name+' pin-container'}
            onClick={this.selectCity.bind(this, i)}
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
