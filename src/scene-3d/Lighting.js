import React from 'react'
import LightingControls from '../controls/LightingControls'

// const lightingControls = LightingControls()

const Lighting = ({}) => {
  const spotlightRef = useRef()

  if (spotlightRef.current) {
    const light = spotlightRef.current;

    // light.target = new THREE.Vector3(1, 2, 1); //;
    const d = 5000;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.radius = 1.5;

    light.shadow.camera.near = 0.1; // default
    light.shadow.camera.far = 1000; // default
    console.log('light', light);
  }

  const lightingControls = LightingControls()
  const shadowPosition = [0, 100, 200]
  return (
    <>
      <ambientLight intensity={lightingControls['Ambient Intensity']} />
      <hemisphereLight
        skyColor={lightingControls['Ambient Sky Colour']}
        groundColor={lightingControls['Ambient Ground Colour']}
        intensity={lightingControls['Hemisphere Intensity']}
      />
      <spotLight
        ref={spotlightRef}
        intensity={lightingControls['Spotlight Intensity']}
        position={shadowPosition}
        color={'grey'}
        castShadow
        shadow-bias={0.0001}
        shadow-mapSize-height={1024 * 4}
        shadow-mapSize-width={1024 * 4}
        near={0.4}
      />
    </>
  )
}

export default Lighting
