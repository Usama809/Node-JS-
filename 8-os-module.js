const os = require('os');

const user = os.userInfo()
console.log(user);

//methode returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);


const currentOS= {
    name : os.type(),
    relaese : os.release(),
    totalmem : os.totalmem(),
    freemen: os.freemem()
}

console.log(currentOS);