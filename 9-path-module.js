const path = require('path');

console.log(path.sep);

const filepath = path.join('/content/','subfolder', 'text.txt');
console.log(filepath);

//base name tells about file name in subfolder
const base = path.basename(filepath)
console.log(base);
//absolute is define all paths foler, then subfolder,..
const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt');
console.log(absolute);
 

