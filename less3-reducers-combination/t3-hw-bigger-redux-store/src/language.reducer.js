import { LANG_SETTER } from './language.actions';

const initState = {
  language: 'en'
}

export const languageReducer = (state = initState.language, action) => {
  switch (action.type) {
    case LANG_SETTER:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};
