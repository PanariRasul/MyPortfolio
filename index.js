const fileSystem = require("fs");
fileSystem.writeFile("noddy.txt","Hello Noddy!!!!", function(err, result) {
    if(err) {
        console.log("Error",err);
    };
});


