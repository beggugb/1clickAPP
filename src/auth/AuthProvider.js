import React,{ useEffect } from "react";
import { AuthContext } from "./auth-context";
import { useNavigate } from "react-router-dom";
import { usuarioActions } from "../actions/usuario.actions";
import { useSelector, useDispatch } from "react-redux";

const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, item } = useSelector(state =>state.usuario)

    
    const handleLogin = event =>{              
        event.preventDefault() 
        dispatch(usuarioActions.login(item));        
        navigate('/admin/clientes');
    }

    const handleLogout= () =>{
        dispatch(usuarioActions.logout());
        navigate('/');
    }
    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout
    };
    const reload = () =>{        
        if(user){
            navigate('/admin/clientes');
        }       
    }
    
    useEffect(() => {
        reload()
    }, [user]);

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;