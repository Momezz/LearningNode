let mod = require('./modul');
let directorio = process.argv[2];
let extension = process.argv[3];

mod(directorio, extension, function (error, lista) {
    if (error) {
        return console.log(error);
    }
    lista.forEach(function (file) {
        console.log(file);
    });
})

