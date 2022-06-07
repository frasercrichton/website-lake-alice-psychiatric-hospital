import React from 'react'
import { LatLng, LatLngBounds } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import mapDisplay from './mapDisplay.json'
import Marker from './Marker'
import './Map.css'
const MAP_BOX_KEY = process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_KEY
const MAP_BOX_STYLE_ID =
  process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_STYLE_ID

const { zoom, centre, maxBounds } = mapDisplay
const mapCentre = new LatLng(centre.latitude, centre.longitude)

const mapZoomDimensions = {
  zoomSnap: zoom.zoomSnap,
  mapZoom: zoom.default,
  minZoom: zoom.minZoomCityBlock,
  maxZoom: zoom.maxZoomContinent
}

const Map = () => {
  const { mapZoom, maxZoom, minZoom, zoomSnap } = mapZoomDimensions
  const southWest = new LatLng(maxBounds.southWest[0], maxBounds.southWest[1])
  const northEast = new LatLng(maxBounds.northEast[0], maxBounds.northEast[1])
  const bounds = new LatLngBounds(southWest, northEast)
  return (
    <div className='map-container'>
      <MapContainer
        className='map'
        center={mapCentre}
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
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAP_BOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_BOX_KEY}&fresh=true`}
          attribution='Map data &copy;
          <a target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/">OpenStreetMap</a>
          contributors,
          <a  target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
          Imagery &copy;
          <a  target="_blank" rel="noreferrer" href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker />
      </MapContainer>
    </div>
  )
}
export default Map
