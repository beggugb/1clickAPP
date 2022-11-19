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
        titulo:'',
        vinicio:'',
        vfin:'',
        filename:'default.jpg',
        detalle:'',
        vigencia:'',
        likes:0,
        views:0,
        clienteId:0
    }
}

export function oferta(state = initialState, action){
    switch(action.type){
        case 'ofertasData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'ofertaChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'ofertaAdd':
            return{
                ...state,
                item: action.response
            }
        case 'ofertaReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false,
                data:[],
                items:[]
            } 
        case 'ofertaIndicador':
            return{
                ...state,
                indicador: action.response
            } 
        case 'ofertaView':
            return{
                ...state,
                modalView: action.response
            }  
        case 'ofertaLocation':
            return{
                ...state,
                item:
                {...state.item,
                    latitude: action.latitude,
                    longitude: action.longitude
                }
            }
        case 'ofertaResetItem':
            return{
                ...state,
                item: initialState.item
            }    
        default:
            return state;
    }

}