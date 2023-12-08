const fs = require("fs");
const getText = (path) => {
  return new Promise((reject, resolve) => {
    fs.readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
