let cp = require('child_process')

// Open all this child process using Node js
cp.execSync("calc")
cp.execSync("code")
cp.execSync("start chrome https://google.com")

// Run other file throught this file

let output = cp.execSync("node abc.js")
console.log("hii," + output)


