import React,{useState} from "react";
import {Col, Row, FormGroup, Input, ButtonGroup, Button} from 'reactstrap'
import { api } from '../../helpers/api'
import {useDispatch} from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const FormImagen = ({item,payload,payloads,order}) =>{
    const dispatch = useDispatch()    
    const [file,setFile] = useState('');
    const [imagePreviewUrl,setImagePreviewUrl] = useState('');    

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("file",file)
        dispatch(crudActions.putFile(
            payload,
            formData,
            item.id
        ))
    }

    const handleChange = (e) =>{
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () =>{
            setFile(file)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }

    return(
    <div className="imagenForm">           
            <Row className="perfilPreview">
                <Col md="12" className="colPreview">
                {imagePreviewUrl ?
                <img alt="preview" className="img-perfil" src={imagePreviewUrl} />
                :
                <img alt="preview" className="img-perfil" src={`${api}/static/images/${payloads}/md/` +order}/>    
                }
                </Col>                
            </Row> 

          

            <Row>
            <Col md="12" className="colPreview">                
                    <FormGroup>
                        <Input
                        type="file"
                        id="file"
                        name="formData"
                        className='input-file'
                        onChange={(e) => handleChange(e)}
                        />                        
                    </FormGroup>
                    <ButtonGroup>
                        <Button
                        className={
                            file
                            ? "btn-md btn-info"
                            : "btn-md btn-info disabled"
                        }
                        type="submit"
                        onClick={(e)=> handleSubmit(e)}>
                        <FontAwesomeIcon icon={faUpload}/>    
                        </Button>
                    </ButtonGroup>
            </Col>      
            </Row>           
        </div>
    )
}

export default FormImagen