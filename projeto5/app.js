const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer(function(req, res) {

  if(req.url === "/"){
    fs.readFile("index.html", function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    });
  }
  else if(req.url.match("\.css$")){
    var csspath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(csspath);
    res.writeHead(200, {"Content-Type": "text/css"});
    fileStream.pipe(res);
  }

}).listen(8080);