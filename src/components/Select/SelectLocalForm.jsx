import React from 'react'
import { useDispatch } from 'react-redux'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import {Col, Label, FormGroup} from 'reactstrap'
import { defaultVal } from "../../helpers/functions"

const SelectLocalForm = ({label,items,xreduxItem,keyId,itemId}) =>{     
    const dispatch = useDispatch()     
    
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:xreduxItem,name:keyId,value:io})        
    }

    return(        
        <>
            <FormGroup>
            <Label for="nombre">{label} </Label>         
            <Select
                defaultValue={items[0]}
                name={keyId}
                id={keyId}
                options={items}      
                isClearable={false}                                   
                styles={custom}
                value={defaultVal(items,itemId)}
                onChange={(e)=>handleChange(e)}
            />
            </FormGroup>
        </>                
    )
}

export default SelectLocalForm