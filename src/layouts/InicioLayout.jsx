import React from "react";
import { Outlet, Routes, Route  } from 'react-router-dom'
import { modulos } from '../routes'
import Sidebar from './components/Sidebar'
import NavBar from './components/NavBar'
import { ScaleLoader }  from 'react-spinners'
import {  useSelector } from 'react-redux'
import NoMatch from './NoMatch'
import Clientes from '../pages/crm/clientes/ClientesView'
import Crm from '../pages/crm/InicioView'
import Categorias from '../pages/crm/categorias/CategoriasView'
import Configuraciones from '../pages/configuracion/InicioView'
import Usuario from '../pages/configuracion/usuarios/UsuariosView'
import Sucursales from '../pages/crm/sucursales/SucursalesView'
import Cajeros from '../pages/crm/cajeros/CajerosView'
import Ofertas from '../pages/crm/ofertas/OfertasView'
import { AuthContext } from '../auth/auth-context'
import { Button } from "reactstrap";

function InicioLayout(){   
    const { loading } = useSelector(state=>state.usuario)
    const { onLogout } = React.useContext(AuthContext) 
       
    return(
        <div className="wrapper">
           <div className="main-panel"> 
              <div className="nav-unity">
                <div className="sub-unity">
                  <div className="left-unity">
                    <h6>1 CLICK 2.0</h6>
                  </div>                  
                  <div className="center-unity">
                  <ScaleLoader className="loader" color="#1fa2f2" loading={loading} size={30} />
                  </div>
                  <div className="right-unity text-right">
                    <Button 
                      className="btn-zx btn-danger"
                      onClick={() => onLogout()}>
                      Logouth
                    </Button>
                  </div>
                </div>   
                <NavBar  modulos={modulos}/>                                         
              </div> 
                <Sidebar/>                        
                <Outlet/>      
                <Routes>
                  <Route path="inicio" element={<Clientes />}/> 
                  <Route path="crm" element={<Crm />}/>
                  <Route path="clientes/*" element={<Clientes />}/>                  
                  <Route path="categorias" element={<Categorias />}/>
                  <Route path="configuraciones" element={<Configuraciones />}/>
                  <Route path="sucursales" element={<Sucursales />}/>
                  <Route path="cajeros" element={<Cajeros />}/>
                  <Route path="ofertas" element={<Ofertas />}/>
                  <Route path="usuarios/*" element={<Usuario />}/>                  
                  <Route path="*" element={<NoMatch />} />   
                </Routes>                        
           </div>
           
        </div>  
    )
}
export default InicioLayout;