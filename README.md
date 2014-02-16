# node-modules-webant-handler-json

_Require JSON files with [webant](https://github.com/theakman2/node-modules-webant)_

## Installation

    $ npm install webant-handler-json

## Usage

Ensure the `json` handler is present in your webant configuration file. For example:

````json
{
    "entry":"src/js/main.js",
    "dest":"build/main.js",
    "handlers":["json"]
}
````

You may now `require` JSON files:

````javascript
var data = require("./path/to/data.json");
````

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant-handler-json.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant-handler-json)

Ensure [phantomjs](http://phantomjs.org) is installed and in your PATH, then run:

    $ npm test