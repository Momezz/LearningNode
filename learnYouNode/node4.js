const fs = require('fs');
let file = process.argv[2];

fs.readFile(file, function(err, contents){
    let str = contents.toString();
    const result = (str.match(/\n/g) || []).length;
    console.log(result);
})
