/**
 * Handles require calls to files ending with .json
 */

module.exports = function(settings) {
	this.extensions = [".json"];
	
	this.go = function(data,update,done) {
		update({
			type:"internalJs",
			content:"module.exports = "+data.content.trim()+";"
		},done);
	};
};