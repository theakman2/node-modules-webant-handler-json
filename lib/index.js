var fs = require("fs");
var path = require("path");
var url = require("url");

module.exports = {
	willHandle:function(filePath,settings){
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
	},
	handle:function(filePath,settings,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+c.toString().trim()+";");
		});
	}
};