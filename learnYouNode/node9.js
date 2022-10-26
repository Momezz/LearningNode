const http = require("http");
const bl = require("bl");
const results = [];
let count = 0;

function printRes(){
    for(i=0; i<3; i++){
        console.log(results[i]);
    }
}

function getHttp(index){
    http.get(process.argv[2+index], function(response){
        response.pipe(bl(function (err, data){
            if(err) return console.log(err)
            results[index] = data.toString();
            count ++

            if(count===3){
                printRes();
            }
        }))
    })
}

for(let i=0; i<3; i++){
    getHttp(i)
}
