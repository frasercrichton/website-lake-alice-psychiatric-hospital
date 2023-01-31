import React, { useState, useEffect } from 'react'
import { LatLng, LatLngBounds } from 'leaflet'
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet'
import Markers from './Markers.jsx'
import Lines from './Lines.jsx'
import './GeographicMap.css'
import AnimateZoom from './AnimateZoom'

const MAP_BOX_KEY = process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_KEY
const MAP_BOX_STYLE_ID =
  process.env.REACT_APP_MASS_INCARCERATION_MAP_BOX_STYLE_ID

function GeographicMap ({ visibleMapLayers, maxBounds }) {
  const southWest = new LatLng(maxBounds.southWest[0], maxBounds.southWest[1])
  const northEast = new LatLng(maxBounds.northEast[0], maxBounds.northEast[1])
  const bounds = new LatLngBounds(southWest, northEast)
  //  visibleMapLayers?.lines.target
  // visibleMapLayers?.lines.points
  // function ZoomEnd ({ fillOpacity, setFillOpacity }) {
  //   const mapEvents = useMapEvents({
  //     zoomend: () => {
  //       setFillOpacity('0.7')
  //     }
  //   })
  //   return null
  // }

  // TODO transition
  function FitBounds () {
    const map = useMap()
    useEffect(() => {
      map.fitBounds(bounds)
    }, [maxBounds])
  }

  return (
    <div className='map-container'>
      <MapContainer
        className='map'
        zoomControl={false}
        touchZoom={false}
        scrollWheelZoom={false}
        maxBounds={bounds}
        // fitBounds={maxBounds}
        attributionControl={false}
        antialias={true} // check
      >
        <FitBounds />
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
              {visibleMapLayers.lines && (
                <Lines
                  target={visibleMapLayers.lines.target}
                  points={visibleMapLayers.lines.points}
                />
              )}
              <Markers
                majorPoints={visibleMapLayers.majorPoints}
                minorPoints={visibleMapLayers.minorPoints}
              />
            </>
          )}
        </>
      </MapContainer>
    </div>
  )
}
export default GeographicMap
