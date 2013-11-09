var fs = require("fs");
var path = require("path");
var url = require("url");

module.exports = function(settings) {
	
	this.willHandle = function(filePath) {
		if (url.parse(filePath,false,true).host) {
			return false;
		}
		if (filePath.indexOf("@@") === 0) {
			return false;
		}
		if (path.extname(filePath) === ".json") {
			return true;
		}
		return false;
	};
	
	this.handle = function(filePath,done) {
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+c.toString().trim()+";");
		});
	};
};