export const LANG_SETTER = 'LANG/SET_LANGUAGE';

export const setLanguage = lang => {
  return {
    type: LANG_SETTER,
    payload: lang,
  };
};
