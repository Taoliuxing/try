var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var name = require('url').parse(req.url,ture).query.name;

    if(name == undefined){
        name = 'world';
    }
    if(name == '1'){
        var file = './下落的树叶/img/1.png';
        fs.stat(file,function(err,stat){
            if(err){
                console.log(err);
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("Sorry, 1 isn't around right now \n");
            }else{
                var img = fs.readFileSync(file);
                res.contentType = 'image/png';
                res.contentLength = stat.size;
                res.end(img,'binary');
            }
        })
    }else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello' + name + '\n');
    }
}).listen(8124);
console.log('Server running at port 8124/');