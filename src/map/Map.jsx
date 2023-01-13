import React, { useState } from 'react'
import { LatLng, LatLngBounds } from 'leaflet'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import Marker from './components/Marker'
import StateCareFacilities from './StateCareFacilities'
import './Map.css'
import AnimateZoom from './AnimateZoom'
const MAP_BOX_KEY = process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_KEY
const MAP_BOX_STYLE_ID =
  process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_STYLE_ID

const Map = ({
  mapZoom,
  maxZoom,
  minZoom,
  zoomSnap,
  maxBounds,
  initialMapCentre,
  dynamicZoom,
  dynamicCoordinates
}) => {
  const southWest = new LatLng(maxBounds.southWest[0], maxBounds.southWest[1])
  const northEast = new LatLng(maxBounds.northEast[0], maxBounds.northEast[1])
  const bounds = new LatLngBounds(southWest, northEast)
  const initialCentreCoordinates = new LatLng(
    initialMapCentre.latitude,
    initialMapCentre.longitude
  )
  const centreCoordinates = new LatLng(
    dynamicCoordinates.latitude,
    dynamicCoordinates.longitude
  )
  const marker = { fillColor: '#a9a9a9', radius: '20' }
  // const map = useMap()
  const [fillOpacity, setFillOpacity] = useState('0')

  function ZoomEnd ({ fillOpacity, setFillOpacity }) {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setFillOpacity('0.7')
      }
    })
    return null
  }

  return (
    <div className='map-container'>
      <MapContainer
        className='map'
        center={initialCentreCoordinates}
        zoomSnap={zoomSnap}
        zoom={mapZoom}
        maxZoom={maxZoom}
        minZoom={minZoom}
        touchZoom={false}
        scrollWheelZoom={false}
        maxBounds={bounds}
        fitBounds={maxBounds}
        attributionControl={false}
      >
        <ZoomEnd fillOpacity={fillOpacity} setFillOpacity={setFillOpacity} />
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAP_BOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_BOX_KEY}&fresh=true`}
          attribution='Map data &copy;
          <a target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/">OpenStreetMap</a>
          contributors,
          <a  target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
          Imagery &copy;
          <a  target="_blank" rel="noreferrer" href="https://www.mapbox.com/">Mapbox</a>'
        />
        <AnimateZoom centreCoordinates={centreCoordinates} zoom={dynamicZoom} />
        {fillOpacity !== '0' && (
          <>
            <Marker
              markerCoordinates={initialCentreCoordinates}
              fillOpacity={fillOpacity}
              {...marker}
            />
            <StateCareFacilities lineCentre={initialCentreCoordinates} />
          </>
        )}
      </MapContainer>
    </div>
  )
}
export default Map
