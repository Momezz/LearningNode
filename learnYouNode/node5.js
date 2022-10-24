    const fs = require('fs');
    let temp = process.argv[2];
    let ext = process.argv[3];
    fs.readdir(temp, function(err, list){
        for(let i=0; i<list.length; i++){
            if(list[i].split('.')[1] === ext){
                console.log(list[i]);
            }
        }
    })