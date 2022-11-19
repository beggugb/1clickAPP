import {combineReducers} from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr';
import { usuario } from './usuario.reducer'
import { cliente } from './cliente.reducer'
import { categoria } from './categoria.reducer'
import { sucursal } from './sucursal.reducer'
import { horario } from './horario.reducer'
import { sorario } from './sorario.reducer'
import { cajero } from './cajero.reducer'
import { oferta } from './oferta.reducer'

const rootReducer = combineReducers({
    usuario,
    cliente,    
    categoria,    
    horario,
    sorario,
    sucursal,  
    cajero,  
    oferta,
    toastr: toastrReducer
})

export default rootReducer;