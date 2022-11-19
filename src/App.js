import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout'
import InicioLayout from './layouts/InicioLayout';
import NoMatch from './layouts/NoMatch'
import AuthProvider from './auth/AuthProvider';
import Protected from './auth/Protected'

import "./assets/css/erp.css";
import './assets/css/core/main.css';
import './assets/css/daygrid/main.css';
import './assets/css/timegrid/main.css'
function App() {  
  return (
    <AuthProvider>
      <Routes>        
        <Route index element={<LoginLayout />} /> 
        <Route path="/" element={<LoginLayout/> } />          
        <Route 
          path="admin/*" 
          element={
          <Protected>
            <InicioLayout />
          </Protected>          
        }        
        />    
        <Route path="*" element={<NoMatch />} />                        
      </Routes>
    </AuthProvider>
  );
}

export default App;
