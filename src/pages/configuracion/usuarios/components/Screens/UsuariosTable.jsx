import React,{ useEffect} from "react";
import { Row, Col,Button, ButtonGroup } from "reactstrap"
import { useSelector, useDispatch} from 'react-redux'
import { crudActions } from '../../../../../actions/crud.actions'
import Pagination from '../../../../../components/Navigations/Pagination'
import TableUsuario from "../Tables/TableUsuario";
import FormSearch from "../../../../../components/Forms/SearchParametros"
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faCopy, faTrash, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { mUsuario  } from '../../../../../data/dataLoad'

const UsuariosTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const { data, total, pagina, paginas,indicador, modalView } = useSelector(state => state.usuario)    

    const chargeData = (page,num) =>{
        dispatch(crudActions.getData('usuariosData','usuarios',page,num,'nombres','ASC'))
    }  
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky  
        dispatch({type:'usuarioIndicador',response:iok}) 
      };
    useEffect(() => {
        chargeData(1,12)
        return () => {
            //*cleanup
        };
    }, []);
     
    const editar = () =>{
        if(indicador !==0){
            dispatch(crudActions.getItem('usuarioAdd','usuarios',indicador))
            navigate('/admin/usuarios/nuevo');
        }        
    }

    const toggleModalView = (view) => {    
        let est = !modalView            
        if(indicador !== 0){
            dispatch({type:'usuarioView',response:est})
            dispatch(crudActions.getItem('usuarioAdd','usuarios',indicador))
        }                 
    };  
    
    const copyItem = () =>{
        if(indicador !== 0){
            dispatch(crudActions.getCopy('usuariosData','usuarios',indicador))
        }        
    }

    const deleteItem = () =>{
        if(indicador !== 0 ){
            dispatch(crudActions.dDelete('usuariosData','usuarios',indicador))
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
                                className={indicador === 0 ? "btn-ts": "btn-ts"} 
                                onClick={()=> copyItem()}>
                                <FontAwesomeIcon icon={faCopy} className="bts"/>
                            </Button>                
                            <Button 
                                className={indicador === 0 ? "btn-ts": "btn-ts"} 
                                onClick={()=> deleteItem()}>
                                <FontAwesomeIcon icon={faTrash} className="bts"/>
                            </Button>                       
                            <Button 
                                className={indicador === 0 ? "btn-ts border-top-right": "btn-ts border-top-right"} 
                                onClick={()=> toggleModalView()}>
                                <FontAwesomeIcon icon={faFilePdf} className="bts"/>
                            </Button>                
                        </ButtonGroup>
                    </Col>
                    <Col md="6" >
                      <FormSearch
                        xredux={'usuariosData'}
                        payload={'usuarios'}
                        items={mUsuario}
                      />  
                    </Col>
                </Row>                
              </div>
              <TableUsuario
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
            </div>
        </div>
    )
}

export default UsuariosTable