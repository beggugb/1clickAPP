/** [payloadAction] */
const initialState = {
    hdata: [],
    items:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    hmodalView:false,
    item:{  
        dia: "",
        hinicio:"00:00",
        hfin:"00:00",
        tipo:"",
        clienteId:0
        
    }
}

export function horario(state = initialState, action){
    switch(action.type){
        case 'horarioItems':
            return{
                ...state,
                hdata: action.data
            }
        case 'horarioView':
            return{
                ...state,
                hmodalView: action.response
            } 
        case 'horariosLista':
            return{
                ...state,
                items: action.response
            }
        case 'horariosData':
            return{
                ...state,
                hdata: action.response                
            }
        case 'horarioChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'horarioAdd':
            return{
                ...state,
                item: action.response
            }
        case 'horarioReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                hmodalView: false,
                hdata:[],
                items:[]
            } 
        case 'horariosReset':
            return{
                ...state,
                hdata: [],                 
                item: initialState.item
            }    
        case 'horarioIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}