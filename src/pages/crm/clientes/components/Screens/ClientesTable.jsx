import React,{ useEffect} from "react";
import { Modal, ModalBody, Row,Col,Button, ButtonGroup } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../../../actions/crud.actions'
import TableCliente from '../Tables/TableCliente'
import Pagination from '../../../../../components/Navigations/Pagination'
import ClienteView from '../Views/ClienteItem'
import FormSearch from "../../../../../components/Forms/SearchParametros";
import { mCliente } from '../../../../../data/dataLoad'
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faBuilding, faMoneyBill, faTrash, faFilePdf, faTimes, faCalendar, faSave, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Horario from '../Forms/ClienteHorario'

const ClientesTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, item, total, pagina, paginas,indicador,modalView } = useSelector(state => state.cliente)    
    const { hdata, hmodalView } = useSelector(state => state.horario)
    
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('clientesData','clientes',page,num,'nombres','ASC'))
    }  
    const setIndicador = (pky,itt) => {     
        console.log(pky)       
        console.log(itt)       
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'clienteIndicador',response:iok,item:itt}) 
      };
    useEffect(() => {
        chargeData(1,12)
        return () => {
            //*cleanup
        };
    }, []);
     
    const editar = () =>{
        if(indicador !==0){
            dispatch(crudActions.getItem('clienteAdd','clientes',indicador))
            navigate('/admin/clientes/nuevo');
        }        
    }

    const toggleModalView = (view) => {    
        let est = !modalView            
        if(indicador !== 0){
            dispatch({type:'clienteView',response:est})
            dispatch(crudActions.getItem('clienteAdd','clientes',indicador))
        }                 
    }; 
    
    const toggleModalViews = () => {    
        let est = !hmodalView   
        if(indicador !== 0 ){         
            dispatch(crudActions.getData('horariosData','horarios',1,12,indicador,indicador))
            dispatch({type:'horarioView',response:est})
        }  
                            
    }; 
    
     const deleteItem = () =>{
        if(indicador !== 0 ){
            dispatch(crudActions.dDelete('clientesData','clientes',indicador))
        }
    }

    const sucursales = () =>{
        if(indicador !==0){            
            dispatch(crudActions.getData('sucursalesData','sucursales',1,12,indicador,indicador))
            navigate('/admin/sucursales/');
        }        
    }

    const cajeros = () =>{
        if(indicador !==0){            
            dispatch(crudActions.getData('cajerosData','cajeros',1,12,indicador,indicador))
            navigate('/admin/cajeros/');
        }        
    }
    const ofertas = () =>{
        if(indicador !==0){            
            dispatch(crudActions.getData('ofertasData','ofertas',1,12,indicador,indicador))
            navigate('/admin/ofertas/');
        }        
    }

    const onTimeChange1 = (id,value) => {      
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].hinicio = value
              dispatch({type:'horarioItems',data:ites}) 
            }                     
        }

    }
    const onTimeChange2 = (id,value) => {      
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].hfin = value
              dispatch({type:'horarioItems',data:ites}) 
            }                     
        }

    }

    const handleHorario = () =>{        
        let iok = {
            items:hdata,
            clienteId: indicador            
        }        
        dispatch(crudActions.putUpdates('horariosData','horarios',iok,1,'unit'))
        dispatch({type:'horarioView',response:false})
    }
    
    const handleChanges = (id,event) =>{        
        let io = event ? event.value: 0            
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].tipo = io
              dispatch({type:'horarioItems',data:ites}) 
            }                     
        }
    }
   

    return(
        <div className="content">
        <div className="main-contenido"> 
            <div className="navigador">
               <Row>
                <Col md="6">
                    <ButtonGroup>                
                        <Button 
                            className={indicador === 0 ? "btn-ts border-top-left": "btn-ts border-top-left"} 
                            onClick={()=> editar(indicador)}>
                            <FontAwesomeIcon icon={faFileExport} className="bts"/>
                        </Button>                                      
                        <Button 
                            className={indicador === 0 ? "btn-tr": "btn-ts"} 
                            onClick={()=> deleteItem()}>
                            <FontAwesomeIcon icon={faTrash} className="bts"/>
                        </Button>  
                        <Button 
                            className={indicador === 0 ? "btn-tr": "btn-ts"} 
                            onClick={()=> sucursales()}>
                            <FontAwesomeIcon icon={faBuilding} className="bts"/>
                        </Button>                     
                        <Button 
                            className={indicador === 0 ? "btn-tr": "btn-ts"} 
                            onClick={()=> toggleModalView()}>
                            <FontAwesomeIcon icon={faFilePdf} className="bts"/>
                        </Button>  
                     
                        <Button 
                            className={indicador === 0 ? "btn-tr": "btn-ts"} 
                            onClick={()=> cajeros()}>
                            <FontAwesomeIcon icon={faBuildingColumns} className="bts"/>
                        </Button>
                        <Button 
                            className={indicador === 0 ? "btn-tr": "btn-ts"} 
                            onClick={()=> ofertas()}>
                            <FontAwesomeIcon icon={faMoneyBill} className="bts"/>
                        </Button> 
                        <Button 
                            className={indicador === 0 ? "btn-tr border-top-right": "btn-ts border-top-right"} 
                            onClick={()=> toggleModalViews()}>
                            <FontAwesomeIcon icon={faCalendar} className="bts"/>
                        </Button>
                                     
                    </ButtonGroup>
                </Col>
                <Col md="6" >
                    <FormSearch
                        xredux= {'clientesData'}
                        payload={'clientes'}
                        items={mCliente}
                        inicial={'nombres'}
                    />
                </Col>
               </Row>
            </div>

            <TableCliente 
                data={data} 
                setIndicador={setIndicador}
                indicador={indicador}
            />
            <Pagination 
            chargeData={chargeData}
            total={total}
            paginas={paginas}
            current={pagina}            
            />
            <Modal isOpen={modalView} toggle={toggleModalView}>
                <Button className="btn-view btn-danger" onClick={()=> toggleModalView()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>  
                <ModalBody>
                  <ClienteView item={item}/>
                </ModalBody>
            </Modal>
            <Modal isOpen={hmodalView} toggle={toggleModalViews}>
                <Button className="btn-view btn-danger" onClick={()=> toggleModalViews()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>  
                <ModalBody>
                    <Row>
                        <Col md={2}>
                            <h5>Horarios</h5>
                        </Col>    
                        <Col md={10} className="text-right">
                            <Button onClick={() => handleHorario() } className="btn-zx btn-success">                    
                                <FontAwesomeIcon icon={faSave} />
                            </Button>
                        </Col>    
                    </Row>
                    <Horario
                    data={hdata}
                    onTimeChange1={onTimeChange1}
                    onTimeChange2={onTimeChange2}
                    handleChanges={handleChanges}
                    />
                </ModalBody>
            </Modal>
        </div>          
    </div>
    )
}

export default ClientesTable