const express = require('express');
const cors = require('cors');
const { controllerSocket } = require('../sockets/controller');

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server)
        this.paths ={} 

        //Middlewares
        this.middlewares()

        //Rutas
        this.routes()

        //Sockets
        this.sockets()
    }
    middlewares() {

        //CORS
        this.app.use(cors())


        //directorio público
        this.app.use(express.static('public'));

    }

   

    routes() {
        // this.app.use(this.paths.auth , require('../routes/auth'))
    
    }

    sockets() {
        this.io.on('connection', controllerSocket)
    }
    listen() {
        this.server.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }


}

module.exports =  Server