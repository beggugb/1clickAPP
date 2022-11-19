import { api } from '../helpers/api.js'

export const usuarioService = {
    login,
    logout
}

function login (dato) {    
    const requestOptions = {
        method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dato),
    };
    return fetch(`${api}/usuarios/login/usuario`,requestOptions)
    .then(handleResponse)
    .then((response)=>{                
        if(response.result.user.usuario){
            let resu = response.result            
            localStorage.setItem("@usuarioUnity22",JSON.stringify(resu.user.usuario))
            localStorage.setItem("@tokenUnity22",JSON.stringify(resu.user.token))            
            localStorage.setItem("@sucursalUnity22",JSON.stringify(resu.user.usuario.sucursal))
            localStorage.setItem("@empresaUnity22", JSON.stringify(resu.empresa));            

        }
        return response
    })
}

function logout() {
    localStorage.removeItem("@usuarioUnity22")
    localStorage.removeItem("@tokenUnity22")            
    localStorage.removeItem("@sucursalUnity22")
    localStorage.removeItem("@empresaUnity22");
  }
  

function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {      
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }