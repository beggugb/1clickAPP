import React,{useRef} from "react";
import {useDispatch } from 'react-redux'
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector }  from 'react-redux'
const Mapas = () =>{
    const dispatch = useDispatch()
    const { item } = useSelector(state => state.cliente) 
    const mapRef = useRef()

    const LocationPin = () =>(
      <FontAwesomeIcon icon={faMapMarkerAlt} className="pini"/>
    )
    const mapClicked = (event) =>{          
      dispatch({type:'clienteLocation',latitude:event.lat,longitude:event.lng})     
    }    
    return(
        <div className="formMap">        
        <div style={{ height: '350px', width: '100%', padding: '8px' ,marginTop: '8px' }}>          
     { item.latitude  && item.longitude ?       
              <GoogleMapReact
              ref={mapRef} 
              bootstrapURLKeys={{ 
                  key: 'AIzaSyAF83DBU51q3idSspsd7f4DtTk7vNwHpR8',
                  libraries:['places', 'geometry', 'drawing', 'visualization'] 
                }}
              defaultCenter={{        
                lat: parseFloat(item.latitude),
                lng: parseFloat(item.longitude)
                }}
              defaultZoom={14}
              onClick={(e) => mapClicked(e)}
              
              >
                <LocationPin           
                lat={parseFloat(item.latitude)}
                lng={parseFloat(item.longitude)}
                text={item.direccion}
                />
          
              </GoogleMapReact>
            : null }       
    </div>
    </div>
    )
}
export default Mapas;