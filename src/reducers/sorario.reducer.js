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
        sucursalId:0        
    }
}

export function sorario(state = initialState, action){
    switch(action.type){        
        case 'sorarioItems':
            return{
                ...state,
                hdata: action.data
            }
        case 'sorarioView':
            return{
                ...state,
                hmodalView: action.response
            } 
        case 'sorariosLista':
            return{
                ...state,
                items: action.response
            }
        case 'sorariosData':
            return{
                ...state,
                hdata: action.response                
            }
        case 'sorarioChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'sorarioAdd':
            return{
                ...state,
                item: action.response
            }
        case 'sorarioReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                hmodalView: false,
                hdata:[],
                items:[]
            } 
        case 'sorariosReset':
            return{
                ...state,
                hdata: [],                 
                item: initialState.item
            }    
        case 'sorarioIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}