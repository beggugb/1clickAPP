import React,{ useEffect} from "react";
import { Col, Row } from "reactstrap"
import FormUsuario from "../Forms/FormUsuario";
import UsuarioImagen from '../../../../../components/Imagen/FormImagen'
import {useDispatch, useSelector} from 'react-redux'
import { crudActions }  from '../../../../../actions/crud.actions'


const UsuarioEdit = () =>{
    const dispatch = useDispatch()  
    const { item, indicador } = useSelector(state => state.usuario)     
    
   const handleChange = (e) =>{
        const { value, name } = e.target        
        dispatch({type:'usuarioChange',name:name,value:value}) 
   }
   
   const changeSwitch = (checked,name) => {      
    dispatch({type:'usuarioChange',name:name,value:checked})     
  }
  

   const submitHandle = event =>{
    event.preventDefault()    
    if(item.id){        
        dispatch(crudActions.putUpdate('usuarioAdd','usuarios',item,'unit'))
    }else{        
        dispatch(crudActions.postAdd('usuarioAdd','usuarios',item,'unit'))
    }
   } 
  
   
   useEffect(() => {    
    return () => {
        dispatch({type:'usuarioReset'}) 
    };
   }, []);

  
    return(
        <div className="content">
            <div className="main-contenido">  
            <div className="nav-sunitys" expand="lg">            
            <Row>
                <Col md="12" className="menu">
                    {indicador > 0 ? "Editar usuario":"Nuevo usuario" }
                </Col>                
            </Row>
            <Row className="form-edit">
                <Col md="8" className="datos">
                    <FormUsuario
                        handleChange={handleChange}                        
                        submitHandle={submitHandle}
                        item={item}                        
                        changeSwitch={changeSwitch}
                    />                    
                </Col>
                <Col md="4">
                  <div className="imagenHeader">                    
                    <UsuarioImagen
                        item={item}
                        payload={'usuario'}
                        payloads={'usuarios'}
                    />
                  </div>                 
                </Col>
            </Row>
          </div>   
        </div>          
     </div>
    )
}

export default UsuarioEdit