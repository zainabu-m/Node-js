console.log("Welcome to Node js");

var http = require('http');
http.createServer((req, res)=>{
    res.end("http server")

}).listen(1500)
console.warn("Warning");
console.error("Error");
console.log("ReadEvaluatePrintLoop");
for(let i = 0; i < 5; i++){
    let x = 0;
    let y = 3;
    let z = x + y;
    console.log(z);
    
}
console.log("Server listen at 1500");