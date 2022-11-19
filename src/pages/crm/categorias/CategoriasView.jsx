import React,{ useEffect} from "react";
import { Row,Col } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import Pagination from '../../../components/Navigations/Pagination'
import TableCategoria from "../../../components/Tables/TableSimple";
import FormSearch from "../../../components/Forms/FormSearch";
import FormCategoria from '../../../components/Forms/FormSimple'

const CategoriasView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.categoria) 
    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('categoriasData','categorias',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'categoriasReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{        
        dispatch(crudActions.dDelete('categoriasData','categorias',pky))        
    }   

    const handleEdit = (ite) =>{                
        dispatch({type:'categoriaAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'categoriaChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(crudActions.putUpdate('categoriasData','categorias',item,'unit'))
        }else{            
            dispatch(crudActions.postAdd('categoriasData','categorias',item,'unit'))
        }
        dispatch({type:'categoriaReset'}) 
    }
 return(   
    <div className="content">
        <div className="main-contenido">
        <Row >
            <Col md="6">
                <h5 className="etiqueta">Categorías</h5>
            </Col>
            <Col md="2">
            <h5 className="etiquetas">total items  { total }</h5>
            </Col>                                    
            <Col md="4">
                <FormSearch
                    xredux={'categoriasData'}
                    payload={'categorias'}
                /> 
            </Col>
        </Row> 
            <div className="navigador">
                <Row>
                    <Col md="12">
                       <FormCategoria
                        handleChange={handleChange}                        
                        item={item}
                        submitHandle={submitHandle}
                       />
                    </Col>                    
                </Row>
            </div>
            <TableCategoria
               data={data}                
               handleDelete={handleDelete}
               handleEdit={handleEdit}
              />  
              <Pagination 
                chargeData={chargeData}
                total={total}
                paginas={paginas}
                current={pagina}            
              />
           
        </div>
    </div>            
    )
}

export default CategoriasView
