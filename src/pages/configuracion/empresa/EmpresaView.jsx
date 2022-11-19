import React,{ useEffect} from 'react'
import { Row, Col } from 'reactstrap'
import { crudActions } from '../../../actions/crud.actions'
import FormEmpresa from './components/FormEmpresa'
import {useDispatch, useSelector } from 'react-redux'
import FormImagen from '../../../components/Imagen/FormImagen'


const EmpresaView = () =>{
    const dispatch = useDispatch()    
    const empresa = JSON.parse(localStorage.getItem('@empresaUnity22'))
    const { item } = useSelector(state=>state.empresa)
    
    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'empresaChange',name:name,value:value})
    }

    const submitHandle = event =>{
        event.preventDefault()
        dispatch(crudActions.putUpdate('empresaAdd','empresas',item,'unit'))
    }


    useEffect(() => {
        dispatch(crudActions.getItem('empresaAdd','empresas',1))
        return () => {
            "cleanup"
        };
    }, []);

    const changeSwitch = (checked,name) => {              
        dispatch({type:'empresaChange',name:name,value:checked})           
        let newData = empresa
        newData.automatico = checked
        localStorage.setItem("@empresaUnity22", JSON.stringify(newData));        
        
      }
    
return(
   <div className="content">
    <div className="main-contenido">
        <div className="nav-sunitys" expand="lg">
            <Row>
                <Col md="12" className="menu">
                    Empresa
                </Col>                
            </Row>
            <Row className="form-edit">
                <Col md="8" className="datos">
                    <FormEmpresa        
                    item={item}
                    handleChange={handleChange}     
                    submitHandle={submitHandle}   
                    changeSwitch={changeSwitch}    
                    />
                </Col>
                <Col md="4" className="datos">
                    <FormImagen
                        item={item}
                        payload={'empresa'}
                        payloads={'empresas'}
                    />
                </Col>
            </Row>
        </div>
    </div>
   </div> 

 )
}

export default EmpresaView