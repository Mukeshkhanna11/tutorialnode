const fs = require("fs");
fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
fs.writeFile("./content/result-async.txt", "this is the write file", (err) => {
  if (err) {
    console.log(err);
  }
});
