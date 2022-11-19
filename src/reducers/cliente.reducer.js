/** [payloadAction] */
const initialState = {
    data: [],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    modalView:false,
    item:{  
        nombres: "",        
        direccion: "",        
        nit: "",        
        telefono: "",
        celular:"",
        web:"",
        filename:"default.jpg",
        descripcion:"",
        habilitado:true,
        email:"",
        snum:0,
        valor:0,
        portada:"",
        facebook:"",
        instagram:"",
        tiktok:"",
        latitude: -17.7864665,
        longitude: -63.1687135,
        tipo:"",
        icon:"",
        banner:"",
        slider:"",
        video:"",
        hinicio:"",
        hfin:"",
        likes:0,
        views:0,
        tags:"",
        nivel:1,
        username:"",
        password:"",
        categoriaId:1,
        categoria:{
            nombre:""            
        }       
        
    }
}

export function cliente(state = initialState, action){
    switch(action.type){
        case 'clientesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'clienteChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'clienteAdd':
            return{
                ...state,
                item: action.response
            }
        case 'clienteReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false
            } 
        case 'clienteIndicador':
            return{
                ...state,
                indicador: action.response,
                item: action.item
            } 
        case 'clienteView':
            return{
                ...state,
                modalView: action.response
            }  
        case 'clienteLocation':
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