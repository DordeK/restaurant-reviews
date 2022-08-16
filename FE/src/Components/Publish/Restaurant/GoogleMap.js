import React, {useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import Loader from 'Components/lib/Loader'
import RoomIcon from '@mui/icons-material/Room';

const AnyReactComponent = () => <div><RoomIcon style={{color:'red', fontSize:'50px'}} /></div>

export default function SimpleMap({setLocation}){
  const [coords, serCoords] = useState('loading')


  useEffect(() => {
          if (navigator.geolocation) {
            try{
               navigator.geolocation.getCurrentPosition((position) => {
                  let coords = {}
                  coords['lat'] = position.coords.latitude;
                  coords['lng'] = position.coords.longitude
                  serCoords(coords)
              });
            }catch(e){
                serCoords({})
            }
          }else{
            serCoords({})
          }
  },[])

  if(coords === 'loading') return <Loader />
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        onClick={({ lat, lng}) => {
            const position = {
              lat: lat,
              lng: lng
            }
            setLocation(position)
            serCoords(position)
        }}
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
        defaultCenter={coords}
        defaultZoom={11}
      >
        {/* TODO: case when user doesent allow his coords */}
        <AnyReactComponent
          lat={coords.lat}
          lng={coords.lng}
        />
      </GoogleMapReact>
    </div>
  );
}