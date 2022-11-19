import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import UsuarioTable from "./components/Screens/UsuariosTable";
import UsuarioEdit from "./components/Screens/UsuarioEdit"

const UsuariosView = () =>{
    return(
        <>
        <Routes>                
            <Route path="/" element={<UsuarioTable />}/>                   
            <Route path="lista" element={<UsuarioTable />}/> 
            <Route path="nuevo" element={<UsuarioEdit />}/>
        </Routes>
        <Outlet/>
        </>
    )

}

export default UsuariosView
