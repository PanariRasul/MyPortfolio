// const fileSystem = require("fs");
// fileSystem.writeFile("noddy.txt","Hello Noddy!!!!", function(err, result) {
//     if(err) {
//         console.log("Error",err);
//     };
// });

// const fileSystem = require("fs");
// fileSystem.mkdir("bsdk", (err,result) =>{
//     if(err){
//         console.log(err,"error is occured Re check your code");
//     }
// })
// const http = require ("http");
// http.createServer((request, response) => {
//     console.log(request.headers)
//     response.end("Hello It From BackEnd")
// }).listen(8000);


const fileSystem = require ("fs");
fileSystem.rmdir("bsdk", (err,result) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory removed sucsessfully!!!");
    }
})