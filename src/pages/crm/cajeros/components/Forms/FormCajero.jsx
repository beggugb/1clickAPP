import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { tipoCajero, nivelCajero } from '../../../../../data/dataLoad'
import Select from 'react-select'  
import { custom } from '../../../../../helpers/customStyles'
import { locations} from "../../../../../helpers/locations"
import { defaultVal } from "../../../../../helpers/functions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm"
import Switch from 'react-switch'
import TimeField from 'react-simple-timefield';

const FormCajero = ({item,handleChange,submitHandle}) =>{    
    return(        
     <Form onSubmit={ submitHandle}>                               
         <Row>
             <Col md={5}>
                 <FormGroup>
                     <Label for="nombre">Nombre </Label>
                     <Input
                     id="nombre"
                     name="nombre"
                     type="text"     
                     onInvalid={(e) => e.target.setCustomValidity('El campo nombres es obligatorio !')}
                     onInput={(e) => e.target.setCustomValidity('')}
                     value={item.nombre}
                     onChange={(e)=>{ handleChange(e)}} 
                     required              
                     />
                 </FormGroup>
             </Col>                         
             <Col md={5}>
                 <FormGroup>
                     <Label for="direccion">Dirección</Label>
                     <Input
                     id="direccion"
                     name="direccion"
                     type="text"                                 
                     value={item.direccion}
                     onChange={(e)=>{ handleChange(e)}}                                   
                     />
                 </FormGroup>
             </Col>
             <Col md={2} className="mt-45">
                 <ButtonGroup>
                     <Button 
                         type="submit"
                         className={item.id ?"btn-md btn-warning" : "btn-md btn-info"}>
                         <FontAwesomeIcon icon={faSave} />  
                         {' '} {item.id ? " Actualizar" : " Guardar"}
                     </Button>  
                 </ButtonGroup>
             </Col>                                       
         </Row>                     
     </Form>             
)    
}

export default FormCajero