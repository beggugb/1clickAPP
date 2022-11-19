import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import ClientesTable  from './components/Screens/ClientesTable'
import ClienteEdit from "./components/Screens/ClienteEdit";


const ClientesView = () =>{   
    return(
        <>                 
        <Routes>                
            <Route path="/" element={<ClientesTable />}/>                   
            <Route path="lista" element={<ClientesTable />}/>                   
            <Route path="nuevo" element={<ClienteEdit />}/>            
        </Routes>
        <Outlet/>       
        </>         
    )
}

export default ClientesView