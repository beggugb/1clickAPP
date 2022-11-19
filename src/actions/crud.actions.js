import {crudService} from '../services/crud.service'
import {toastr} from 'react-redux-toastr'

export const crudActions = {
    getData,
    getItem,
    getItems,
    getList,
    getLista,
    postSearch,
    postSearchs,
    postAdd,
    putUpdate,
    putUpdates,
    putFile,
    getCopy,
    dDelete,
    putAprobar
       
}

function putAprobar(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .putAprobar(payload,dato,tipo)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.warning(payload, 'Dato aprobado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}

function getLista(xredux,payload,pky){ 
    return(dispatch)=>{ 
        dispatch({type:"setLoading", state: true})
      crudService.getLista(payload,pky) 
        .then((response)=>{ 
           dispatch({type:xredux,response:response.result})             
           dispatch({type:"setLoading", state: false})
        })          
        .catch((err) => { 
           toastr.error(payload, err)
           dispatch({type:"setLoading", state: false})
       });    
    }    
} 
function getItems(xredux,payload){ 
    return(dispatch)=>{ 
      crudService.getItems(payload) 
        .then((response)=>{ 
            
           dispatch({type:xredux,response:response.result})             
        })  
        .catch((err) => { 
           toastr.error(payload, err)
       });    
    }    
} 

function getList(xredux,payload,dato){ 
     return(dispatch)=>{ 
       crudService.getList(payload,dato) 
         .then((response)=>{ 
            dispatch({type:xredux,response:response.result})             
         })  
         .catch((err) => { 
            toastr.error(payload, err)
        });    
     }    
}                  

function dDelete(xredux,payload,pky){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        crudService
        .dDelete(payload,pky)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.error(payload,'Item eliminado')
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err)  
            dispatch({type:"setLoading", state: false})         
        });
    }
}

function getCopy(xredux,payload,pky){
    return(dispatch)=>{
        crudService
        .getCopy(payload,pky)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.success(payload,'Item copiado')
        })
        .catch((err) => {                  
            toastr.error(payload, err)           
        });
    }
}

function postSearch(xredux,payload,dato){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        crudService
        .postSearch(payload,dato)
        .then((response)=>{         
         
            if(response.result){
                dispatch({type:xredux,response:response.result})
                
            }
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}

function postSearchs(xredux,payload,dato){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        crudService
        .postSearchs(payload,dato)
        .then((response)=>{
            if(response.result){
                dispatch({type:xredux,response:response.result})
                dispatch({type:"setLoading", state: false})
            }
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}

function putFile(payload,dato,datoId){
    return (dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .putFile(payload,dato,datoId)
        .then((response)=>{
            setTimeout(() => { 
                dispatch({type:'setLoading',state:false})
                toastr.success(payload, 'Imagen cargada')
                }, 1000);
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function putUpdates(xredux,payload,dato,pky,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .putUpdates(payload,dato,pky,tipo)
        .then((response)=>{
 
            dispatch({type:xredux,response:response.result})
            toastr.warning(payload, 'Dato actualizado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function putUpdate(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .putUpdate(payload,dato,tipo)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.warning(payload, 'Dato actualizado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function getItem(xredux,payload,pky){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true}) 
        crudService
        .getItem(payload,pky)
        .then((response)=>{                          
            dispatch({type:xredux,response:response.result})
            dispatch({type:"setLoading", state: false}) 
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function postAdd(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .postAdd(payload,dato,tipo)
        .then((response)=>{            
            dispatch({type:xredux,response:response.result})
            toastr.success(payload, 'Dato registrado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((error)=>{
            toastr.error(payload, 'Error de registro') 
            dispatch({type:"setLoading", state: false})
        })
    }
}

function getData(xredux,payload,page,num,prop,orden){
    return (dispatch) =>{
        dispatch({type:"setLoading", state: true})
        crudService
        .getData(payload,page,num,prop,orden)
        .then((response)=>{        
         
            dispatch({type:"setLoading", state: false})
            dispatch({type:xredux,response:response.result}) 
        })
        .catch((err) =>{
            dispatch({type:"setLoading", state: false})
        })
    }
}
