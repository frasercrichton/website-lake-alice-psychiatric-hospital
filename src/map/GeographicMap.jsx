import React from 'react'
import { LatLng, LatLngBounds } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import Points from './Points.jsx'
import Lines from './Lines.jsx'
import Highlight from './components/Highlight.jsx'
import mapDisplay from '../config/mapDisplay.json'
import './GeographicMap.css'
import AnimateZoom from './AnimateZoom'

const MAP_BOX_KEY = process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_KEY
const MAP_BOX_STYLE_ID =
  process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_STYLE_ID

const majorPointStyle = {
  fillColor: '#d3d3d3',
  iconSize: 100,
  strokeColor: '#00ffff'
}

const minorPointStyle = {
  fillColor: '#ffffff',
  iconSize: 50
}

const createLatLng = item => new LatLng(item[0], item[1])

const GeographicMap = ({ visibleMapLayers, map }) => {
  const { bounds, zoom } = mapDisplay

  const defaultBounds = new LatLngBounds(
    createLatLng(bounds.southWest),
    createLatLng(bounds.northEast)
  )
  const activeBounds = new LatLngBounds(
    createLatLng(map.bounds.southWest),
    createLatLng(map.bounds.northEast)
  )

  const defaultMapCentre = new LatLng(
    mapDisplay.centre.latitude,
    mapDisplay.centre.longitude
  )

  return (
    <div className='map-container'>
      <MapContainer
        className='map'
        maxBounds={defaultBounds}
        center={defaultMapCentre}
        zoom={zoom.default}
        zoomSnap={zoom.zoomSnap} // allows decimal points
        maxZoom={zoom.maxZoomCountry}
        minZoom={zoom.minZoomCityBlock}
        zoomControl={false}
        touchZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        antialias={true} // check
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
        <>
          {visibleMapLayers && (
            <>
              <AnimateZoom
                center={new LatLng(map.centre.latitude, map.centre.longitude)}
                zoom={map.zoom}
                bounds={activeBounds}
              />

              {visibleMapLayers.lines && (
                <Lines
                  target={visibleMapLayers.lines.target}
                  points={visibleMapLayers.lines.points}
                />
              )}
              <Points
                points={visibleMapLayers?.majorPoints}
                style={majorPointStyle}
              />
              {visibleMapLayers.minorPoints && (
                <>
                  <Points
                    points={visibleMapLayers.minorPoints.points}
                    mapType={visibleMapLayers.type}
                    style={minorPointStyle}
                  />
                  {visibleMapLayers.type === 'interactive' && (
                    <Highlight minorPoints={visibleMapLayers.minorPoints} />
                  )}
                </>
              )}
            </>
          )}
        </>
      </MapContainer>
    </div>
  )
}
export default GeographicMap
