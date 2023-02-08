import stateCareFacilities from '../config/state-care-facilities.json'

const unlabeledLocations = stateCareFacilities.filter(function (facility) {
  delete facility.label
  return true
})

const data = {
  '/introduction': {
    pages: [
      {
        id: 1,
        index: 1,
        text: {
          header: 'Introduction',
          content: 'Lake Alice Child and Adolescent Unit opened in 197x.',
          style: 'static'
        },
        image: {
          src: 'site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 2,
        index: 2,
        text: {
          header: 'Introduction',
          content: 'xxx',
          style: 'static'
        },
        image: {
          src: 'site-animated.gif',
          style: 'static'
        }
      }
    ]
  },
  '/malcolm': {
    pages: [
      {
        id: 1,
        index: 1,
        image: {
          src: 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'scrolling'
        }
        // view: 'map',
        // map: {
        //   centre: {
        //     latitude: -40.7670087,
        //     longitude: 173.4506545
        //   },
        //   bounds: {
        //     southWest: [-40.770142, 173.887482],
        //     northEast: [-39.489205, 176.767273]
        //   },
        //   visibleMapLayers: {
        //     majorPoints: [
        //       {
        //         label: 'Lake Alice',
        //         latitude: -40.1254336,
        //         longitude: 175.3369864
        //       }
        //     ],
        //     minorPoints: [
        //       {
        //         label: 'Hastings Heretaunga',
        //         latitude: -39.6394411,
        //         longitude: 176.7795431
        //       }
        //     ],
        //     lines: {
        //       target: {
        //         // label: 'Lake Alice',
        //         latitude: -40.1254336,
        //         longitude: 175.3369864
        //       },
        //       points: [
        //         {
        //           // label: 'Hastings Heretaunga',
        //           latitude: -39.6394411,
        //           longitude: 176.7795431
        //         }
        //       ]
        //     },
        //     labels: ['Hastings Heretaunga', 'Holdsworth (Whanganui)']
        //   }
        // }
        // view: '3d',
        // camera: {
        //   name: 'default',
        //   position: [0, 600, 400],
        //   rotation: [-0.8726646, 0, 0],
        //   aspect: 1,
        //   fov: 80,
        //   near: 10,
        //   far: 10000
        // }
      },
      {
        id: 2,
        index: 2,
        text: {
          header: 'Pathway',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'static'
        },
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
        text: {
          header: 'Pathway 2',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'static'
        },
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
        text: {
          header: 'Childrens Villa - Girls',
          content: 'Childrens Villa - Girls',
          style: 'static'
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
        id: 4,
        index: 4,
        text: {
          header: 'Above',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'ChildrensVillaAbove',
          position: [
            40.091243743896484, 52.727787017822266, -331.4974365234375
          ],
          rotation: [-1.5707963614591278, 0, 1.5816991776824212],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 5,
        index: 5,
        image: {
          src: 'fc-20210621-00007-Scan 1.jpg',
          caption:
            "Drawing by Malcolm Richards of the dormitory layout in the Boys' Villa.",
          style: 'scrolling'
        },

        view: '3d',
        camera: {
          name: 'ChildrensVillaAbove',
          position: [
            40.091243743896484, 52.727787017822266, -331.4974365234375
          ],
          rotation: [-1.5707963614591278, 0, 1.5816991776824212],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 6,
        index: 6,
        text: {
          header: 'Isolation',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'static'
        },

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
        id: 7,
        index: 7,
        image: {
          src: 'fc-20210619-00006-Scan 2.jpg ',
          caption:
            'Drawing by Malcolm Richards of the dormitory used for ECT. Adults were given ECT first and children last.',
          style: 'scrolling'
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
        id: 8,
        index: 8,
        video: {
          type: 'vimeo',
          id: '689154638',
          caption: 'Malcolm Richards - Lake Alice Survivor'
        }
      }
    ]
  },
  '/context': {
    pages: [
      {
        id: 1,
        index: 1,
        view: '3d',
        text: {
          header: 'Context',
          content: '',
          style: 'static'
        },
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
        text: {
          header: 'Eleven Bed Villas',
          content: 'Eleven Bed Villas',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'ElevenBedVilla',
          position: [100.01496887207031, 3.294312000274658, -332.5577087402344],
          rotation: [
            3.1176579502008677, -0.9424030014672574, 3.1222640413920724
          ],
          aspect: 1.7777777777777777,
          fov: 22.89519204617112,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 3,
        index: 3,
        image: {
          src: 'fc-20210828-00001-FL25129159.jpg',
          caption:
            'The original eleven bed villas [Archway Item ID: R24730915 https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE25129143]',
          style: 'scrolling'
        },

        view: '3d',
        camera: {
          name: 'ElevenBedVilla',
          position: [100.01496887207031, 3.294312000274658, -332.5577087402344],
          rotation: [
            3.1176579502008677, -0.9424030014672574, 3.1222640413920724
          ],
          aspect: 1.7777777777777777,
          fov: 22.89519204617112,
          near: 0.10000000149011612,
          far: 1000
        }
      },

      {
        id: 4,
        index: 4,
        text: {
          header: 'Childrens Villa - Girls',
          content: 'Childrens Villa - Girls',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'ChildrensVilla',
          position: [89.609375, 6.064056873321533, -348.9563903808594],
          rotation: [
            -3.0338610420757726, 1.2408248061486113, 3.039651924990452
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
        text: {
          header: 'Maximum Security Block',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
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
      },
      {
        id: 6,
        index: 6,
        image: {
          src: 'fc-20210828-00001-FL25129125.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton [Archway Item ID:R24730910 https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE25129115]',
          style: 'scrolling'
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
      },

      {
        id: 7,
        index: 7,
        text: {
          header: 'Camera 2',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'cam 2',
          position: [
            149.15101623535156, 11.380169868469238, -236.31446838378906
          ],
          rotation: [
            -0.23121113940855711, 0.536190233484002, 0.11427681276845893
          ],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 8,
        index: 8,
        text: {
          header: 'Camera 3',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'cam 3',
          position: [-230.4385986328125, 97.69420623779297, -577.187255859375],
          rotation: [
            -2.5898855475579845, -0.26382684672755846, -2.9824475943743254
          ],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 9,
        index: 9,
        text: {
          header: 'Camera 4',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'cam 4',
          position: [355.5684814453125, 79.33528137207031, -230.3162841796875],
          rotation: [
            -1.2351496490654332, 0.9976525877965389, 1.1772604081864493
          ],
          aspect: 1.7777777777777777,
          fov: 22.89519204617112,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 10,
        index: 10,
        text: {
          header: 'Camera 5',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'Cam 5',
          position: [73.58257293701172, 6.925444602966309, -363.65118408203125],
          rotation: [
            -2.8804409500245396, 1.124606510517196, 2.9050370812435697
          ],
          aspect: 1.7777777777777777,
          fov: 39.76070325000613,
          near: 0.10000000149011612,
          far: 1000
        }
      },
      {
        id: 11,
        index: 11,
        text: {
          header: 'Camera 6',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          name: 'cam 6',
          position: [54.55931091308594, 7.695420265197754, -360.82073974609375],
          rotation: [
            -2.9441580154277016, 1.1303687398238607, 2.962599070455075
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
        text: {
          header: 'Introduction',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'static'
        },

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
        text: {
          header: 'Pathways',
          content: '',
          style: 'scrolling'
        },

        view: '3d',
        camera: {
          name: 'default',
          position: [160, 460, -220],
          rotation: [-1.7, 0, 0],
          aspect: 1,
          fov: 80,
          near: 10,
          far: 10000
        }
      },
      {
        id: 2,
        index: 2,
        text: {
          header: 'Site',
          content: '',
          style: 'scrolling'
        },

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
        id: 3,
        index: 3,
        text: {
          header: 'Isolation',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          centre: {
            latitude: -40.7670087,
            longitude: 173.4506545
          },
          bounds: {
            southWest: [-40.753499, 173.821564],
            northEast: [-39.493444, 176.855164]
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
                label: "Kohitere Boy's Training Centre",
                latitude: -40.6310718,
                longitude: 175.2549856
              },
              {
                label: 'Hokio Beach School',
                latitude: -40.593763,
                longitude: 175.191754
              },
              {
                label: 'Holdsworth - Whanganui',
                latitude: -39.9111424,
                longitude: 175.0276511
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
        text: {
          header: 'Kohitere',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        view: 'map',
        image: {
          src: 'fc-20190219-00006-HP5-4009 (2).jpg',
          caption: 'Kohitere',
          static: true
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
        text: {
          header: 'A Network',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'static'
        },

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
            minorPoints: [...unlabeledLocations]
          }
        }
      }
    ]
  },
  '/accountability': {
    pages: [
      {
        id: 1,
        index: 1,
        view: '3d',
        text: {
          header: 'The Lake',
          content: '',
          style: 'static'
        },
        camera: {
          name: 'default',
          position: [-310, 400, 200],
          rotation: [-1.7, 0, 0],
          aspect: 1,
          fov: 70,
          near: 10,
          far: 10000
        }
      },
      {
        id: 2,
        index: 2,
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
        id: 3,
        index: 3,

        image: {
          src: 'fc-20200523-00009-final-report-of-clas-2015.jpg',
          caption: 'Gallen Report',
          style: 'scrolling'
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
        id: 4,
        index: 4,
        text: {
          header: 'Australia',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
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
      },
      {
        id: 5,
        index: 5,
        image: {
          src: 'fc-20220628.jpg',
          caption: 'Committee Against Torture',
          style: 'scrolling'
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
        text: {
          header: 'About',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },

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
