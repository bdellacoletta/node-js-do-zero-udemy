const http = require("http");

http.createServer(function(req, res){

  if(req.url === "/"){
    res.write("<h1>Home</h1>");
    res.end
  }
  else if(req.url === "/user"){
    res.write("<h1>Hello User</h1>");
    res.end
  }

}).listen(8080);
