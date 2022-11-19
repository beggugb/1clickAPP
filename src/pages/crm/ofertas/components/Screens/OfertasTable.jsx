import React,{ useState, useEffect} from "react";
import { Modal, ModalBody, Row,Col,Button, ButtonGroup, Form } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import OfertaImagen from '../../../../../components/Imagen/FormImagen'
import { crudActions } from '../../../../../actions/crud.actions'
import TableOferta from '../Tables/TableOferta'
import Pagination from '../../../../../components/Navigations/Pagination'
import FormOferta from '../Forms/FormOferta'
import {api} from '../../../../../helpers/api'
import Mapa from '../Forms/OfertaMapa'

import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFileExport, faSave, faCopy, faTrash, faFilePdf, faTimes } from "@fortawesome/free-solid-svg-icons";

const OfertasTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, item, total, pagina, paginas ,modalView, indicador } = useSelector(state => state.oferta)  
    const nindicador  = useSelector(state => state.cliente.indicador)
    const citem  = useSelector(state => state.cliente.item)
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date()); 




    
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('ofertasData','ofertas',page,num,nindicador,nindicador))
    }
    
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'ofertaIndicador',response:iok})         
      };

    const editar = () =>{
        if(indicador !==0){
            dispatch(crudActions.getItem('ofertaAdd','ofertas',indicador))
            navigate('/admin/ofertas/nuevo');
        }        
    }

    const toggleModalView = (view) => {   
        console.log(view) 
        let est = !modalView                            
        if(view){
            dispatch({type:'ofertaAdd',response:view})                    
        }
        dispatch({type:'ofertaView',response:est})
        
    };  

    const toggleModalViews = (pky) => {            
        /*let est = !hmodalView 
        dispatch(crudActions.getData('sorariosData','sorarios',1,12,pky,pky))        
        dispatch({type:'ofertaIndicador',response:pky})        
        dispatch({type:'sorarioView',response:est})*/
        
    };  
    
    const copyItem = () =>{
        if(indicador !== 0){
            dispatch(crudActions.getCopy('ofertasData','ofertas',indicador))
        }        
    }

    const handleDelete = (pky) =>{        
        dispatch(crudActions.dDelete('ofertasData','ofertas',pky))        
    }

    const handleMap = () =>{
        
    }
    
    const handleEdit = (item) =>{
        dispatch({type:'ofertaAdd',response:item})
    }

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'ofertaChange',name:name,value:value}) 
    }

   
   
    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(crudActions.putUpdate('ofertasData','ofertas',item,'unit'))
        }else{       
            let diok = item
            diok.clienteId = nindicador     
            diok.vinicio = value1
            diok.vfin = value2
            dispatch(crudActions.postAdd('ofertasData','ofertas',diok,'unit'))
        }
        dispatch({type:'ofertaReset'}) 
    }
    const submitHandles = () =>{        
        dispatch(crudActions.putUpdate('ofertasData','ofertas',item,'unit'))        
        dispatch({type:'ofertaReset'}) 
    }

   

   
    const handleChanges = (id,event) =>{        
        /*let io = event ? event.value: 0            
        let ites = [...hdata]
        for (let index = 0; index < ites.length; index++) {            
            if(ites[index].id === id )
            {
              ites[index].tipo = io
              dispatch({type:'sorarioItems',data:ites}) 
            }                     
        }*/
    }
    useEffect(() => {        
        return () => {
            dispatch({type:'clienteReset'}) 
            dispatch({type:'ofertaReset'}) 
            dispatch({type:'sorarioReset'}) };
    }, []);

    return(
        <div className="content">
        <div className="main-contenido">             
            <div className="navigador">
               <Row>
                    <Col md="2" className="tinta">Ofertas</Col>
                    <Col md="1"></Col>
                    <Col md="4"><b>Nombre: </b> {citem.nombres} </Col>
                    <Col md="3"><b>Categoría: </b> {citem.categoria.nombre || ""} </Col>
                    <Col md="2"><b>Teléfono: </b> {citem.telefono} </Col>                    
                    
               </Row>
            </div>            
            <div className="navigador">
               <Row>               
                <Col md="12">
                    <FormOferta 
                    item={item} 
                    handleChange={handleChange} 
                    handleChanges={handleChanges}
                    submitHandle={submitHandle}
                    onChange1={onChange1}
                    onChange2={onChange2}
                    value1={value1}
                    value2={value2}
                    />
                </Col>
               </Row>
            </div>
            <TableOferta 
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
                 <OfertaImagen 
                    item={item}
                    payload={'oferta'}
                    payloads={'ofertas'}
                    order={item.filename}
                  /> 
                </ModalBody>
            </Modal>

        </div>          
    </div>
    )
}

export default OfertasTable