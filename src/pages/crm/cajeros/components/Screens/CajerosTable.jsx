import React,{ useEffect} from "react";
import { Modal, ModalBody, Row,Col,Button, ButtonGroup, Form } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../../../actions/crud.actions'
import TableCajero from '../Tables/TableCajero'
import Pagination from '../../../../../components/Navigations/Pagination'
import FormCajero from '../Forms/FormCajero'
import {api} from '../../../../../helpers/api'
import Mapa from '../Forms/CajeroMapa'

import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faSave, faCopy, faTrash, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";

const CajerosTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, item, total, pagina, paginas ,modalView, indicador } = useSelector(state => state.cajero)  
    const nindicador  = useSelector(state => state.cliente.indicador)
    const citem  = useSelector(state => state.cliente.item)
    const { hmodalView, hdata }  = useSelector(state => state.sorario)
    
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('cajerosData','cajeros',page,num,nindicador,nindicador))
    }
    
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'cajeroIndicador',response:iok})         
      };

    const editar = () =>{
        if(indicador !==0){
            dispatch(crudActions.getItem('cajeroAdd','cajeros',indicador))
            navigate('/admin/cajeros/nuevo');
        }        
    }

    const toggleModalView = (view) => {   
        console.log(view) 
        let est = !modalView                            
        if(view){
            dispatch({type:'cajeroAdd',response:view})                    
        }
        dispatch({type:'cajeroView',response:est})
        
    };  

    const toggleModalViews = (pky) => {            
        let est = !hmodalView 
        dispatch(crudActions.getData('sorariosData','sorarios',1,12,pky,pky))        
        dispatch({type:'cajeroIndicador',response:pky})        
        dispatch({type:'sorarioView',response:est})
        
    };  
    
    const copyItem = () =>{
        if(indicador !== 0){
            dispatch(crudActions.getCopy('cajerosData','cajeros',indicador))
        }        
    }

    const handleDelete = (pky) =>{        
        dispatch(crudActions.dDelete('cajerosData','cajeros',pky))        
    }

    const handleMap = () =>{
        
    }
    
    const handleEdit = (item) =>{
        dispatch({type:'cajeroAdd',response:item})
    }

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'cajeroChange',name:name,value:value}) 
    }

   
   
    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(crudActions.putUpdate('cajerosData','cajeros',item,'unit'))
        }else{       
            let diok = item
            diok.clienteId = nindicador     
            dispatch(crudActions.postAdd('cajerosData','cajeros',diok,'unit'))
        }
        dispatch({type:'cajeroReset'}) 
    }
    const submitHandles = () =>{        
        dispatch(crudActions.putUpdate('cajerosData','cajeros',item,'unit'))        
        dispatch({type:'cajeroReset'}) 
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
            dispatch({type:'cajeroReset'}) 
            dispatch({type:'sorarioReset'}) };
    }, []);

    return(
        <div className="content">
        <div className="main-contenido">             
            <div className="navigador">
               <Row>
                    <Col md="2" className="tinta">Cajeros</Col>
                    <Col md="1"></Col>
                    <Col md="4"><b>Nombre: </b> {citem.nombres} </Col>
                    <Col md="3"><b>Categoría: </b> {citem.categoria.nombre || ""} </Col>
                    <Col md="2"><b>Teléfono: </b> {citem.telefono} </Col>                    
                    
               </Row>
            </div>            
            <div className="navigador">
               <Row>               
                <Col md="12">
                    <FormCajero 
                    item={item} 
                    handleChange={handleChange} 
                    handleChanges={handleChanges}
                    submitHandle={submitHandle}

                    />
                </Col>
               </Row>
            </div>
            <TableCajero 
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
            <Modal isOpen={modalView} toggle={toggleModalView}>
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

        </div>          
    </div>
    )
}

export default CajerosTable