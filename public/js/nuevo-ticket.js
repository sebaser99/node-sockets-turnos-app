const lblNuevoTicket = document.querySelector('#lblNuevoTicket')
const btnCrear = document.querySelector('button')


const socket = io();

socket.on('connect', ()=> {
    // console.log('Conectado', socket.id)
   btnCrear.disabled = false
})

socket.on('disconnect', ()=> {
    btnCrear.disabled = true
})


socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.textContent = 'Ticket ' + ultimo
} )


btnCrear.addEventListener('click', ()=> {
   
    socket.emit('siguiente-ticket', null, (ticket)=> {
        lblNuevoTicket.textContent = ticket
    })
})