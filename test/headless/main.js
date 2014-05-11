window["__MODULES__"] = window["__MODULES__"] || {};
window["__MODULES__"].modules = window["__MODULES__"].modules || {};
window["__MODULES__"].modules['main.js'] = {
"1":function(require,module,exports) {
module.exports = {
    foo: "bar",
    baz: [ 2, 4, "test" ],
    bar: {
        nested: "again",
        another: 50
    }
};
},
"0":function(require,module,exports) {
window.__global = require([ "main.js", "1" ]);
}};

(function(){      function getExports(data,cb) {    var ret;    if (typeof data[0] === "string") {     try {      var fn = window["__MODULES__"].modules[data[0]][data[1]];     } catch(e) {      throw new Error("Module " + data + "not found.");      }     if (fn.hasOwnProperty("__module")) {      ret = fn.__module.exports;     } else {      var module;      var exports = {};      fn.__module = module = { exports: exports };      fn.call(       undefined,               getExports       ,       module,       exports      );      ret = module.exports;     }    } else {     ret = [];     for (var i = 0; i < data.length; i++) {      ret.push(getExports(data[i],cb));     }    }    if (typeof cb === "function") {     cb.apply(undefined,typeof data[0] === "string" ? [ret] : ret);    } else {     return ret;    }   };   window["__MODULES__"] = window["__MODULES__"] || {};   window["__MODULES__"].modules = window["__MODULES__"].modules || {};   window["__MODULES__"].getExports = getExports;       getExports(["main.js","0"]);     })();