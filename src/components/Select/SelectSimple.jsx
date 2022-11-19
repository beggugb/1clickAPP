import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import {Col, Label} from 'reactstrap'
import { defaultVal } from "../../helpers/functions"

const SelectSimple = ({label,items,xredux,xreduxItem,payload,keyId,itemId}) =>{     
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

export default SelectSimple