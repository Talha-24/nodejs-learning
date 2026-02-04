const fs=require("fs");

fs.writeFileSync("notes.yaml","Hello World");
const red=fs.readFileSync("notes.yaml");
console.log(red.);
const os=require("os");
const {log,warn,table,time}=require("console");
console.log("platform ",os.platform());
console.log("cPlus ",os.cpus());
console.log("host name ",os.hostname());

console.log(process.cwd()); 

log("Hello World I am robot");