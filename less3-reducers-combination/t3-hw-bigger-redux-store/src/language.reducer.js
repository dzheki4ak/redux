import { LANG_SETTER } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case LANG_SETTER:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};
