const fs = require("fs");
const path = require("path");
console.log("started the first task");
fs.readFile(path.join("./content", "./first.txt"), "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed the task");
});
console.log("starting the next task");
