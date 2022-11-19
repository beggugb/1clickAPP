import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import SucursalesTable  from './components/Screens/SucursalesTable'


const SucursalesView = () =>{   
    return(
        <>                 
        <Routes>                
            <Route path="/" element={<SucursalesTable />}/>                                                    
        </Routes>
        <Outlet/>       
        </>         
    )
}

export default SucursalesView