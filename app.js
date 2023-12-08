const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((reject, resolve) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
//

const start = async () => {
  try {
    const first = await getText("./content/first.txt");

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
//getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
