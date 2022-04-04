const controllerSocket = socket => {
    // console.log('Cliente ', socket.id, ' conectado')

    socket.on('disconnect', ()=> {
        // console.log('Cliente ', socket.id, ' desconectado')
    })
    socket.on('enviar-mensaje', (payload, callback)=> {
        const id = 123456;
        callback(id)
        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {controllerSocket}