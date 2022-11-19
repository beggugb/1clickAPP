import React  from "react";
import { Table } from 'reactstrap'
import TimeField from 'react-simple-timefield';
import Select from "react-select";
import { custom } from '../../../../../helpers/customStyles'
import { defaultVal } from "../../../../../helpers/functions"

const items =[{value:"horario",label:"horario"},{value:"siempre abierto",label:"siempre abierto"}]

const SucursalHorario = ({data,onTimeChange1,onTimeChange2,handleChanges}) =>{    
       
    return(
    <div className="formMap">        
       <Table className="table-simple">            
            <thead>
                <tr>                    
                    <th width='5%'></th>                    
                    <th width='30%'>Día</th>
                    <th width='20%'>H.Apertura</th>
                    <th width='20%'>H.Cierre</th>
                    <th width='25%'>Tipo</th>                                        
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index}>
                    <td>
                        {index+1}
                    </td>                    
                    <td>{item.dia}</td>                    
                    <td>
                        <TimeField
                            value={item.hinicio}                       
                            onChange={(_event, value) => {onTimeChange1(item.id,value)}}                                         
                            colon=":"
                            className="lsTime"
                            showSeconds
                        /> 
                    </td>
                    <td>
                        <TimeField
                            value={item.hfin}                       
                            onChange={(_event, value) => {onTimeChange2(item.id,value)}}                                         
                            colon=":"
                            className="lsTime"
                            showSeconds
                        />                  
                    </td>   
                    <td>
                    <Select
                        defaultValue={items[0]}
                        name="tipo"
                        id="tipo"
                        options={items}      
                        isClearable={false}                                   
                        styles={custom}
                        value={defaultVal(items,item.tipo)}
                        onChange={(e)=>handleChanges(item.id,e)}
                    />
                    </td>             
                </tr>
                ))}
            </tbody>
            : 
            <tbody>                
                <tr>                    
                   <td colSpan={5}>Sin resultados</td>                                        
                </tr>                
            </tbody>
            }           
        </Table>  
    </div>
    )
}
export default SucursalHorario;