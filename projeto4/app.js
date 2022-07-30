const http = require("http");
const fs = require("fs");

function read(file) {
  return fs.readFileSync(file);
}

http.createServer(function(req, res){

  if(req.url === "/"){
    res.write(read("index.html"));
    res.end
  }
  else if(req.url === "/user"){
    res.write(read("user.html"));
    res.end
  }

}).listen(8080);
