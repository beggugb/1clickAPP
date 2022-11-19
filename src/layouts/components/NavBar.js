import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Row, Col, Button, Nav, Modal, ModalBody, NavItem } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props) {
    const dispatch = useDispatch()    
    const { menuId, labelMenu} = useSelector(state =>state.usuario)
    const enviado = (pky,label) =>{
   
      dispatch({type:'asignMenu',menuId:pky,labelMenu:label})
    }
    const { modulos } = props;
    return (  
        <Nav className="ul-link">             
        {modulos.map((prop) => (                  
          <NavItem 
            key={prop.key}
            onClick={(e)=>{enviado(prop.key,prop.name)}}
            >  
            <Link                
              to={prop.layout + prop.path}
              className={menuId === prop.key ? "nav-link active" : "nav-link" }>               
              <p> <FontAwesomeIcon icon={prop.icon} className="mns"/> {prop.name}</p>                                                      
            </Link>
          </NavItem>))}
      </Nav>
    )

}

export default NavBar;