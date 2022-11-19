import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const FormSimple = ({handleChange,item,submitHandle}) =>{      
           return(        
            <Form onSubmit={ submitHandle}>                               
                <Row>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="nombre" className="label-sub" >Nombre </Label>                           
                        </FormGroup>
                    </Col>   
                    <Col md={3}>
                        <FormGroup>                            
                            <Input
                            id="nombre"
                            name="nombre"
                            type="text"     
                            onInvalid={(e) => e.target.setCustomValidity('El campo nombre es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.nombre}
                            onChange={(e)=>{ handleChange(e)}} 
                            required              
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2  }>
                        <FormGroup>
                            <Label for="icon" className="label-sub">Icono </Label>                           
                        </FormGroup>
                    </Col>   
                    <Col md={3}>
                        <FormGroup>                            
                            <Input
                            id="icon"
                            name="icon"
                            type="text"     
                            onInvalid={(e) => e.target.setCustomValidity('El campo abreviacion es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.icon}
                            onChange={(e)=>{ handleChange(e)}} 
                            required              
                            />
                        </FormGroup>
                    </Col>
                                                                    
                    <Col md={2}>
                        <ButtonGroup>
                            <Button 
                                type="submit"
                                className={item.id ?"btn-sub btn-xs btn-warning ml-2" : "btn-sub btn-xs btn-info ml-2"}>
                                <FontAwesomeIcon icon={faSave} />  
                                {' '} {item.id ? " Actualizar" : " Guardar"}
                            </Button>  
                        </ButtonGroup>
                    </Col>                                       
                </Row>                     
            </Form>             
    )    
}

export default FormSimple