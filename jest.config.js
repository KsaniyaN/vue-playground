module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
//   "transformIgnorePatterns": [
//     "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
//   ]
}