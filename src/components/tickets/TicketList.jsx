import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.jsx"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { TicketFilterBar } from "./TicketFilterBar.jsx"


export const TicketList = ({ currentUser }) => {
  
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [showOpenOnly, setShowOpenOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState ([])
    const [searchTerm, setSearchTerm] = useState("")

   const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      console.log("Current user:", currentUser); // Log current user
    console.log("Fetched tickets:", ticketsArray); // Log fetched tickets
      if (currentUser.isStaff) {
      setAllTickets(ticketsArray)
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
      )
      
      console.log("Filtered tickets for customer:", customerTickets); // Log filtered tickets for non-staff
      setAllTickets(customerTickets)
      }
      
    }  )
   }



  
    useEffect(()=>{
    getAndSetTickets()
  }, [currentUser])
  
    useEffect(()=> {
     if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
  
     } else {
      setFilteredTickets(allTickets)
     }
  
    }, [showEmergencyOnly, allTickets])


    useEffect(()=> {
      const foundTickets = allTickets.filter((ticket)=>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    useEffect (() => {
      if (showOpenOnly) {
        const openTickets=allTickets.filter(ticket => ticket.dateCompleted === '')
        setFilteredTickets(openTickets)
      } else {
        setFilteredTickets(allTickets)

      }
      }


    , [showOpenOnly, allTickets])


    return (<div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly}
      setShowOpenOnly={setShowOpenOnly}
       setSearchTerm={setSearchTerm}
       currentUser={currentUser}/>
      <article className="tickets">
      {filteredTickets.map((ticketObject) => {
        return  <Ticket 
        ticket={ticketObject} 
        currentUser={currentUser} 
        getAndSetTickets={getAndSetTickets}
        key={ticketObject.id} />
        
      })}
      </article>
      
      
       </div>
    ) 
}