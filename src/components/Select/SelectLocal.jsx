import React from 'react'
import { useDispatch } from 'react-redux'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import {Col, Label} from 'reactstrap'
import { defaultVal } from "../../helpers/functions"

const SelectLocal = ({label,item,items,xreduxItem,keyId,itemId}) =>{     
    const dispatch = useDispatch()     
    
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:xreduxItem,name:keyId,value:io})        
    }

    return(
        <>
        <Col md="1">
            <Label for="nombre" className="label-sub" >{label} </Label> 
        </Col>
        <Col md="2">
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
        </Col>
        </>        
    )
}

export default SelectLocal