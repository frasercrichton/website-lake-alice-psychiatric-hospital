import stateCareFacilities from '../config/state-care-facilities.json'

const data = {
  '/context': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        view: '3d',
        camera: {
          name: 'default',
          position: [0, 600, 400],
          rotation: [-0.8726646, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000,
          isRotating: true
        }
      },
      {
        id: 2,
        index: 2,
        header: 'Maximum Security Block',
        text: 'The Maximum Security Block was built in XXXX and when it opened briefly held prisoners who had been involved in the Mt Eden Prison riot of XXXX. The Block was also used as punishment for the children held at Lake Alice.',
        view: '3d',
        camera: {
          name: 'MaximumSecurityBlockCamera',
          position: [-212.70655822753906, 43.53173828125, -225.8732452392578],
          rotation: [
            -2.883296831393313, -0.013562286618653132, -3.1379996244759334
          ],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 3,
        index: 3,
        header: 'Childrens Villa - Girls',
        text: 'Childrens Villa - Girls',
        view: '3d',
        camera: {
          name: 'ChildrensVillaGirlsCamera',
          position: [
            157.77755737304688, 33.061851501464844, -367.64495849609375
          ],
          rotation: [-2.635556573701771, 0.9033575420263746, 2.713050423139778],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 4,
        index: 4,
        header: 'Eleven Bed Villas',
        text: 'The Eleven Bed Villas were in their time innovative units designed for intensive small group therapy with input from medical administrator Theodore Gray. In 1972 The Child and Adolescent Unit first opened in one of these units with Dr Selwyn Leeks appointed as Director.',
        view: '3d',
        camera: {
          name: 'ElevenBedVillasCamera',
          position: [190.96585083007812, 6.754665851593018, -322.5478210449219],
          rotation: [-2.8466184039245404, 1.2686933109903986, 2.85384180509251],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 5,
        index: 5,
        header: 'Images',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        image: {
          src: 'fc-20210828-00001-FL25129125-Edit.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton. Photographer: Mr Cleal. Archway Item ID:R24730910 Archway Series Number:6539 Provenance: Transferred by agency AAQT Material Type: Digitised'
        },
        view: 'map',
        map: {
          zoom: 5,
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-51.481383, 100.810547],
            northEast: [-6.620957, 192.963867]
          },
          visibleMapLayers: {
            australia: true
          }
        }
      },
      {
        id: 6,
        index: 6,
        header: 'Video',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        video: {
          url: 'https://vimeo.com/689154638',
          caption: 'Malcolm Richards.'
        },
        view: 'map',
        map: {
          zoom: 5,
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-51.481383, 100.810547],
            northEast: [-6.620957, 192.963867]
          },
          visibleMapLayers: {
            australia: true
          }
        }
      }
    ]
  },
  '/': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        view: '3d',
        camera: {
          name: 'default',
          position: [0, 600, 400],
          rotation: [-0.8726646, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000
        }
      }
    ]
  },
  '/pathways': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Lake Alice Site',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        map: {
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-40.128745, 175.33124],
            northEast: [-40.123741, 175.342489]
          }
        }
      },
      {
        id: 2,
        index: 2,
        header: 'Lake Alice Isolation',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        map: {
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-40.212047, 175.12928],
            northEast: [-40.051928, 175.489254]
          },
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: [
              {
                label: 'Bulls',
                latitude: -40.1756233,
                longitude: 175.3815803
              },
              {
                label: 'Marton',
                latitude: -40.086845,
                longitude: 175.3722454
              }
            ]
          }
        }
      },
      {
        id: 3,
        index: 3,
        header: 'Lake Alice Pathways',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        map: {
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-40.770142, 173.887482],
            northEast: [-39.489205, 176.767273]
          },
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: [...stateCareFacilities],
            pathways: true,
            labels: [
              'Hokio Beach School',
              'Holdsworth (Whanganui)',
              "Kohitere Boy's Training Centre (1/1/1965)"
            ]
          }
        }
      },
      {
        id: 4,
        index: 4,
        header: 'Aotearoa Wide',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        map: {
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-45.59589790007943, 157.09106084377453],
            northEast: [-35.574503782518356, 189.78093879433226]
          },
          visibleMapLayers: {
            minorPoints: [...stateCareFacilities]
          }
        }
      },
      {
        id: 5,
        index: 5,
        header: 'Australia',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        map: {
          zoom: 5,
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-51.481383, 100.810547],
            northEast: [-6.620957, 192.963867]
          },
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              },
              {
                label: 'Melbourne',
                latitude: -37.971237,
                longitude: 144.4926947
              }
            ]
          }
        }
      },
    ]
  },
  '/abuse': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        view: '3d',
        camera: {
          name: 'default',
          position: [0, 600, 400],
          rotation: [-0.8726646, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000
        }
      }
    ]
  },
  '/accountability': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        view: '3d',
        camera: {
          name: 'default',
          position: [0, 600, 400],
          rotation: [-0.8726646, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000
        }
      }
    ]
  },
  '/the-un': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        view: '3d',
        camera: {
          name: 'default',
          position: [0, 600, 400],
          rotation: [-0.8726646, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000
        }
      }
    ]
  },
  '/about': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'xxx',
        view: 'markdown',
        content: {
          file: 'about'
        }
        // camera: {
        //   name: 'default',
        //   position: [0, 600, 400],
        //   rotation: [-0.8726646, 0, 0],
        //   aspect: 1,
        //   fov: 80,
        //   near: 10,
        //   far: 10000
        // }
      }
    ]
  }
}
export default data

//
// "location":{
//   "title": "Location",
//   "text": "",
//   "images": [
//     {
//       "caption": "No. 7 Line, State Highway 3 2km from Bulls",
//       "url": "https://d10yslqdemxz8r.cloudfront.net/3d-visualisation/fc-20220425-00025-Screen%20Shot%202022-04-25%20at%2010.15.47%20PM.jpg",
//        "id": "location"
//     }
//   ]
// },

//
// southWest: [-40.770142, 173.887482],
// northEast: [-39.489205, 176.767273]
