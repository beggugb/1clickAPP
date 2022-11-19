/** [payloadAction] */
const initialState = {
    data: [],
    items:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    modalView:false,
    item:{                  
        direccion:"",   
        nombre:"",     
        icon:"",
        latitude: -17.7864665,
        longitude: -63.1687135,
        clienteId:0
    }
}

export function cajero(state = initialState, action){
    switch(action.type){
        case 'cajerosData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'cajeroChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'cajeroAdd':
            return{
                ...state,
                item: action.response
            }
        case 'cajeroReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false,
                data:[],
                items:[]
            } 
        case 'cajeroIndicador':
            return{
                ...state,
                indicador: action.response
            } 
        case 'cajeroView':
            return{
                ...state,
                modalView: action.response
            }  
        case 'cajeroLocation':
            return{
                ...state,
                item:
                {...state.item,
                    latitude: action.latitude,
                    longitude: action.longitude
                }
            }
        case 'cajeroResetItem':
            return{
                ...state,
                item: initialState.item
            }    
        default:
            return state;
    }

}