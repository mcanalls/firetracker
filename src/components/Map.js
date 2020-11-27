import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const fires = eventData.map(fire => {
    if (fire.categories[0].id === 8) {
      return <LocationMarker lat={fire.geometries[0].coordinates[1]}
        lng={fire.geometries[0].coordinates[0]} onCick={() => setLocationInfo({ id: fire.id, title: fire.title })} />
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAxh8zNi7B0gdkHzml3NeJPgEoFfaB0G7U' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fires}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map