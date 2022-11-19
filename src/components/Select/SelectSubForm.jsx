import React from 'react'
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import {Col, Label} from 'reactstrap'
import { defaultVal, defaultVals } from "../../helpers/functions"

const SelectSubForm = ({label,items,xreduxItem,keyId,itemId,parentId,yredux,ypayload}) =>{     
    const dispatch = useDispatch()          
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:xreduxItem,name:keyId,value:io})    
        dispatch(crudActions.getLista(yredux,ypayload,io))    
    }

    return(        
        <>
            <Label for="nombre">{label} </Label>         
            <Select
                defaultValue={items[0]}
                name={keyId}
                id={keyId}
                options={defaultVals(items,parentId)}      
                isClearable={false}                                   
                styles={custom}
                value={defaultVal(items,itemId)}
                onChange={(e)=>handleChange(e)}
            />
        </>        
    )
}

export default SelectSubForm