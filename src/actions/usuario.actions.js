import { usuarioService } from "../services/usuario.service";
import {toastr} from 'react-redux-toastr'

export const usuarioActions = {
    login,
    logout
};

function login(params){
    return (dispatch) =>{
        usuarioService
        .login(params)
        .then((response)=>{  
            if(response.result.user.usuario)
            {
                dispatch({type:'login',result:response.result.user})
            }else{
                toastr.error('Login', response.result.user.message)
            }                            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

function logout(){
    return(dispatch) =>{        
        usuarioService.logout()
        dispatch({type:'logout'})
    }
}



