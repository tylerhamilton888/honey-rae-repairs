/* eslint-disable react/jsx-key */
import { getStaffUsers} from "../../services/staffService.jsx";
import { useState, useEffect } from "react";
import { User } from "../../users/User.jsx";
import "./Employees.css"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])


    return(
        
        <div className="employees">
        {employees.map(employeeObject => {
            return  <User user={employeeObject} />

            
        })}
    </div>
    )
}