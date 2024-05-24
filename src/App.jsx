import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeesList } from "./components/employees/EmployeesList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx"


export const App = () => {
 return <Routes>
    <Route path="/" element={
        <>
    <NavBar />
    
    <Outlet/>
    </>
    }
    >
     <Route index element={<Welcome/>} />
     <Route path="tickets" element={<TicketList/>} />
     <Route path="employees">
        <Route index element={<EmployeesList/>} />
        <Route path =":employeeId" element={<EmployeeDetails/>} />
        </Route>


     <Route path="customers">
        <Route index element ={<CustomersList/>} />
        <Route path =":customerId" element={<CustomerDetails/>} />
        </Route>
     
 </Route>
 </Routes>
}
