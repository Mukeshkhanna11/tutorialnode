const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("welcome to website");
    res.end();
  } else if (req.url === "/about") {
    res.write("about page");
    res.end();
  } else {
    res.write("this is not the correct page");
    res.end();
  }
});
server.listen(5000, () => {
  console.log("this is port 5000");
});
