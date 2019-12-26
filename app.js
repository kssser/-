const http=require('http');
const fs=require('fs');
const MediaServer=require('node-media-server');

http.createServer(function(req,res){
	fs.readFile('index.html','utf-8',function(error,data){
		if(error)
			throw error;
		res.end(data);
	});
}).listen(3333,function(){
	console.log('server is listening...');
});

var config={
	rtmp:{
		port:1935,
		chunk_size:60000,
		gop_cache:true,
		ping:60,
		ping_timeout:30
	},
	http:{
		port:8000,
		allow_origin:'*'
	}
};

var mediaServer=new MediaServer(config);
mediaServer.run();