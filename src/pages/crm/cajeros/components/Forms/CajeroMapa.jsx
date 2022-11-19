import React,{useRef, useEffect} from "react";
import {useDispatch } from 'react-redux'
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSave } from "@fortawesome/free-solid-svg-icons";
import { useSelector }  from 'react-redux'
import { Button } from 'reactstrap'

const Mapas = () =>{
    const dispatch = useDispatch()
    const { item } = useSelector(state => state.cajero) 
    const mapRef = useRef()

    const LocationPin = () =>(
      <FontAwesomeIcon icon={faMapMarkerAlt} className="pini"/>
    )
    const mapClicked = (event) =>{          
      dispatch({type:'cajeroLocation',latitude:event.lat,longitude:event.lng})     
    }    

    useEffect(() => {      
      return () => {
        dispatch({type:'cajeroResetItem'})
      };
    }, []);
    return(
        <div className="formMap">        
        <div style={{ height: '350px', width: '100%', padding: '8px' ,marginTop: '8px' }}>  
        <h6>Ubicación mapa 
           
        </h6>
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