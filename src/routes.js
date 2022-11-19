import { faDashboard, faAngleDown, faBars, faAngleRight, faHeadset, faUsers } from "@fortawesome/free-solid-svg-icons";
const subModulos = [
    {
        key:2,
        path:"/clientes",
        name: "Clientes",        
        layout: "/admin",
        icon: faUsers,
        icons: faAngleDown,
        id: 2,
        items:[
            { ki: 1, 
              path: "/clientes/lista", 
              name:"Lista",
              layout: "/admin",
              icon: faAngleRight
            },
            { ki: 2, 
                path: "/clientes/nuevo", 
                name:"Nuevo",
                layout: "/admin",
                icon: faAngleRight
            },
        ]
    },
    {
        key:3,
        path:"/categorias",
        name: "Categorias",        
        layout: "/admin",
        icon: faUsers,
        icons: faAngleRight ,
        id: 2,       
    },
    
   
]

export const getsubModulos = (valor) =>{
   return subModulos.filter(item => 
        item.id === valor
    )   
}

export const modulos = [
  
    {
        key:2,
        path:"/crm",
        name: "Clientes",        
        layout: "/admin",
        icon: faHeadset
    }    
]