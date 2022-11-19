import React,{ useState, useEffect} from "react";
import { Col, Row } from "reactstrap"
import FormCliente from "../Forms/FormCliente";
import ClienteImagen from '../../../../../components/Imagen/FormImagen'
import Mapas from "./ClienteMapa";
import {ciudades } from "../../../../../helpers/locations"
import {useDispatch, useSelector} from 'react-redux'
import { crudActions }  from '../../../../../actions/crud.actions'

const ClienteEdit = () =>{
    const dispatch = useDispatch()  
    const { item, indicador } = useSelector(state => state.cliente) 
    const [citys, setcitys] = useState([]);   
    
   const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'clienteChange',name:name,value:value}) 
   }
   const handleChanges = (event,name) => {                       
        const { value } = event ? event : ''              
        dispatch({type:'clienteChange',name:name,value:value}) 
   }
   const handleChangePais = (e) =>{
        const { value, indice  } = e ? e : ''
        dispatch({type:'clienteChange',name:'pais',value:value}) 
        let dat = ciudades.filter(d=>(d.indice === indice))
        setcitys(dat)
   }
   const submitHandle = event =>{
    event.preventDefault()    
    if(item.id){
        console.log('existe')
        dispatch(crudActions.putUpdate('clienteAdd','clientes',item,'unit'))
    }else{
        console.log('nell')
        dispatch(crudActions.postAdd('clienteAdd','clientes',item,'unit'))
    }
   } 

   const changeSwitch = (checked,name) => {      
    dispatch({type:'clienteChange',name:name,value:checked})     
   }

   const onTimeChange1 = (value) =>{      
        dispatch({type:'clienteChange',name:'hinicio',value:value})
    }
    const onTimeChange2 = (value) =>{      
        dispatch({type:'clienteChange',name:'hfin',value:value})
    }
   
   useEffect(() => {    
    return () => {
        dispatch({type:'clienteReset'}) 
    };
   }, []);

  
    return(
        <div className="content">
            <div className="main-contenido">  
            <div className="nav-sunitys" expand="lg">            
            <Row>
                <Col md="12" className="menu">
                    {indicador > 0 ? "Editar Cliente":"Nuevo Cliente" }
                </Col>                
            </Row>
            
            <Row className="form-edit">
                <Col md="8" className="datos">
                    <FormCliente 
                        handleChange={handleChange} 
                        handleChanges={handleChanges}
                        handleChangePais={handleChangePais}
                        item={item}
                        citys={citys}
                        submitHandle={submitHandle}
                        changeSwitch={changeSwitch}
                        onTimeChange1={onTimeChange1}
                        onTimeChange2={onTimeChange2}
                    />
                    <Mapas item={item} />
                </Col>
                <Col md="4" className="imgs">
                    <ClienteImagen 
                        item={item}
                        payload={'cliente'}
                        payloads={'clientes'}
                        order={item.filename}
                    />
                    <ClienteImagen 
                        item={item}
                        payload={'portada'}
                        payloads={'portadas'}
                        order={item.portada}
                    />                    
                </Col>
            </Row>
          </div>   

         
        </div>          
     </div>
    )
}

export default ClienteEdit