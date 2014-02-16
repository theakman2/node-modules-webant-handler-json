var fs = require("fs");

module.exports = {
	extensions:".json",
	handle:function(filePath,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+c.toString().trim()+";");
		});
	}
};