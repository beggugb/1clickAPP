import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import CajerosTable  from './components/Screens/CajerosTable'


const CajerosView = () =>{   
    return(
        <>                 
        <Routes>                
            <Route path="/" element={<CajerosTable />}/>                                                    
        </Routes>
        <Outlet/>       
        </>         
    )
}

export default CajerosView