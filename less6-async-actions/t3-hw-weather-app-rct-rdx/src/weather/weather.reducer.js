import { GET_CITIES_LIST } from './weather.actions';

const initState = {
  citiesList: []
}

export const wetherReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CITIES_LIST:
      return {
        ...state,
        citiesList: action.payload.listOfCities,
      };
    default:
      return state;
  }
};
