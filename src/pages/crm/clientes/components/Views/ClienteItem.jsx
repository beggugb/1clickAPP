import React,{useEffect, useRef} from "react";
import { useDispatch } from 'react-redux'
import { Table,Col,Row,Button } from "reactstrap";
import {api} from '../../../../../helpers/api'
import Moment from 'react-moment'
import ReactToPrint from "react-to-print";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ComponentToPrint = React.forwardRef((props,ref)=>{
    const mapRef = useRef()
    const fechaHoy = new Date()
    const LocationPin = ({text}) =>(
        <FontAwesomeIcon icon={faMapMarkerAlt} className="pini"/>
      )
    return(
        <div ref={ref}>
            <div className="reporte">
                <div className="reporteHeader">
                <p>Usuario: {props.usuario.nombres} - Fecha : <Moment format="DD-MM-YYYY">{ fechaHoy }</Moment></p>
                <Row>
                    <Col md={12}>
                    <h5 className="text-center pio"> <b>Kardex Cliente # <b>{props.item.id}</b></b></h5>                             
                    </Col>            
                </Row>
                </div>
                <div className="reporteBody">
                    <div className="bodyDatos">
                    <Table className="table-reporte">
                        <tbody>
                            <tr className="trBnd">
                                <td width="60%">Nombres :</td><td width="40%">Nit:</td>
                            </tr>
                            <tr>
                                <td >{props.item.nombres}</td><td >{props.item.nit}</td>
                            </tr>
                            <tr className="trBnd">
                                <td >Teléfono :</td><td >Celular :</td>
                            </tr>
                            <tr>                               
                                <td>{props.item.telefono}</td>                                
                                <td>{props.item.celular}</td>
                            </tr>
                            <tr className="trBnd">
                                <td>E-mail :</td><td>Web :</td>
                            </tr>
                            <tr>
                                <td>{props.item.email}</td>
                                <td>{props.item.web}</td>
                            </tr>
                            <tr className="trBnd">
                                <td>Facebook :</td><td>Instagram :</td>
                            </tr>
                            <tr>
                                <td>{props.item.facebook}</td>
                                <td>{props.item.instagram}</td>
                            </tr>
                            <tr className="trBnd">
                                <td>TikTok :</td><td>Portada :</td>
                            </tr>
                            <tr>
                                <td>{props.item.tiktok}</td>
                                <td>{props.item.portada}</td>
                            </tr>
                            <tr className="trBnd">
                                <td>Tipo :</td><td>Nivel :</td>
                            </tr>
                            <tr>
                                <td>{props.item.tipo}</td>
                                <td>{props.item.nivel}</td>
                            </tr>
                            
                            <tr className="trBnd"><td colSpan={2}>Dirección :</td></tr>
                            <tr><td colSpan={2}>{props.item.direccion}</td></tr>
                            
                            <tr className="trBnd"><td colSpan={2}>Descripción :</td></tr>
                            <tr><td colSpan={2}>{props.item.descripcion}</td></tr>

                            <tr className="trBnd">
                                <td>H.Apertura :</td><td>H.Cierre :</td>
                            </tr>
                            <tr>
                                <td>{props.item.hinicio}</td>
                                <td>{props.item.hfin}</td>
                            </tr>

                        </tbody>
                    </Table>
                    </div>   
                    <div className="bodyImg">
                        <div className="imagenForm">            
                            <Row className="perfilPreview">
                                <Col md="12" className="colPreview">
                                <img alt="preview" className="img-perfil" src={api+"/static/images/clientes/sm/"+props.item.filename}/>                                    
                                </Col>
                            </Row>    
                            <Row className="perfilPreview">
                                <Col md="12" className="colPreview">                                
                                <img alt="preview" className="img-perfils" src={api+"/static/images/portadas/sm/"+props.item.portada}/>
                                </Col>
                            </Row>                         
                        </div>
                    </div>
             
                    <div className="formMaps">
                        <div style={{ height: '220px', width: '100%', padding: '1px', marginTop: '2px' }}>  
                                { props.item.latitude  && props.item.longitude ?       
                                    <GoogleMapReact
                                    ref={mapRef} 
                                  
                                    bootstrapURLKeys={{ 
                                        key: 'AIzaSyAF83DBU51q3idSspsd7f4DtTk7vNwHpR8',
                                        libraries:['places', 'geometry', 'drawing', 'visualization'] 
                                        }}
                                    defaultCenter={{        
                                        lat: parseFloat(props.item.latitude),
                                        lng: parseFloat(props.item.longitude)
                                        }}
                                    defaultZoom={17}>
                                        <LocationPin           
                                        lat={parseFloat(props.item.latitude)}
                                        lng={parseFloat(props.item.longitude)}
                                        text={props.item.direccion}
                                        />
                                
                                    </GoogleMapReact>
                                : null }       
                        </div>
                    </div>
                </div>               
            </div>    
        </div>
    )
})


const ClienteItem = ({item}) =>{
    const dispatch = useDispatch()
    const usuario = JSON.parse(localStorage.getItem('@usuarioUnity22'))
    const componentRef = useRef()
    useEffect(() => {        
        return () => {
            dispatch({type:'clienteReset'})
        };
    }, []);

    return(
        <div className="itemReporte">
           <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}       
            item={item} 
            usuario={usuario}                          
        />    
        </div>
    )

}

export default ClienteItem