import React from "react";
import { Table, Input  } from "reactstrap";

const TableUsuario = ({data,setIndicador,indicador}) =>{
    return(   
        <div className="tableContenedor">
        <Table className="table-simple">            
            <thead>
                <tr>                    
                    <th width='5%'></th>                    
                    <th width='25%'>Apellidos</th>
                    <th width='25%'>Nombres</th>
                    <th width='25%'>Username</th>
                    <th width='20%'>Tipo</th>                                      
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index}>                                       
                    <td>
                    <Input type="checkbox" 
                          onChange={() => { setIndicador(item.id) }} 
                          checked={ item.id === indicador ? true : false}
                          />
                    </td>
                    <td>{item.apellidos}</td>
                    <td>{item.nombres}</td>
                    <td>{item.username}</td>
                    <td>{item.rol}</td>                    
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

export default TableUsuario;