const net = require('net');

const server = net.createServer(function (socket){
    const date = new Date();

    const mes = date.getMonth()+1;
    if(mes<10){
        mes = '0'+mes.toString();
    }
    const dia = date.getDate();
    if(dia<10){
        dia = '0'+dia.toString();
    }

    const fecha = date.getFullYear()+'-'+mes+'-'+dia+' '+date.getHours()+':'+date.getMinutes()+'\n';
    console.log(fecha);
    
    socket.write(fecha);
    socket.end();
})

server.listen(Number(process.argv[2]));



