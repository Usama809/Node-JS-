//Common JS , every file is module {by default}
//Modules  - Encapsulated Code (only share minimum)
const data = require("./4-names");
const sayHi = require("./5-utilis");
const anotherdata = require("./6-alternative-flavour");
require('./7-mid-granade');

console.log(anotherdata);

// sayHi('Bin AMjad' );
// sayHi(data.Usama);
// sayHi(data.peter);