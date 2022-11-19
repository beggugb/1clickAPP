import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


const FormCliente = ({item,handleChange,submitHandle}) =>{    
    return(        
     <Form onSubmit={ submitHandle}>                               
         <Row>
             <Col md={3}>
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
             <Col md={3}>
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
             <Col md={2}>
                 <FormGroup>
                     <Label for="telefono">Teléfono </Label>
                     <Input
                     id="telefono"
                     name="telefono"
                     type="text"                          
                     value={item.telefono}
                     onChange={(e)=>{ handleChange(e)}}                      
                     />
                 </FormGroup>
             </Col> 
             <Col md={2}>
                 <FormGroup>
                     <Label for="celular">Celular </Label>
                     <Input
                     id="celular"
                     name="celular"
                     type="text"                          
                     value={item.celular}
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

export default FormCliente