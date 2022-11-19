import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Button, Label, Input, FormGroup } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from 'react-switch'
import { faSave  } from "@fortawesome/free-solid-svg-icons";
import SelectLocalForm from '../../../../components/Select/SelectLocalPaises'
import { paises, monedas } from '../../../../helpers/locations'
const FormEmpresa = ({item,handleChange,submitHandle,changeSwitch}) =>{

    return(
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
                    <Col md="12">
                        <FormGroup> 
                                <Label for="nombre">Razón Social </Label> 
                                <Input 
                                    id="nombre" 
                                    name="nombre" 
                                    type="text" 
                                    onInvalid={(e) => e.target.setCustomValidity('El campo razón social es obligatorio !')}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                    value={item.nombre}
                                    onChange={(e)=>{ handleChange(e)}}
                                />
                        </FormGroup>
                    </Col>                                                          
                </Row>  
                <Row>
                    <Col md={8}>
                       <FormGroup> 
                        <Label for="direccion">Dirección </Label> 
                        <Input 
                            id="direccion" 
                            name="direccion" 
                            type="text" 
                            onInvalid={(e) => e.target.setCustomValidity('El campo dirección es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.direccion}
                            onChange={(e)=>{ handleChange(e)}}
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
                            />
                        </FormGroup>     
                    </Col>
                </Row> 

                <Row>
                    <Col md={4}>
                        <FormGroup> 
                        <Label for="telefono">Teléfono </Label> 
                        <Input 
                            id="telefono" 
                            name="telefono" 
                            type="text" 
                            onInvalid={(e) => e.target.setCustomValidity('El campo teléfono es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.telefono}
                            onChange={(e)=>{ handleChange(e)}}
                        />
                        </FormGroup>    
                    </Col>
                    <Col md={4}>
                        <FormGroup> 
                        <Label for="web">Web </Label> 
                        <Input 
                            id="web" 
                            name="web" 
                            type="text" 
                            onInvalid={(e) => e.target.setCustomValidity('El campo web es obligatorio !')}
                            onInput={(e) => e.target.setCustomValidity('')}
                            value={item.web}
                            onChange={(e)=>{ handleChange(e)}}
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup> 
                            <Label for="email">Email </Label> 
                            <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                onInvalid={(e) => e.target.setCustomValidity('El campo email es obligatorio !')}
                                onInput={(e) => e.target.setCustomValidity('')}
                                value={item.email}
                                onChange={(e)=>{ handleChange(e)}}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <SelectLocalForm
                        label={'Paises'}
                        items={paises}
                        xreduxItem={'empresaChange'}
                        keyId={'pais'}
                        itemId={item.pais}
                        monedas={monedas}
                    />
                    <Col md="4">
                        <FormGroup> 
                        <Label for="emoneda">Moneda </Label> 
                        <Input 
                            id="moneda" 
                            name="moneda" 
                            type="text"                                             
                            value={item.labelMoneda || ''}
                            onChange={(e)=>{ handleChange(e)}}
                            readOnly={true}
                        />
                        </FormGroup>
                    </Col> 
                    <Col md="4">
                        <FormGroup>
                            <Label for="estado">Registro contable automático</Label>
                            <Switch                         
                            className="mt-3"                 
                            name="automatico"        
                            onChange={ (e) =>{ changeSwitch(e,'automatico')}}    
                            checked={item.automatico} 
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
            </div>
        </Form>
    )
}

export default FormEmpresa