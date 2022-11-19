import React,{useState} from "react";
import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import { customs } from '../../helpers/customStyles'
import { defaultVal } from '../../helpers/functions'
import Select from 'react-select'

const SearchCompuesto = ({xredux,payload,items}) =>{
    const dispatch = useDispatch()
    const [prop, setProp] = useState('observaciones');
    const [value, setValue] = useState("");  

    const submitSearch = event =>{
        event.preventDefault()
        let params = {
            value,
            prop
        }
        dispatch(crudActions.postSearch(xredux,payload,params))        
    }      

    const handleDelete = () =>{        
        let params = {
            value:"",
            prop
        }
        dispatch(crudActions.postSearch(xredux,payload,params)) 
        setValue("")
    }
    const changeSelect = (pky) => {    
        console.log(pky)    
        const { value } = pky
        setProp(value)
      };
return(
        <Form onSubmit={ submitSearch}>
            <Row>
                <Col md="2">
                <Select                 
                    styles={customs}                                              
                    defaultValue={items[0]}
                    name="prop"    
                    id="prop"                    
                    options={items}      
                    isClearable={false}                          
                    value={defaultVal(items,prop)}    
                    onChange={ (e) => changeSelect(e)} 
                />   
                </Col>    
                <Col md="8" className="text-center">
                    <Input
                    type="text"                  
                    name="value"
                    className="input-simple"
                    id="value"
                    value={ value || ''}
                    onChange={(e) => { setValue(e.target.value)}}/>
                        {
                            value ?
                            <Button className="volatil"
                            onClick={(e)=>{handleDelete()}}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                            :null
                        }
                    </Col>
                    <Col md="2">
                        <Button className="btn-search border-circle">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button> 
                    </Col>
                </Row>
        </Form>        
)}

export default SearchCompuesto