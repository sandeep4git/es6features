let fs = require('fs');

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log("error!");
    }
    else{
        consoe.log('Hello World!');
    }
})