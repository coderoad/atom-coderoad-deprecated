const tutorialConfigOptions = {
  JS: {
    suffix: 'js',
    runners: [
      'mocha-coderoad'
    ],
    language: {
      suffix: 'js',
      comments: '//',
    }
  },
  Python: {
    runners: [
      'pytest-coderoad'
    ],
    language: {
      suffix: 'py',
      comments: '#',
    }
  },
};
export default tutorialConfigOptions;
