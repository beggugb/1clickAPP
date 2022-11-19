import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import DatePicker, { registerLocale } from  "react-datepicker";

import es from 'date-fns/locale/es';
registerLocale('es', es)

const FormOferta = ({item,handleChange,submitHandle,onChange1,onChange2,value1,value2}) =>{    
    return(        
     <Form onSubmit={ submitHandle}>                               
         <Row>
             <Col md={6}>
                 <FormGroup>
                     <Label for="titulo">Titulos </Label>
                     <Input
                     id="titulo"
                     name="titulo"
                     type="text"     
                     onInvalid={(e) => e.target.setCustomValidity('El campo nombres es obligatorio !')}
                     onInput={(e) => e.target.setCustomValidity('')}
                     value={item.titulo}
                     onChange={(e)=>{ handleChange(e)}} 
                     required              
                     />
                 </FormGroup>
             </Col>                         
             <Col md={3}>
                <FormGroup >
                    <Label for="eDesde">Desde :</Label>                    
                    <DatePicker locale="es"selected={value1} onChange={(date) => onChange1(date)} />
                </FormGroup> 
             </Col>
             <Col md={3}>
                <FormGroup >
                    <Label for="eHasta">Hasta : </Label>
                    <DatePicker locale="es"selected={value2} onChange={(date) => onChange2(date)} />
                </FormGroup>   
             </Col>
                                                 
         </Row>    
         <Row>
             <Col md={8}>
                 <FormGroup>
                     <Label for="detalle">Detalle </Label>
                     <Input
                     id="detalle"
                     name="detalle"
                     type="text"                          
                     value={item.detalle}
                     onChange={(e)=>{ handleChange(e)}} 
                     required              
                     />
                 </FormGroup>
             </Col>                         
             <Col md={2}>
                 <FormGroup>
                     <Label for="vigencia">Vigencia</Label>
                     <Input
                     id="vigencia"
                     name="vigencia"
                     type="text"                                 
                     value={item.vigencia}
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

export default FormOferta