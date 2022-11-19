import React from "react";
import { Row,Col,Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap"
import { nivelCliente, tipoCliente } from '../../../../../data/dataLoad'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm"
import SelectSimpleForm from "../../../../../components/Select/SelectSimpleForm";
import Switch from 'react-switch'
const FormCliente = ({handleChange,item,submitHandle, changeSwitch}) =>{    
    const { items } = useSelector(state => state.categoria)
           return(      
            
            <Form onSubmit={ submitHandle}>                               
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="nombres">Nombres </Label>
                            <Input
                            id="nombres"
                            name="nombres"
                            type="text"     
                            onInvalid={(e) => e.target.setCustomValidity('El campo nombres es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.nombres}
                            onChange={(e)=>{ handleChange(e)}} 
                            required              
                            />
                        </FormGroup>
                    </Col> 
                    <Col md={4}>
                        <FormGroup>
                            <Label for="nit">Nit </Label>
                            <Input
                            id="nit"
                            name="nit"
                            type="text"     
                            onInvalid={(e) => e.target.setCustomValidity('El campo nit es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.nit}
                            onChange={(e)=>{ handleChange(e)}} 
                            required              
                            />
                        </FormGroup>
                    </Col>  
                    <Col md={2}>
                        <FormGroup>
                            <Label for="habilitado">Habilitado </Label>
                            <Switch
                            className="mt-3"                         
                            onChange={ (e) =>{ changeSwitch(e,'habilitado')}}  
                            checked={item.habilitado} 
                            height={20}
                            width={48}
                            borderRadius={20}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            offHandleColor="#c1c1c1"
                            /> 
                            
                        </FormGroup>
                    </Col>                      
                </Row>   
                <Row>
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
                    <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email </Label>
                            <Input
                                id="email"
                                type="text"     
                                name="email"                                
                                value={item.email}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <SelectLocalForm
                        label={'Tipo'}                        
                        items={tipoCliente}                        
                        xreduxItem={'clienteChange'}                        
                        keyId={'tipo'}
                        itemId={item.tipo} 
                        />                    
                    </Col>                                                                                          
                </Row> 
                <Row>
                    <Col md={3}>
                        <SelectSimpleForm
                            label={'Categoría'}                        
                            items={items}      
                            xredux={'categoriasLista'}                  
                            xreduxItem={'clienteChange'} 
                            payload={'categorias'}                       
                            keyId={'categoriaId'}
                            itemId={item.categoriaId}                        
                        /> 
                    </Col> 
                    <Col md={3}>
                        <FormGroup>
                            <Label for="telefono">Teléfono </Label>
                            <Input
                                id="telefono"
                                type="text"     
                                name="telefono"
                                onInvalid={(e) => e.target.setCustomValidity('El campo teléfono es obligatorio !')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                value={item.telefono}
                                onChange={(e)=>{ handleChange(e)}} 
                                required              
                            />                            
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="celular">Celular </Label>
                            <Input
                                id="celular"
                                type="text"     
                                name="celular"                                
                                value={item.celular}
                                onChange={(e)=>{ handleChange(e)}}                                         
                            />                            
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="web">Web </Label>
                            <Input
                                id="web"
                                type="text"     
                                name="web"                                
                                value={item.web}
                                onChange={(e)=>{ handleChange(e)}}                                         
                            />                            
                        </FormGroup>
                    </Col>
                </Row> 

                <Row>  
                    <Col md={3}>
                        <SelectLocalForm
                        label={'Nivel'}                        
                        items={nivelCliente}                        
                        xreduxItem={'clienteChange'}                        
                        keyId={'nivel'}
                        itemId={item.nivel} 
                        />                    
                    </Col> 
                    <Col md={3}>
                        <FormGroup>
                            <Label for="video">Video </Label>
                            <Input
                                id="video"
                                type="text"     
                                name="video"                                
                                value={item.video}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col> 
                    <Col md={6}>
                        <FormGroup>
                            <Label for="tags">Tags </Label>
                            <Input
                                id="tags"
                                type="text"     
                                name="tags"                                
                                value={item.tags}
                                onChange={(e)=>{ handleChange(e)}}                                                                         
                            />                                                      
                        </FormGroup>
                    </Col>

                </Row>  
                <Row>                                                                             
                    <Col md={3}>
                        <FormGroup>
                            <Label for="facebook">facebook </Label>
                            <Input
                                id="facebook"
                                type="text"     
                                name="facebook"                                
                                value={item.facebook}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="instagram">Instagram </Label>
                            <Input
                                id="instagram"
                                type="text"     
                                name="instagram"                                
                                value={item.instagram}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="tiktok">TikTok </Label>
                            <Input
                                id="tiktok"
                                type="text"     
                                name="tiktok"                                
                                value={item.tiktok}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col>  
                    <Col md={3}>
                        <FormGroup>
                            <Label for="slider">Slider </Label>
                            <Input
                                id="slider"
                                type="text"     
                                name="slider"                                
                                value={item.slider}
                                onChange={(e)=>{ handleChange(e)}}                                           
                            />                            
                        </FormGroup>
                    </Col> 
                </Row>
                <Row>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="observaciones">Descripción </Label>
                            <Input
                                id="descripcion"
                                type="textarea"     
                                name="descripcion"                                
                                value={item.descripcion}
                                onChange={(e)=>{ handleChange(e)}}                                                                         
                            />                                                      
                        </FormGroup>
                    </Col>                                       
                </Row>
                <Row>
                    <Col md={3}>
                        <ButtonGroup>
                            <Button 
                                type="submit"
                                className={item.id ?"btn-xs btn-warning" : "btn-xs btn-info"}>
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