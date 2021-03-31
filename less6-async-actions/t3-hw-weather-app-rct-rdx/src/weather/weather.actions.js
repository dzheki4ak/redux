import { getCitiesList } from './weather.gateway';

export const GET_CITIES_LIST = 'WEATHER/GET_CITIES_LIST';

export const cityWeatherAction = listOfCities => {
  return {
    type: GET_CITIES_LIST,
    payload: {
      listOfCities,
    },
  };
};

export const getCityWeatherData = () => {
  return function (dispatch) {
    getCitiesList().then(data => dispatch(cityWeatherAction(data)));
  };
};
