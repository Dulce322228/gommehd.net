var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send(index.html);
	console.log('open / get');
})
app.listen(8000,function(){
	console.log("server started");
});