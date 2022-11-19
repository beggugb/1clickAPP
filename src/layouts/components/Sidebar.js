import React,{useEffect,useState} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink as ReactstrapNavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import {getsubModulos} from '../../routes'

function Sidebar() {
  const dispatch = useDispatch()
  const [lista, setlista] = useState();
  const { menuId, labelMenu, subMenuId, labelSubMenu } = useSelector(state =>state.usuario)
  
  const enviado = (pky,label) =>{
    dispatch({type:'asignSubMenu',subMenuId:pky,labelSubMenu:label})
  }

  const getSubs = () =>{
    setlista(getsubModulos(menuId))  
  }
  useEffect(() => {
    getSubs()
  }, [menuId]);
  

return (        
    <div className="sidebar">
      <div className="sidebar-wrapper" >
               {lista &&
          <Nav className="nav-sidebar">
                  {lista.map((it,index)=>(
                    <NavItem 
                      key={index}                       
                      className={subMenuId === it.key ? "nav-itemo" : "nav-item" }
                      >  
                      <Link                
                        to={it.layout + it.path}
                        onClick={(e)=>{enviado(it.key,it.name)}}
                        className={subMenuId === it.key ? "nav-link active" : "nav-link" }>               
                        <div className="casco">
                        <FontAwesomeIcon icon={it.icon} className="casl"/> 
                          <span className="casc">{it.name}</span> 
                        <FontAwesomeIcon icon={it.icons} className="casr"/>                    
                        </div>                                                                               
                      </Link>
                      {it.items &&
                      <>
                      {subMenuId === it.key ?                        
                      <ul className="subLink">
                      {it.items.map((itt,ind)=>(
                        <li key={ind}> 
                        <Link to={itt.layout + itt.path}>               
                        {itt.name} <FontAwesomeIcon icon={itt.icon} className="mnz"/>                                                      
                        </Link>
                      </li > 
                      ))}
                      </ul>
                      :
                      null}
                     </>} 
                    </NavItem>
                  ))}                  
                </Nav>
               }
               
              </div>
            </div>                  
      );

}

export default Sidebar;