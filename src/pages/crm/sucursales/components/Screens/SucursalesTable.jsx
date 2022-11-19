import React,{ useEffect} from "react";
import { Modal, ModalBody, Row,Col,Button, ButtonGroup, Form } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../../../actions/crud.actions'
import TableSucursal from '../Tables/TableSucursal'
import Pagination from '../../../../../components/Navigations/Pagination'
import FormSucursal from '../Forms/FormSucursal'
import {api} from '../../../../../helpers/api'
import Mapa from '../Forms/SucursalMapa'
import Horario from '../Forms/SucursalHorario'
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faSave, faCopy, faTrash, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";

const SucursalesTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, item, total, pagina, paginas ,modalView, indicador } = useSelector(state => state.sucursal)  
    const nindicador  = useSelector(state => state.cliente.indicador)
    const citem  = useSelector(state => state.cliente.item)
    const { hmodalView, hdata }  = useSelector(state => state.sorario)
    
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('sucursalesData','sucursals',page,num,nindicador,nindicador))
    }
    
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'sucursalIndicador',response:iok})         
      };

    const editar = () =>{
        if(indicador !==0){
            dispatch(crudActions.getItem('sucursalAdd','sucursales',indicador))
            navigate('/admin/sucursales/nuevo');
        }        
    }

    const toggleModalView = (view) => {   
        console.log(view) 
        let est = !modalView                            
        if(view){
            dispatch({type:'sucursalAdd',response:view})                    
        }
        dispatch({type:'sucursalView',response:est})
        
    };  

    const toggleModalViews = (pky) => {            
        let est = !hmodalView 
        dispatch(crudActions.getData('sorariosData','sorarios',1,12,pky,pky))        
        dispatch({type:'sucursalIndicador',response:pky})        
        dispatch({type:'sorarioView',response:est})
        
    };  
    
    const copyItem = () =>{
        if(indicador !== 0){
            dispatch(crudActions.getCopy('sucursalesData','sucursales',indicador))
        }        
    }

    const handleDelete = (pky) =>{        
        dispatch(crudActions.dDelete('sucursalesData','sucursales',pky))        
    }

    const handleMap = () =>{
        
    }
    
    const handleEdit = (item) =>{
        dispatch({type:'sucursalAdd',response:item})
    }

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'sucursalChange',name:name,value:value}) 
    }

   
   
    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(crudActions.putUpdate('sucursalesData','sucursales',item,'unit'))
        }else{       
            let diok = item
            diok.clienteId = nindicador     
            dispatch(crudActions.postAdd('sucursalesData','sucursales',diok,'unit'))
        }
        dispatch({type:'sucursalReset'}) 
    }
    const submitHandles = () =>{        
        dispatch(crudActions.putUpdate('sucursalesData','sucursales',item,'unit'))        
        dispatch({type:'sucursalReset'}) 
    }

    const onTimeChange1 = (id,value) => {      
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].hinicio = value
              dispatch({type:'sorarioItems',data:ites}) 
            }                     
        }

    }
    const onTimeChange2 = (id,value) => {      
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].hfin = value
              dispatch({type:'sorarioItems',data:ites}) 
            }                     
        }

    }

    const handleHorario = () =>{        
        let iok = {
            items:hdata,
            sucursalId: indicador            
        }        
        dispatch(crudActions.putUpdates('sorariosData','sorarios',iok,1,'unit'))
        dispatch({type:'sorarioView',response:false})
    }
    
    const handleChanges = (id,event) =>{        
        let io = event ? event.value: 0            
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].tipo = io
              dispatch({type:'sorarioItems',data:ites}) 
            }                     
        }
    }
    useEffect(() => {        
        return () => {
            dispatch({type:'clienteReset'}) 
            dispatch({type:'sucursalReset'}) 
            dispatch({type:'sorarioReset'}) };
    }, []);

    return(
        <div className="content">
        <div className="main-contenido">             
            <div className="navigador">
               <Row>
                    <Col md="2" className="tinta">Sucursales</Col>
                    <Col md="1"></Col>
                    <Col md="4"><b>Nombre: </b> {citem.nombres} </Col>
                    <Col md="3"><b>Categoría: </b> {citem.categoria.nombre || ""} </Col>
                    <Col md="2"><b>Teléfono: </b> {citem.telefono} </Col>                    
                    
               </Row>
            </div>            
            <div className="navigador">
               <Row>               
                <Col md="12">
                    <FormSucursal 
                    item={item} 
                    handleChange={handleChange} 
                    handleChanges={handleChanges}
                    submitHandle={submitHandle}

                    />
                </Col>
               </Row>
            </div>
            <TableSucursal 
                data={data} 
                handleEdit={handleEdit}
                toggleModalView={toggleModalView}
                toggleModalViews={toggleModalViews}                
                handleDelete={handleDelete}
            />
            <Pagination 
            chargeData={chargeData}
            total={total}
            paginas={paginas}
            current={pagina}            
            />
            <Modal isOpen={modalView} toggle={toggleModalView} className="modalMapa">
                <Button className="btn-view btn-danger" onClick={()=> toggleModalView()}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>  
                <ModalBody>
                <Button onClick={() => submitHandles() } className="btn-zx btn-success">
                    <FontAwesomeIcon icon={faSave} />
                </Button>
                    <Mapa
                    submitHandles={submitHandles}
                    />
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

export default SucursalesTable