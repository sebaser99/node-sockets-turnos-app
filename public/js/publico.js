
const  lblTicket2     = document.querySelector('#lblTicket2')
const  lblTicket1     = document.querySelector('#lblTicket1')
const  lblEscritorio1 = document.querySelector('#lblEscritorio1')
const  lblEscritorio2 = document.querySelector('#lblEscritorio2')
const  lblTicket3     = document.querySelector('#lblTicket3')
const  lblEscritorio3 = document.querySelector('#lblEscritorio3')
const  lblTicket4     = document.querySelector('#lblTicket4')
const  lblEscritorio4 = document.querySelector('#lblEscritorio4')

const socket = io()

socket.on('estado-actual', (payload)=> {
        const audio = new Audio('./audio/new-ticket.mp3')
        audio.play()
        if(payload.length > 0){
            const [ultimo1, ultimo2, ultimo3, ultimo4] = payload
            console.log(ultimo1)
            lblTicket1.innerText = ultimo1 ? "Ticket " + ultimo1.numero : "Asigne un turno"
            lblEscritorio1.innerText = ultimo1 ? ultimo1.escritorio:  "Escritorio Disponible"
        
            lblTicket2.innerText = ultimo2 ? "Ticket " + ultimo2.numero : "Asigne un turno"
            lblEscritorio2.innerText = ultimo2 ? ultimo2.escritorio:  "Escritorio Disponible"
        
            lblTicket3.innerText = ultimo3 ? "Ticket " + ultimo3.numero : "Asigne un turno"
            lblEscritorio3.innerText = ultimo3 ? ultimo3.escritorio:  "Escritorio Disponible"
        
            lblTicket4.innerText = ultimo4 ? "Ticket " + ultimo4.numero : "Asigne un turno"
            lblEscritorio4.innerText = ultimo4 ? ultimo4.escritorio:  "Escritorio Disponible"

        } else {
           
            lblTicket1.innerText = "Asigne un turno"
            lblEscritorio1.innerText = "Escritorio Disponible"
        
            lblTicket2.innerText = "Asigne un turno"
            lblEscritorio2.innerText = "Escritorio Disponible"
        
            lblTicket3.innerText = "Asigne un turno"
            lblEscritorio3.innerText = "Escritorio Disponible"
        
            lblTicket4.innerText = "Asigne un turno"
            lblEscritorio4.innerText = "Escritorio Disponible"
        }

      
    
})
