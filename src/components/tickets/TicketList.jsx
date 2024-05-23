import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState ([])
  
    useEffect(()=>{
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    }  )
  }, [])
  
    useEffect(()=> {
     if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
  
     } else {
      setFilteredTickets(allTickets)
     }
  
    }, [showEmergencyOnly, allTickets]
  
  )
    return (<div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="btn-primary" onClick= {() =>{
  
          {setShowEmergencyOnly(true)
  
  
          }}
          
        }>Emergency</button>
      
        <button className="btn-info" onClick ={() =>{
  
          {setShowEmergencyOnly(false)
  
  
        }}
  
  
      }>Show All</button>
      </div>
      <article className="tickets">
      {filteredTickets.map((ticketObject) => {
        return  <Ticket ticket={ticketObject} name="Joe" key={ticketObject.id} />
        
      })}
      </article>
      
      
       </div>
    ) 
}