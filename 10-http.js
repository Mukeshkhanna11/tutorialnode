const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("this is  the home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is the about page");
    res.end();
  } else {
    res.end("this is not a correct page");
  }
});
server.listen(5000);
