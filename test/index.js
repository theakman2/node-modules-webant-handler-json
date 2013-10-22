var Handler = require("../lib/index.js");
var HandlerBase = require("./lib/Handler.js");

function createHandler(Handler,settings) {
	var handlerBase = new HandlerBase(settings);
	
	Handler.prototype = handlerBase;
	Handler.prototype.constructor = Handler;
	
	return new Handler();
}

var tests = {
	"test json 1":function(assert,done) {
		var handler = createHandler(Handler);
		var data = {
			filePath:"https://sfi9s.sdf.sd/vk93k.handlebars?bla=3",
			raw:"https://sfi9s.sdf.sd/vk93k.handlebars?bla=3",
			requireType:"comment"
		};
		handler.willHandle(data,function(err,yes){
			assert.strictEqual(err,null,"Handler should not report any errors.");
			assert.strictEqual(yes,false,"Handler should not claim to handle this file.");
			done();
		});
	},
	"test json 2":function(assert,done) {
		var handler = createHandler(Handler);
		var data = {
			filePath:__dirname+"/path/to/bad/file.css",
			raw:"file.css",
			requireType:"function"
		};
		handler.willHandle(data,function(err,yes){
			assert.strictEqual(err,null,"Handler should not report any errors.");
			assert.strictEqual(yes,false,"Handler should not claim to handle this file.");
			done();
		});
	},
	"test json correct file type":function(assert,done) {
		var handler = createHandler(Handler);
		handler.handle({
			filePath:__dirname+"/data.json",
			requireType:"function",
			raw:"./data.json"
		},function(resp){
			assert.deepEqual(
				resp,
				{
					type:"internalJs",
					content:'module.exports = {"test":"foo","bar":4,"baz":[4,1,2]};'
				},
				"Handler should call 'update' correctly."
			);
			
			done();
		});
	}
};

require("test").run(tests);