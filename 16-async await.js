const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/third.txt", "this is third file");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// const getText = (path) => {
//   return new Promise((reject, resolve) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
//
//getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));