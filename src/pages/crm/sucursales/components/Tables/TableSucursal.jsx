import React from "react";
import { Table, Input, Button  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";


const TableSucursal = ({data,handleEdit,toggleModalView,toggleModalViews,handleHorario, handleDelete}) =>{
    return(   
        <div className="tableContenedor">
        <Table className="table-simple">            
            <thead>
                <tr>                    
                    <th width='5%'></th>                    
                    <th width='30%'>Nombres</th>
                    <th width='30%'>Dirección</th>
                    <th width='10%'>Teléfono</th>
                    <th width='10%'>Celular</th>                    
                    <th width='15%'></th>
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index}>
                    <td>
                        {index+1}
                    </td>                    
                    <td>{item.nombre}</td>                    
                    <td>{item.direccion}</td>
                    <td>{item.telefono}</td>                                                          
                    <td>{item.celular}</td>
                    <td>
                        <Button onClick={() => handleEdit(item)} className="btn-zx btn-success">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button onClick={() => toggleModalView(item)} className="btn-zx btn-warning">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </Button>                        
                        <Button onClick={() => toggleModalViews(item.id)} className="btn-zx btn-info">
                            <FontAwesomeIcon icon={faCalendar} />
                        </Button>
                        <Button onClick={() => handleDelete(item.id)} className="btn-zx btn-danger">
                            <FontAwesomeIcon icon={faTrash} />
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

export default TableSucursal;