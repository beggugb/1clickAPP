import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({children}) =>{ 
    console.log(children)
    const user = JSON.parse(localStorage.getItem('@usuarioUnity22'))
    if(!user){
        return <Navigate to ="/" replace />; }
    return children    
    };

export default Protected 
