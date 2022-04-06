const lblOnline  = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const  txtmensaje = document.querySelector('#txtmensaje');
const  btnEnviar = document.querySelector('#btnEnviar');
const socket = io()

socket.on('connect', ()=> {
    console.log('Conectado', socket.id)
    lblOnline.style.display = ''
    lblOffline.style.display = 'none'
})

socket.on('disconnect', ()=> {
    console.log('Desconectado')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})

socket.on('enviar-mensaje', (payload)=> {
    console.log(payload)
})

btnEnviar.addEventListener('click', ()=> {
    const payload = {
        mensaje: txtmensaje.value,
        uid: '1234ABCD',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=> {
        console.log('Desde el server', id)
    })
})