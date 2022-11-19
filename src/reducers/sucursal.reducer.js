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
        nombre: "",
        estado: "",
        direccion:"",
        hinicio:"00:00",
        hfin:"00:00",
        hestado: false,
        telefono:"",
        celular:"",
        tipo:"",
        icon:"",
        latitude: -17.7864665,
        longitude: -63.1687135,
        sucursalId:0
    }
}

export function sucursal(state = initialState, action){
    switch(action.type){
        case 'sucursalesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'sucursalChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'sucursalAdd':
            return{
                ...state,
                item: action.response
            }
        case 'sucursalReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false,
                data:[],
                items:[]
            } 
        case 'sucursalIndicador':
            return{
                ...state,
                indicador: action.response
            } 
        case 'sucursalView':
            return{
                ...state,
                modalView: action.response
            }  
        case 'sucursalLocation':
            return{
                ...state,
                item:
                {...state.item,
                    latitude: action.latitude,
                    longitude: action.longitude
                }
            }
        default:
            return state;
    }

}