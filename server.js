// const ht=require("http");
// ht.createServer().listen(4800); //Incomplete Request


// 

const http=require("http");
// I am trying to create server on https, and runing it locally via https://localhost:30000; but it is nt response
http.createServer((req,res)=>{
     res.write("<h1>  I am Talha  </h1>");

}).listen(30000);

console.log("Server is running on port ");



const http=require("http");


http.createServer((req,res)=>{

    res.write("O Allah make me brave. So that I find the reason behind the grief");
    res.end("Ended Request");

}).listen(4000);


http.createServer().listen(4000);





