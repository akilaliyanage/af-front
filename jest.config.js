module.exports = {
      "transform": {
        "^.+\\.js$": "babel-jest",
        ".+\\.(css)$": "jest-transform-stub",
        "^.+\\.jsx$": "babel-jest" 
      },
      "automock": false,
      "setupFiles": [
        "./setupJest.js"
      ]
  }