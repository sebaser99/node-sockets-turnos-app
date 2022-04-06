const lblEscritorio = document.querySelector('h1')
const btnAtender = document.querySelector('button')
const lblTicketAtender = document.querySelector('small')
const divAlerta = document.querySelector('.alert')
const lblPendientes = document.querySelector('#lblPendientes')

const searchParams = new URLSearchParams(window.location.search)
if(!searchParams.has('escritorio')){
    window.location = 'index.html'
    throw new Error('El escritorio es obligatorio')
}

const escritorio = searchParams.get('escritorio')
lblEscritorio.innerText = escritorio

const socket = io();

socket.on('connect', ()=> {
    // console.log('Conectado', socket.id)
   btnAtender.disabled = false
})

socket.on('disconnect', ()=> {
    btnAtender.disabled = true
})




socket.on('tickets-pendientes', (payload)=> {
    if(payload === 0){
        lblPendientes.style.display = 'none'
        divAlerta.style.display = ''
    } else{
        lblPendientes.innerText = payload
        lblPendientes.style.display = ''
        divAlerta.style.display = 'none'
    }
    
})


btnAtender.addEventListener('click', ()=> {
  
    socket.emit('atender-ticket',{escritorio}, ({ok, msg, ticket})=> {
        if(!ok){
            lblTicketAtender.innerText = `Nadie`
            return divAlerta.style.display = ''
        }

        lblTicketAtender.innerText = `Ticket ${ticket.numero}`
    })
})