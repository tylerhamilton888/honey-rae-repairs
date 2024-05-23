/* eslint-disable react/prop-types */




export const TicketFilterBar = ({setSearchTerm, setShowEmergencyOnly}) => {
return(
<div className="filter-bar">
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
      />
      </div>
)
    }