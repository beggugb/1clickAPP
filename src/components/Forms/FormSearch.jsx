import React,{useState} from "react";
import { Row, Col, Form, Input, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

const FormSearch = ({xredux,payload}) =>{
    const dispatch = useDispatch()
    const [prop, setProp] = useState('nombre');
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
return(
        <Form onSubmit={ submitSearch}>
                <Row>
                    <Col md="10">
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

export default FormSearch