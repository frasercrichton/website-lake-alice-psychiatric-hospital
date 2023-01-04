import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

//     {
//         "camera" : 0,
//         "name" : "Camera",
//         "rotation" : [
//             0.0032895992044359446,
//             0.8961613774299622,
//             -0.026981405913829803,
//             0.44289499521255493
//         ],
//         "translation" : [
//             71.60585021972656,
//             2.7324094772338867,
//             -360.2113342285156
//         ]
//     }
// ],
// "cameras" : [
//     {
//         "name" : "Camera.003",
//         "perspective" : {
//             "aspectRatio" : 1.7777777777777777,
//             "yfov" : 0.7984415303927126,
//             "zfar" : 1000,
//             "znear" : 0.10000000149011612
//         },
//         "type" : "perspective"
//     }
// ],

const Camera = ({ node, activeCamera }) => {
  // console.log('CAMERA', node.name)
  // console.log('ROTATION', node.rotation._x)
  // console.log('POSITION', node.position)
  // console.log('FOV', node.fov)
  // console.log('quaternion', node.quaternion)
  const makeDefault = node.name === activeCamera
  // const quaternion = new THREE.Quaternion(
  //   node.quaternion._w,
  //   node.quaternion._x,
  //   node.quaternion._y,
  //   node.quaternion._z
  // )
  return (
    <>
      <PerspectiveCamera
        position={[node.position.x, node.position.y, node.position.z]}
        makeDefault={makeDefault}
        rotation={[node.rotation._x, node.rotation._y, node.rotation._z]}
        aspect={node.aspect}
        // quaternion={quaternion}
        fov={node.fov}
      />
      {/* <OrbitControls
        
        // autoRotate
        // autoRotateSpeed={0.3}
        // target={[node.position.x, node.position.y, node.position.z]}
        enableZoom
        // enableRotate
        enableDamping
        dampingFactor={0.01}
        // maxAzimuthAngle={Math.PI/4}
        // minAzimuthAngle={Math.PI / 2}
        // maxPolarAngle={angleToRadians(80)}
        // minPolarAngle={angleToRadians(30)}
        maxDistance={600}
        minDistance={10}

        // maxZoom={10}
        // minZoom
        // zoom0
        // zoomSpeed={0.3}
        // update
      /> */}
    </>
  )
}

export default Camera
