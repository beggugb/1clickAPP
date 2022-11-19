import React,{useState} from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEye, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm";
import SelectSimpleForm from "../../../../../components/Select/SelectSimpleForm";
import { roles } from '../../../../../data/dataLoad'
import { crudActions }  from '../../../../../actions/crud.actions'

const FormUsuario = ({handleChange,submitHandle,item,changeSwitch}) =>{  
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.sucursal)
    const [password, setpassword] = useState();
    const [type, settype] = useState('password');

    const submitHandles = event =>{
        event.preventDefault()    
        if(item.id){        
            dispatch(crudActions.putUpdate('usuarioAdd','usuarios',item,'password'))
        }else{        
            dispatch(crudActions.postAdd('usuarioAdd','usuarios',item,'password'))
        }
       } 
    const changeType = () =>{
        let ty = type === 'text' ? 'password': 'text'
        settype(ty)
    }   

    return(
        <>
        <Form onSubmit={submitHandle}>
            <div className="panel">
                    <Row className="panels">
                        <Col md="11">
                        <h6>Datos Generales</h6>
                        </Col>
                        <Col md="1" className="text-right">
                            <Button 
                            type="submit"
                            className="btn-menu">
                            <FontAwesomeIcon icon={faSave} />  
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="nombres">Nombres</Label>
                            <Input type="text" name="nombres" id="nombres" 
                            value={item.nombres || ''}                          
                            onChange={ (e) => handleChange(e)} 
                            onInvalid={(e) => e.target.setCustomValidity('El campo nombre es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}                                        
                            required
                            /> 
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="apellidos">Apellidos</Label>
                            <Input type="text" name="apellidos" id="apellidos" 
                            value={item.apellidos || ''}                          
                            onChange={ (e) => handleChange(e)} 
                            onInvalid={(e) => e.target.setCustomValidity('El campo apellidos es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}                                        
                            required
                            /> 
                            </FormGroup>
                        </Col>  
                    </Row>
                    <Row>
                        <SelectLocalForm
                            label={'Rol'}
                            items={roles}
                            xreduxItem={'usuarioChange'}
                            keyId={'rol'}
                            itemId={item.rol}
                        />
                        <SelectSimpleForm
                            label={'Sucursal'}
                            items={items}
                            xredux={'sucursalesLista'}
                            xreduxItem={'usuarioChange'}
                            payload={'sucursales'}
                            key={'sucursalId'}
                            itemId={item.sucursalId}
                        />
                    </Row>
            </div>        
        </Form>    

        <Form onSubmit={submitHandles}>
            <div className="panel">
                    <Row className="panels">
                        <Col md="11">
                        <h6>Password</h6>
                        </Col>
                        <Col md="1" className="text-right">
                            <Button 
                                type="submit"
                                className="btn-menu">
                                <FontAwesomeIcon icon={faSave} />  
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type={type} name="password" id="password" 
                            value={password || ''}                          
                            onChange={ (e) => setpassword(e.target.value)} 
                            onInvalid={(e) => e.target.setCustomValidity('El campo password es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}                                        
                            required
                            /> 
                            </FormGroup>
                        </Col>   
                        <Col md="2">
                            <FormGroup>
                                <FontAwesomeIcon icon={type === 'text' ? faEyeSlash :faEye } 
                                className={type === 'text' ?  "btn-npassword" : "btn-password" }
                                onClick={() => changeType()}
                                />
                            </FormGroup>
                        </Col>                   
                    </Row> 
            </div>           
        </Form>

        </>
    )

}    

export default FormUsuario