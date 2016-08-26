import {createSelector} from 'reselect';

import tutorialConfigOptions from '../options/tutorialConfig';

export const languageSelector = state => {
  return state.packageJson && state.packageJson.config ?
    state.packageJson.config.language : null;
};

export const languageSuffixSelector = createSelector(
  languageSelector,
  language => {
    return tutorialConfigOptions.hasOwnProperty(language) ?
      tutorialConfigOptions[language].language.suffix : null;
  }
);
