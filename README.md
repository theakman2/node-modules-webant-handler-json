# node-modules-webant-handler-json

_Require JSON files with [webant](https://github.com/theakman2/node-modules-webant)_

## Installation

There should be no need to install this module since it's required by the [webant](https://github.com/theakman2/node-modules-webant) module by default.

If for some reason you'd like to use the module outside of webant, install as follows:

    $ npm install webant-handler-json

## Usage

Ensure the `json` handler is present in your webant configuration file. For example:

````json
{
    "entry":"src/js/main.js",
    "dest":"build/main.js",
    "handlers":{
        "json":{}
    }
}
````

You may now `require` JSON files:

````javascript
var data = require("./path/to/data.json");
````

## Tests

    $ npm test