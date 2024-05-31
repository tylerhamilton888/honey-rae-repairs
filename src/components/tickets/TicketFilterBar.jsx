/* eslint-disable react/prop-types */




export const TicketFilterBar = ({setSearchTerm, setShowEmergencyOnly, currentUser, setShowOpenOnly,}) => {
return(
<div className="filter-bar">
        {currentUser.isStaff ? (<>
        
        <button className="btn-primary" onClick= {() =>{
  
          {setShowEmergencyOnly(true)
  
  
          }}
          
        }>Emergency</button>
      
        <button className="btn-info" onClick ={() =>{
  
          {setShowEmergencyOnly(false)
  
  
        }}
  
  
      }>Show All
      </button>
      <input
      onChange={(event) => {setSearchTerm(event.target.value)
      }}
      type="text"
      placeholder="Search Tickets"
      className="ticket=search"
      /> </> ) : ( 
      
      <>
      <button className="filter-btn btn-primary">Create Ticket</button>
      <button className="filter-btn btn-info" onClick={() => {setShowOpenOnly(true)}}>Open Tickets</button>
      <button className="filter-btn btn-secondary" onClick={() =>{setShowOpenOnly(false)}}>All My Tickets</button>
      </>
      
      )}
      </div>
)
    }