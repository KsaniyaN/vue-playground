module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
};
