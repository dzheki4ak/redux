import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityWeatherData } from './weather.actions';
import { weatherListSelector } from './weather.selectors';

class Weather extends Component {
  componentDidMount() {
    const { getCitiesWeather } = this.props;
    getCitiesWeather();
  }

  render() {
    const { citiesList } = this.props;
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {citiesList.map(city => {
            return (
              <li key={city.id} className="city">
                <span className="city__name">{city.name} </span>
                <span className="city__temperature">{`${city.temperature} F`}</span>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

const mapState = state => {
  return {
    citiesList: weatherListSelector(state),
  };
};

const mapDispatch = {
  getCitiesWeather: getCityWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
