const app = require('./app'); //creamos un protocolo de tranferencia
const http = require('http');
const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('*** El servidor esta corriendo ***');
})