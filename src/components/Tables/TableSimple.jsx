import React from "react";
import { Table, Button  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


const TableSimple = ({data,handleDelete,handleEdit}) =>{    
    return(   
        <div className="tableContenedor">
        <Table className="table-simple">            
            <thead>
                <tr>                    
                    <th width='10%'>Código</th>                    
                    <th width='60%'>Nombre</th>
                    <th width='20%'>Icono</th>
                    <th width='9%'></th>                    
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index}>                      
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.icon}</td>                                                        
                    <td>
                        <Button onClick={() => handleDelete(item.id)} className="btn-ss btn-danger">
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Button onClick={() => handleEdit(item)} className="btn-ss btn-warning">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
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

export default TableSimple;