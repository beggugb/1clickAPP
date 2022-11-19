import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import {Col, Label} from 'reactstrap'
import { defaultVal, defaultVals } from "../../helpers/functions"

const SelectCompuestoForm = ({label,items,xredux,xreduxItem,payload,keyId,itemId,parentId,yredux,ypayload}) =>{     
    const dispatch = useDispatch()      

    const getCharge = () =>{        
         dispatch(crudActions.getItems(xredux,payload))   
    }
    
    useEffect(() => {
        getCharge()
        return () => {
           
        };
    }, []);
    
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

export default SelectCompuestoForm