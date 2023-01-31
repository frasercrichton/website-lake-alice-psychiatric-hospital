import stateCareFacilities from '../config/state-care-facilities.json'

const data = {
  '/introduction': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Introduction',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse.',
        image: {
          src: 'site-animated.gif'
          // caption:
          //   'Maximum security block at Lake Alice Psychiatric Hospital Marton. Photographer: Mr Cleal. Archway Item ID:R24730910 Archway Series Number:6539 Provenance: Transferred by agency AAQT Material Type: Digitised'
        },
        // view: '3d',
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
      }
    ]
  },
  '/context': {
    pages: [
      {
        id: 1,
        index: 1,
        header: '',
        text: '',
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
      },
      {
        id: 2,
        index: 2,
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
        header: 'Text',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
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
        id: 5,
        index: 5,
        header: 'Images',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        image: {
          src: 'fc-20210828-00001-FL25129125-Edit.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton. Photographer: Mr Cleal. Archway Item ID:R24730910 Archway Series Number:6539 Provenance: Transferred by agency AAQT Material Type: Digitised'
        },
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
      }
    ]
  },
  '/': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Introduction',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse.',
        image: {
          src: 'site-animated.gif'
          // caption:
          //   'Maximum security block at Lake Alice Psychiatric Hospital Marton. Photographer: Mr Cleal. Archway Item ID:R24730910 Archway Series Number:6539 Provenance: Transferred by agency AAQT Material Type: Digitised'
        },
        // view: '3d',
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
      }
    ]
  },
  '/pathways': {
    pages: [
      {
        id: 1,
        index: 1,
        header: '',
        text: '',
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
            lines: {
              target: {
                // label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              },
              points: [
                {
                  // "facility": "Kohitere Boy's Training Centre (1/1/1965)",
                  latitude: -40.6310718,
                  longitude: 175.2549856
                },
                {
                  // "facility": "Hokio Beach School",
                  latitude: -40.593763,
                  longitude: 175.191754
                },
                {
                  // "facility": "Holdsworth (Whanganui)",
                  latitude: -39.9111424,
                  longitude: 175.0276511
                }
              ]
            },
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
        header: 'Lake Alice Pathways',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
        view: 'map',
        image: {
          src: 'fc-20190219-00006-HP5-4009 (2).jpg',
          caption: 'Kohitere'
        },

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
            lines: {
              target: {
                // label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              },
              points: [
                {
                  // "facility": "Kohitere Boy's Training Centre (1/1/1965)",
                  latitude: -40.6310718,
                  longitude: 175.2549856
                },
                {
                  // "facility": "Hokio Beach School",
                  latitude: -40.593763,
                  longitude: 175.191754
                },
                {
                  // "facility": "Holdsworth (Whanganui)",
                  latitude: -39.9111424,
                  longitude: 175.0276511
                }
              ]
            },
            labels: [
              'Hokio Beach School',
              'Holdsworth (Whanganui)',
              "Kohitere Boy's Training Centre (1/1/1965)"
            ]
          }
        }
      },
      {
        id: 5,
        index: 5,
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
      }
    ]
  },
  '/malcolm': {
    pages: [
      {
        id: 1,
        index: 1,
        header: 'Default',
        text: 'Betweeen 19xx and 19xx x children were held at the Lake Alice Child and Adolescent Unit. During their time there they endured unprecedented levels of psychological, physical and sexual abuse. ',
        image: {
          src: 'malcolm.png',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton. Photographer: Mr Cleal. Archway Item ID:R24730910 Archway Series Number:6539 Provenance: Transferred by agency AAQT Material Type: Digitised'
        },
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
      },
      {
        id: 2,
        index: 2,
        header: 'Pathway',
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
            minorPoints: [
              {
                label: 'Hastings Heretaunga',
                latitude: -39.6394411,
                longitude: 176.7795431
              }
            ],
            lines: {
              target: {
                // label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              },
              points: [
                {
                  // label: 'Hastings Heretaunga',
                  latitude: -39.6394411,
                  longitude: 176.7795431
                }
              ]
            },
            labels: ['Hastings Heretaunga', 'Holdsworth (Whanganui)']
          }
        }
      },

      {
        id: 3,
        index: 3,
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
      },
      {
        id: 4,
        index: 4,
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
        id: 5,
        index: 5,
        header: 'Childrens Villa - Girls',
        text: 'Childrens Villa - Girls',
        image: {
          src: 'fc-20210619-00006-Scan 2.jpg',
          caption: 'Disturbed Patients Villa'
        },

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
        id: 6,
        index: 6,
        header: 'Childrens Villa - Girls',
        text: 'Childrens Villa - Girls',
        image: {
          src: 'fc-20210621-00007-Scan 1.jpg',
          caption: 'Childrens Villa'
        },

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
        image: {
          src: 'fc-20200523-00009-final-report-of-clas-2015.jpg',
          caption: 'Gallen Report'
        },

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
      },
      {
        id: 2,
        index: 2,
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
            minorPoints: [
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
