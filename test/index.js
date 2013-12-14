var handler = require("../lib/index.js");

var tests = {
	"test filetypes":function(assert) {
		var data = [
		            "https://mysite.co.uk/bla.js",
		            "//cdn.google.com/path/to/assets.css",
		            "path/to/assets.json",
		            "/abs/path/to/assets.json",
		            "@@hbs/runtime",
		            "@@css/addStylesheet"
		            ];
		assert.deepEqual(
			data.map(function(fp){ return handler.willHandle(fp);}),
			[false,false,true,true,false,false],
			"Should handle the correct files."
		);
	},
	"test content":function(assert,done) {
		handler.handle(__dirname+"/data.json",{},function(err,content){
			assert.ok(!err,"There should be no errors handling this file.");
			assert.equal(
				content,
				'module.exports = {"test":"foo","bar":4,"baz":[4,1,2]};',
				"Handler should return the correct content."
			);
			
			done();
		});
	}
};

require("test").run(tests);