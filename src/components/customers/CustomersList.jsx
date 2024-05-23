/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { User } from "../../users/User.jsx"
import "./Customers.css"



export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])


    return(
        
        <div className="customers">
        {customers.map(customerObject => {
            return  <User user={customerObject} />

            
        })}
    </div>
    )
}