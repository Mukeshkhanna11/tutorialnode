//npm-global command,comes with code
//npm --version
//local dependency-used it only in particular project
//npm install <packagename>
///global dependency - used it in any project
///npm install -g <packagename>
const _ = require("lodash");
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people");
