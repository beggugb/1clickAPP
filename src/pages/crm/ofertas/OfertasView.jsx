import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import OfertasTable  from './components/Screens/OfertasTable'


const CajerosView = () =>{   
    return(
        <>                 
        <Routes>                
            <Route path="/" element={<OfertasTable />}/>                                                    
        </Routes>
        <Outlet/>       
        </>         
    )
}

export default CajerosView