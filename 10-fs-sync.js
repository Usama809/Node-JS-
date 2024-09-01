const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//add file in the folder according to path
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} , ${second}`, 
  {flag :'a'}
);
