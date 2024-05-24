/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { User } from "../../users/User.jsx"
import "./Customers.css"
import { Link } from "react-router-dom"



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
            return( 
            <Link to={`/customers/${customerObject.id}`}> 
            <User user={customerObject} />
            </Link>

        )
        })}
    </div>
    )
}