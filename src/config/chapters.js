import stateCare from '../config/state-care-facilities.json'
import psychiatric from '../config/psychiatric-facilities.json'
import cameras from '../config/cameras.js'

const stateCareFacilities = stateCare.sort(
  (a, b) => parseInt(a.opened) - parseInt(b.opened)
)

const psychiatricFacilities = psychiatric.sort((a, b) => {
  if (a.label < b.label) {
    return -1
  }
  if (a.label > b.label) {
    return 1
  }
  return 0
})

const national = {
  centre: {
    latitude: -40.7670087,
    longitude: 173.4506545
  },
  bounds: {
    southWest: [-45.59589790007943, 157.09106084377453],
    northEast: [-35.574503782518356, 189.78093879433226]
  }
}

const northIsland = {
  centre: {
    latitude: -38.384728,
    longitude: 175.764771
  },
  bounds: {
    southWest: [-42.269179, 167.530518],
    northEast: [-35.621582, 183.317871]
  }
}
// -40.692093,173.932800,-39.821194,176.009216
// // -40.697299,173.844910,-39.826468,175.921326 further right
const hubLocation = {
  centre: {
    latitude: -40.7670087,
    longitude: 173.4506545
  },
  bounds: {
    southWest: [-40.692093, 173.9328],
    northEast: [-39.821194, 176.009216]
  }
}

const data = {
  '/testimony': {
    pages: [
      {
        id: 'testimony-introduction-1',
        video: {
          type: 'vimeo',
          id: '689154638',
          caption: 'Malcolm Richards - Lake Alice Survivor'
        }
      }
    ]
  },
  '/introduction': {
    pages: [
      // {
      //   id: 'context-12',
      //   text: {
      //     header: 'Eleven Bed Villa Top Floor',
      //     content:
      //       'The first floor of the villa contained two 4-bed dormitories, two single bed rooms, a staff bedroom, toilets and washrooms.',
      //     style: 'scrolling'
      //   },
      //   view: '3d',
      //   disable: [
      //     'ElevenBedVillaRoof_20',
      //     'ElevenBedVillaRoof_20_1',
      //     'ElevenBedVillaRoof020',
      //     'ElevenBedVillaRoof020_1',
      //     'ElevenBedVillaRoof020_20',
      //     'ElevenBedVillaRoof020_21',
      //   ],
      //   camera: {
      //     ...cameras.twelveBedVillasWide
      //   }
      // },

      {
        id: 'introduction-introduction-1',
        text: {
          content: 'Introduction'
        },
        image: {
          src: 'site-animated.gif',
          style: 'static',
          caption: ''
        }
      },
      {
        id: 'introduction-introduction-2',
        text: {
          content: 'Introduction'
        },
        image: {
          src: 'site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 'intro-3',
        image: {
          src: 'site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 'intro-4',
        text: {
          content:
            'The United Nations Committee against Torture (UNCAT) found New Zealand in breach of the Convention Against Torture in 2019.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-5',
        text: {
          content:
            'New Zealand had failed to ensure a prompt and impartial investigation into allegations of systematic physical, emotional and sexual child abuse at the Lake Alice Child and Adolescent Unit.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-6',
        text: {
          content:
            "The Child and Adolescent Unit opened in 1972 and closed in 1978 after allegations that Electroconvulsive therapy (ECT) and Paraldehyde 'aversion therapy' were in reality used as a form of torture to punish children with behavioural issues  in the unit.",
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-7',
        text: {
          content:
            'After civil cases were brought against the Crown minimal compensation was paid to a group of ninety-five survivors in 2001. Legal fees swallowed up the majority of this payment.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-8',
        text: {
          content:
            "Three of New Zealand's initial periodic reports to UNCAT deliberately excluded all mention of Lake Alice and the survivor's allegations or torture.",
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            'Two survivors of Lake Alice have since had their complaints recognised by the United Nations - Paul Zentveld in 2020 and Malcolm Richards in 2022.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            'Only in 2021 was a former member of staff charged by the police.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content: 'No one has ever been convicted.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content: 'New Zealand is still in breach of the convention.',
          style: 'animated'
        },
        view: '3d',
        camera: cameras.default
      }
    ]
  },
  '/malcolm': {
    pages: [
      {
        id: 'malcolm-introduction-1',
        text: {
          content: 'Malcolm'
        },
        image: {
          src: 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-introduction-2',
        text: {
          content: 'Malcolm'
        },
        image: {
          src: 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-1',
        text: {
          content:
            'Malcolm Richards spent three months at the Lake Alice Child and Adolescent Unit in 1975 when he was 15. During his time at Lake Alice Malcolm was subjected to Electroconvulsive therapy (ECT) used as punishment and sexual abuse. For almost fifty years Malcolm and the other survivors of Lake Alice have battled against the State for accountability and redress.',
          style: 'scrolling'
        },
        image: {
          src: 'fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-2',
        text: {
          header: '2 - Family',
          content:
            "Malcolm grew up in Hastings Heretaunga. At home his family life was difficult. Both his parents were physically abusive. In school Malcolm was sexually abused by his teacher. Malcolm's behaviour at home became erratic and when his father physically abused his mother Malcolm assaulted him. His mum took him to a psychiatrist in Hastings Hospital as a result of this incident.",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Hastings Heretaunga',
                latitude: -39.6394411,
                longitude: 176.7795431
              }
            ]
          }
        }
      },
      {
        id: 'malcolm-3',
        text: {
          header: '3 - Pathway',
          content:
            'The psychiatrist placed Malcolm under Public Trust guardianship told his mum to take him to the Lake Alice Child and Adolescent Unit for residential treatment.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: {
              points: [
                {
                  label: 'Hastings Heretaunga',
                  latitude: -39.6394411,
                  longitude: 176.7795431
                }
              ]
            },
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
        id: 'malcolm-4',
        text: {
          header: '4 - Arrival',
          content:
            "Malcolm was left at the Boys' Villa by his mum with Dr Selwyn Leeks - the Director of the unit. Neither Malcolm nor his mother were made aware of or asked to consent to Electroconvulsive therapy. ",
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.boysVilla
      },
      {
        id: 'malcolm-5',
        view: '3d',
        camera: cameras.boysVilla
      },
      {
        id: 'malcolm-6',
        text: {
          header: '5 - First night',
          content:
            "The boy's unit comprised of a kitchen, dinning room, day room and upstairs a dormitory and four secure solitary confinement cells. The unit housed x number of boys at that time.",
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.boysVillaAbove
        }
      },

      {
        id: 'malcolm-7',
        image: {
          src: 'fc-20210621-00007-Scan 1.jpg',
          caption:
            "Drawing by Malcolm Richards of the dormitory layout in the Boys' Villa.",
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'malcolm-8',
        content:
          "The boy's unit comprised of a kitchen, dinning room, day room and upstairs a dormitory and four secure solitary confinement cells. The unit housed x number of boys at that time.",
        view: '3d',
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'malcolm-9',
        text: {
          header: '6 - A Typical day',
          content:
            'Malcolm described life in the Boys\' Villa as like being in the military "If you weren\'t on time you got punished, if you made too much noise you got punished." Punishment could mean anything from solitary confinement, ECT given without anaesthetic or painful Paraldhyde injections. Malcolm\'s life at Lake Alice was lonely and brutal, "You kept yourself to yourself."',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.dayRoomBoysVilla
        }
      },

      {
        id: 'malcolm-10',
        text: {
          header: '7 - ECT',
          content:
            "Electroconvulsive therapy (ECT) was used at Lake Alice in two ways. Modified ECT where patients were anaesthetised prior to being treated and un-modified ECT with no anaesthetic. Un-modified ECT was introduced as an aversion therapy by Leeks in 1972. Controversial even at the time aversion therapy was a punishment reward system that was used ‘treat’ addiction, homosexuality, trans-people. At Lake Alice un-modified ECT's use was far removed from any form of therapy. ECT was used as an arbitrary punishment.",
          style: 'scrolling'
        },
        labels: [
          {
            id: 'Villa15',
            label: "Adult's Villa"
          }
        ],
        view: '3d',
        camera: { ...cameras.adultVilla }
      },
      {
        id: 'malcolm-11',
        text: {
          header: '8 - ECT - Villa',
          content:
            '"I was in a ward with other people getting ECT three times a week where they’d bring the trolley down one side and up the other and save the children to last and just put you to sleep and give you ECT to the head. The wait for your turn was worse than the ECT. It wasn’t worse than having ECT while you were awake - that pain is indescribable. If you are old enough to have an old black and white TV and transmission used to end and the end of the night and the TV would make a real buzzing noise and you’d see the black and white speckles on the screen that’s exactly what you saw in your eyes while the current was going through. The pain was horrendous." Recovery was as excruciating; "like you\'d been in a ring with a boxer".',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'Villa15',
            label: "Adult's Villa"
          }
        ],
        view: '3d',
        camera: {
          ...cameras.adultVilla
        }
      },
      {
        id: 'malcolm-13',
        image: {
          src: 'fc-20210619-00006-Scan 2.jpg ',
          caption:
            'Drawing by Malcolm Richards of the dormitory used for ECT. Adults were given ECT first and children last.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.adultVilla
        }
      },
      {
        id: 'malcolm-14',
        image: {
          src: 'large_1980_1389.jpg',
          caption: 'ECT machine.',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.adultVilla }
      },
      {
        id: 'malcolm-15',
        text: {
          header: '9 - Escape',
          content:
            'Like a number of survivors, Malcolm attempted to escape from Lake Alice. Lake Alice was a self-sustaining community. Many staff lived on site, it had its own farm and so there was limited contact with the outside world. The remoteness of Lake Alice made it difficult for anyone to escape. "It was the ideal place for a secure unit because if someone got out of the Secure Unit they had miles to go to get anywhere. So it was very safe to put very mentally disturbed people but most of us weren\'t mentally disturbed at all."',
          style: 'scrolling'
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
            minorPoints: {
              points: [
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
        }
      },
      {
        id: 'malcolm-16',
        text: {
          header: '10 - Consequences',
          content:
            "When he was caught trying to escape he was placed in a solitary secure cell back in the boys' unit.",
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.dormitoryVilla }
      },
      {
        id: 'wip-malcolm-17',
        text: {
          header: '10 - Consequences',
          content:
            ' In despair Malcolm attempted suicide in the cell. He was found still alive, stripped naked,  given unmodified ECT as punishment until he passed out. He was sexually assaulted whilst unconscious and then left alone to recover.',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.cellCamera }
      },

      {
        id: 'malcolm-18',
        text: {
          header: '11 - Afterwards',
          content:
            'After this incident Malcolm was given ECT three times a week.',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.cellCamera }
      },
      {
        id: 'malcolm-19',
        text: {
          header: '12 - Runaway',
          content:
            "Not long after this incident Malcolm was sent home for Christmas. Knowing he would be sent back to Lake Alice after the holiday he ran away and this time wasn't caught. Malcolm's life following his experience at Lake Alice was erratic. As a runaway, he moved around the country in fear of being sent back to Lake Alice - some of his time was spent living on the street and rough sleeping. He suffered PTSD and memory loss from the ECT and couldn't hold down a regular job. Instead he found short-term work as a manual labourer, dairy worker and \"a lot of time between jobs with no job or income\". ",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  label: 'Waipawa',
                  latitude: -39.9182277,
                  longitude: 176.4211438
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-20',
        text: {
          header: '15 - Waipukurau',
          content:
            'After running away from home Malcolm initially lived under a bridge at Waipukurau.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  label: 'Waipukurau',
                  latitude: -40.0309529,
                  longitude: 176.5278439
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-21',
        text: {
          header: '12 - Runaway',
          content:
            'Malcolm found his way to Pahiatua and worked on a dairy farm.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  label: 'Pahiatua',
                  latitude: -40.7491005,
                  longitude: 176.1375833
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-22',
        text: {
          header: '12 - Napier',
          content:
            'His next move was to Napier where he worked in a factory. Napier was also the first place where Malcolm reported his experience at Lake Alice to the police.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  label: 'Napier',
                  latitude: -39.4794044,
                  longitude: 176.7985016
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-23',
        text: {
          header: '12 - Welsford',
          content:
            'He then moved to Welsford and found more dairy farming work.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  label: 'Welsford',
                  latitude: -36.2858116,
                  longitude: 174.4447237
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-24',
        text: {
          header: '19 - Kaiwaka',
          content: 'From Welsford to Kaiwaka and worked on a dairy farm.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  label: 'Kaiwaka',
                  latitude: -36.2160784,
                  longitude: 174.3493232
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-25',
        text: {
          header: '12 - Runaway',
          content:
            'Moved to the North Shore at Auckland and worked drain laying.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  label: 'Auckland North Shore',
                  latitude: -36.7494681,
                  longitude: 174.5825004
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-26',
        text: {
          header:
            '22 - The Connelly Unit and Te Whetu Tawera - Auckland Hospital',
          content:
            'In Auckland Malcolm PTSD from his experience at Lake Alice saw Malcolm admitted to the Connelly mental health unit. After this Malcolm lived on the street.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  latitude: -36.7494681,
                  longitude: 174.5825004
                },
                {
                  label:
                    'The Connelly Unit and Te Whetu Tawera - Auckland Hospital',
                  latitude: -36.8605068,
                  longitude: 174.7674006
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-27',
        text: {
          header: '23 - South Auckland',
          content: "In South Auckland Malcolm found work in a butcher's shop.",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  latitude: -36.7494681,
                  longitude: 174.5825004
                },
                {
                  latitude: -36.8605068,
                  longitude: 174.7674006
                },
                {
                  label: 'South Auckland',
                  latitude: -36.9914801,
                  longitude: 174.8690175
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-28',
        text: {
          header: '24 - Napier',
          content:
            'Malcolm then moved to Napier and worked in several manual labouring jobs.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  latitude: -36.7494681,
                  longitude: 174.5825004
                },
                {
                  latitude: -36.8605068,
                  longitude: 174.7674006
                },
                {
                  latitude: -36.9914801,
                  longitude: 174.8690175
                },
                {
                  label: 'Napier',
                  latitude: -39.4794044,
                  longitude: 176.7985016
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-29',
        text: {
          header: '25 - Hastings',
          content:
            'Finally Malcolm moved to Hastings where he worked in forestry.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...northIsland,
          visibleMapLayers: {
            majorPoints: [
              // {
              //   label: 'Lake Alice',
              //   latitude: -40.1254336,
              //   longitude: 175.3369864
              // }
            ],
            lines: {
              points: [
                {
                  latitude: -39.9182277,
                  longitude: 176.4211438
                },
                {
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  latitude: -36.7494681,
                  longitude: 174.5825004
                },
                {
                  latitude: -36.8605068,
                  longitude: 174.7674006
                },
                {
                  latitude: -36.9914801,
                  longitude: 174.8690175
                },
                {
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  label: 'Hastings',
                  latitude: -39.6394411,
                  longitude: 176.7794575
                }
              ]
            }
          }
        }
      }
    ]
  },
  '/context': {
    pages: [
      {
        id: 'context-introduction-1',
        text: {
          content: 'Context'
        },
        view: '3d',
        camera: { ...cameras.siteCamera }
      },
      {
        id: 'context-introduction-2',
        text: {
          content: 'Context'
        },
        view: '3d',
        camera: { ...cameras.siteCamera }
      },
      {
        id: 'context-3',
        text: {
          header: '2 - Adult Psychiatric Facility',
          content:
            'Lake Alice opened in 1950 as an adult psychiatric facility and specialised in treating men returning from the war with post-traumatic stress disorder.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.siteCamera }
      },
      {
        id: 'context-4',
        text: {
          content:
            'Lake Alice operated as a self-contained community with farm, a community hall and even a swimming pool. It was isolated from the world and particularly from oversight by Health Authorities.',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'AdministrativeBuilding',
            label: 'Administrative Building'
          },
          {
            id: 'GardenersCompound',
            label: 'Gardeners Compound'
          },
          {
            id: 'Villa13',
            label: 'Adult Villa'
          },
          {
            id: 'Villa15',
            label: 'Adult Villa'
          },
          {
            id: 'SwimmingPool',
            label: 'Swimming Pool'
          },
          {
            id: 'CommunityHall',
            label: 'Community Hall'
          },
          {
            id: 'MaximumSecurity_',
            label: 'Maximum Security'
          },
          {
            id: 'ChildrensVillaRoof001_1',
            label: "Girls' Villa"
          },
          {
            id: 'ChildrensVillaRoof_1',
            label: "Boys' Villa"
          },

          {
            id: 'DisturbedPatientsVilla',
            label: 'Disturbed Patients Villa'
          },
          {
            id: 'DoctorsHouses',
            label: "Doctors' Houses"
          },
          {
            id: 'TwelveBedVillas',
            label: 'Twelve Bed Villas'
          },
          {
            id: 'StoreAndWorkshops',
            label: 'Store and Workshops'
          },
          {
            id: 'StaffVillas',
            label: 'Staff Quarters'
          },
          {
            id: 'SingleStaffVillas',
            label: 'Single Staff Quarters'
          },
          {
            id: 'SewageFarm',
            label: 'Sewage Farm'
          }
        ],
        view: '3d',
        camera: { ...cameras.sitePlan }
      },
      {
        id: 'context-4',
        text: {
          header: '3 - 12-bed Villas',
          content:
            'Originally the small 12 bed villas were intended for intensive group therapy. At the time this was a pioneering approach.',
          source:
            "In Defence of Theodore Gray: Architecture as a Vehicle for Re-evaluating a Doctor's Commitment to Patient Care (January 2017, Rebecca J. McLaughlan)",
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.twelveBedVillasWide }
      },
      {
        id: 'context-5',
        text: {
          header: '2 - Adult Psychiatric Facility',
          content:
            'From 1971, Dr Selwyn Leeks accepted responsibility as psychiatric consultant for all patients at Lake Alice under the age of 17. He also worked at two other child health clinics, one in Whanganui and another at Palmerston North Hospital.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.twelveBedVillasWide }
      },
      {
        id: 'context-6',
        image: {
          src: 'fc-20130307-00001-2013P_Pi293_006718.jpg',
          style: 'scrolling',
          caption:
            'Dr Selwyn Robert Leeks, Director of the Manawaroa Centre for Psychological Medicine',
          source:
            'https://manawatuheritage.pncc.govt.nz/item/b4f42c5b-15c9-4425-98ce-992873e5525f#tab-item-description'
        },
        view: '3d',
        camera: cameras.twelveBedVillasWide
      },
      {
        id: 'context-7',
        view: '3d',
        camera: { ...cameras.twelveBedVillasWide }
      },

      {
        id: 'context-8',
        text: {
          header: "4 - 12-bed Villas - Children's unit",
          content:
            'The Lake Alice Child and Adolescent Unit was set up in 1972 in a 12-bed villa for boys which was known as villa 10. A second 12-bed villa for boys was added later in 1972 which was known as villa 11.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=62'
        },
        view: '3d',
        camera: { ...cameras.twelveBedVilla }
      },
      {
        id: 'context-9',
        image: {
          src: 'fc-20230321-00001-R26288977-0001.jpg',
          caption: 'The original twelve bed villas Archway Item ID: R24730915 ',
          source:
            'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE25129143',
          style: 'scrolling'
        },

        view: '3d',
        camera: { ...cameras.twelveBedVilla }
      },
      {
        id: 'context-10',
        view: '3d',
        camera: { ...cameras.twelveBedVilla }
      },
      {
        id: 'context-11',
        // text: {
        //   header: 'Eleven Bed Villa Roof',
        //   content: 'Eleven Bed Villa .',
        //   style: 'scrolling'
        // },
        view: '3d',
        camera: {
          ...cameras.twelveBedVillaAbove
        }
      },
      {
        id: 'context-12',
        text: {
          header: 'Eleven Bed Villa Top Floor',
          content:
            'The first floor of the villa contained two 4-bed dormitories, two single bed rooms, a staff bedroom, toilets and washrooms.',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ElevenBedVillaRoof020_20',
          'ElevenBedVillaRoof020_21'
        ],
        camera: {
          ...cameras.twelveBedVillaAbove
        }
      },
      {
        id: 'context-13',
        text: {
          header: 'Eleven Bed Villa Ground Floor',
          content:
            'The ground floor had a day room, a kitchen and dining room, as well as staff quarters and an office.',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          // 'ElevenBedVillaRoof_20',
          // 'ElevenBedVillaRoof_20_1',
          // 'ElevenBedVillaRoof020',
          // 'ElevenBedVillaRoof020_1',
          'ElevenBedVillaRoof020_20',
          'ElevenBedVillaRoof020_21',

          // 'ElevenBedVillaFirstFloor020_',
          // 'ElevenBedVillaFirstFloor020_1',
          // 'ElevenBedVillaFirstFloor020_2',
          // 'ElevenBedVillaFirstFloor020_3',
          // 'ElevenBedVillaFirstFloor020_4'
        ],
        camera: {
          ...cameras.twelveBedVillaAbove
        }
      },
      {
        id: 'context-14',
        text: {
          header: '6 - Girls Unit',
          content:
            'Although the unit’s dedicated villas housed only boys, Dr Leeks also treated girls at Lake Alice.* Girls were initially housed in the adult admission villa, which accommodated both men and women, but spent their days in the unit. Later, eight to 10 girls were accommodated in one wing of the women’s villa.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=62',
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
        id: 'context-15',
        text: {
          content:
            "As the number of children at Lake Alice grew the 11-bed units were superseded by the larger 36-bed villas. The 36-bed villas opened in 1975. The boys' villa was known as villa 7. The numbering system changed at some point in Lake Alice's history. This created confusion and has been used to undermine survivors testimony.",
          source: 'Redacted-Lake-Alice-Report.pdf#page=62',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      },
      {
        id: 'context-16',
        text: {
          header: 'Roof',
          content: 'The plans for the 36-bed villa were drawn up in 1944.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-17',
        text: {
          header: 'Top Floor',
          content:
            "The top-floor of the children's villa contained two 16-bed dormitories and four secure solitary cells. On the original plans there was a third dormitory but this was ultimately used as a locker room.",
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-18',
        text: {
          header: 'Ground Floor',
          content:
            'The ground-floor had a day room, a kitchen and dining room, as well as staff quarters and an office.',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ChildrensVillaFirstFloor',
          'ChildrensVillaFirstFloor_1',
          'ChildrensVillaFirstFloor_2',
          'ChildrensVillaFirstFloor_3',
          'ChildrensVillaFirstFloor_4',
          'ChildrensVillaFirstFloor_5',
          'ChildrensVillaFirstFloor_6',
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-19',
        text: {
          header: '8 - Maximum Security Villa',
          content:
            "The Maximum Security villa opened in 1965. Otherwise known as the National Security Unit it was Aotearoa's only official psychiatric security institution. It was first used as a temporary prison for men who had been involved in the Mount Eden Prison riot. As a psychiatric secure unit, it saw a riot by patients in 1985. The unit was administered separately to Lake Alice, but a significant number of children were transferred to the villa as punishment for defiant behaviour.",
          source: 'Redacted-Lake-Alice-Report.pdf#page=112',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.maximumSecurity }
      },
      {
        id: 'context-20',
        image: {
          src: 'fc-20230314-00003-R26288153-0001.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton (Photographer: Mr Cleal).',
          source: 'Redacted-Lake-Alice-Report.pdf#page=62',
          style: 'scrolling'
        },

        view: '3d',
        camera: { ...cameras.maximumSecurityClose }
      },
      {
        id: 'context-21',
        view: '3d',
        camera: { ...cameras.maximumSecurityClose }
      },
      // {
      //   id: 'malcolm-12',
      //   image: {
      //     src: 'fc-20210828-00001-FL59130374.jpg',
      //     caption: 'Layout of disturbed patients villa.',
      //     style: 'scrolling'
      //   },
      //   view: '3d',
      //   camera: { ...cameras.adultVilla }
      // },
      {
        id: 'context-22',
        text: {
          header: '9 - Staff on Site',
          content:
            'Many of the staff who worked at Lake Alice lived on site - including Selwyn Leeks. This proximity posed numerous issues not least of which was that it meant whistleblowing was much less likely. Staff housing was located across the site at the North East.',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'DoctorsHouses',
            label: "Doctors' Houses"
          }
        ],
        view: '3d',
        camera: {
          ...cameras.doctorsVillas
        }
      },
      // {
      //   id: 'context-24',
      //   text: {
      //     header: '9 - Staff on Site',
      //     content: 'At the south-east of the site.',
      //     style: 'scrolling'
      //   },
      //   labels: [
      //     {
      //       id: 'StaffVillas',
      //       label: 'Staff Quarters'
      //     }
      //   ],
      //   view: '3d',
      //   camera: {
      //     ...cameras.staffHousingMain
      //   }
      // },
      {
        id: 'context-25',
        text: {
          header: '9 - Staff on Site',
          content: 'Single staff were housed at the south of the site.',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'SingleStaffVillas',
            label: 'Single Staff Quarters'
          }
        ],
        view: '3d',
        camera: {
          ...cameras.singleStaffVillas
        }
      },
      {
        id: 'context-26',
        text: {
          header: '7 - Adults and Children',
          content:
            'Housing disturbed adults so close to children resulted in some incidents of sexual abuse of children by adult patients. This threat was used by the staff according to Malcolm, "The only time you\'d interact with an adult patient was when you were threatened with being locked in with adults in the secure unit. It was another threat on the top of the threat of ECT."',
          source: 'Redacted-Lake-Alice-Report.pdf#page=129',
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
        id: 'context-27',
        text: {
          header: '9 - Torture',
          content:
            "The use of unmodified ECT was combined with the sedative Paraldehyde - an excruciatingly painful injection - has been formally recognised in the Abuse in Care Royal Commission of Inquiry's final report on the Child and Adolescent Unit and by the United Nations Committee Against Torture.",
          style: 'scrolling'
        },
        labels: [
          {
            id: 'Villa15',
            label: "Adult's Villa"
          }
        ],
        view: '3d',
        camera: {
          ...cameras.adultVilla
        }
      },
      {
        id: 'context-28',
        text: {
          header: '10 - Demolition',
          content:
            'The Child and Adolescent Unit finally closed in 1978 and Lake Alice Psychiatric Hospital was closed in 1999. Lake Alice was finally demolished starting in 2016 and completed in 2018. The site is now a private working farm.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.default
        }
      }
    ]
  },
  '/pathways': {
    pages: [
      {
        id: 'pathways-introduction-2',
        text: {
          content: 'Pathways'
        },
        view: '3d',
        camera: { ...cameras.default }
      },
      {
        id: 'pathways-2',
        text: {
          content:
            "Many of the files that describe how children came to be at Lake Alice have been lost or destroyed. Children were placed in Lake Alice from a number of paths. Most, like Malcolm, came from family homes, many that may have been under supervision of the Department of Social Welfare. Roughly half were admitted by the Department of Social Welfare. Of these children they were referred from a mix of home, state residences, hospitals, foster homes and other contexts including faith-based residences. Residences weren't fixed so many children experienced insecurity as they were frequently moved between state, foster and home care.  These contexts also shared high levels of physical, psychological and sexual abuse. Of an estimated 655 000 people who went through care 200 000 may have been abused in care according to a report commissioned by the Royal Commission. Lake Alice was a part of a sprawling network of care contexts - it was the ultimate punishment for any children who challenged this system.",
          source: 'Abuse-in-Care-Volume-One.pdf#14',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.default }
      },
      {
        id: 'pathways-3',
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
        id: 'pathways-4',
        text: {
          header: '2 - Home',
          content:
            'The most common referral to Lake Alice for children was from home. Foster care homes were another source of children for Lake Alice.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=69',
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
        id: 'pathways-5',
        text: {
          header: '3 - State Residences - Lake Alice hub',
          content:
            "The first cohort of children arrived at Lake Alice in 1972 including children from Kohitere Boys' Training Centre, Hokio Beach School and Holdsworth. Leeks worked as a consultant at both Kohitere and Hokio and he personally referred children to Lake Alice.*",
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },

        view: 'map',
        map: {
          ...hubLocation,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: {
              points: [
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
              ]
            },
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
            }
          }
        }
      },
      {
        id: 'pathways-6',
        text: {
          header: 'Kohitere',
          content:
            'Kohitere Boy’s Training Centre was part of a network of National State Care facilities. Situated several miles outside of Levin this remote facility included a secure solitary cell block. Kohitere held over 100 boys at one point and was notorious for physical and sexual abuse.',
          style: 'scrolling'
        },
        image: {
          src: 'fc-20190219-00006-HP5-4009 (2).jpg',
          style: 'static'
        }
      },

      {
        id: 'pathways-7',
        text: {
          header: '4 - State Residences',
          content:
            'Children in the the State care system were often transferred between residences. The system operated as a network with Lake Alice used as a final destination for the children how caused most trouble rebelling against abuse in the system imposed on them. By 1976, Lake Alice was receiving children from all over the country.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: {
              colour: '#ff0000',
              points: [...stateCareFacilities]
            },
            style: 'animated'
          }
        }
      },
      {
        id: 'pathways-9',
        text: {
          header: '6 - Hospital',
          content:
            'Many children were referred from psychiatric and psychopaedic hospitals across Aotearoa. Child health clinics also referred children to Lake Alice including the child health clinic at Whanganui where Leeks worked. Whanganui was a major source of referrals.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Lake Alice',
                latitude: -40.1254336,
                longitude: 175.3369864
              }
            ],
            minorPoints: {
              colour: '#0000ff',
              points: [...psychiatricFacilities]
            },
            style: 'animated'
          }
        }
      },
      {
        id: 'pathways-10',
        text: {
          header: '6 - Numbers',
          content:
            'The Royal Commission estimated that 400 and 450 children went through Lake Alice between 1970 and 1980. Half of these came from home and half from care placements. Admissions peaked in 1974 at 82. Some children were admitted more than once.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=66',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.siteCamera, isRotating: true }
      },
      {
        id: 'pathways-11',
        text: {
          header: '7 - Ages',
          content:
            'The median age of children by the Department of Social Welfare at Lake Alice was 13 - the youngest was eight. Although a four-year-old was on site with his mother at Lake Alice the youngest child treated there was just five years old.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      },
      {
        id: 'pathways-12',
        text: {
          header: '8 - Maori and Pasifika',
          content:
            'The ethnicity of children at Lake Alice was poorly recorded. Through records the Royal Commission obtained 63 percent European and 34 percent Māori or Māori-Pacific. This showed an over-representation of Māori who had a smaller population base. More Māori admissions came from State, foster care and hospitals.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=74',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      },
      {
        id: 'pathways-13',
        text: {
          header: '9 - Gender',
          content:
            'There were 165 boys admitted to the Child and Adolescent Unit and 38 girls (including one intersex survivor).',
          source: 'Redacted-Lake-Alice-Report.pdf#page=73',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      },
      {
        id: 'pathways-14',
        text: {
          header: '10 - Impact',
          content:
            'Lake Alice had a profound life-long negative impact on the children that it was meant to help. Survivors have experienced severe mental health issues like depression and anxiety. Memory loss from ECT. Some continue to be on medication to help with PTSD. Some have committed suicide.  Survivors have experienced difficulty with relationships, education, employment and some have been incarcerated. The impact of intergenerational trauma on whānau across Aotearoa is seen in the negative statistics of over representation that are so often shared today today of incarceration and child abuse. Survivors have received minimal support from the State and yet many survivors have endured and shown incredible resiliency fighting for decades for redress and accountability.',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      }
    ]
  },
  '/justice': {
    pages: [
      {
        id: 'justice-introduction-1',
        view: '3d',
        text: {
          content: 'Justice'
        },
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-introduction-2',
        view: '3d',
        text: {
          content: 'Justice'
        },
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-introduction-2',
        view: '3d',
        text: {
          content: 'Justice'
        },
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-2',
        text: {
          header: '1 - Intro',
          content:
            'Whilst the experiences of the children at Lake Alice were horrific at the time their experiences as adults of trying to gain accountability against the perpetrators of abuse and redress from the State have an equally horrific aspect. As early as 1973 there was a complaint of abuse at Lake Alice. In 1974 acting chief educational psychologist Don Brown raised concerns about the improper use of ECT with Dr Sydney Pugmire  the hospital’s medical superintendent.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-4',
        text: {
          header: '3 - CCHR',
          content:
            "Lake Alice's isolation contributed to the lack of oversight of Leeks and other staff members. Although independent (?) inspections did occur, as Malcolm recalls staff prepared for them by threatening the children with ECT. The Citizens Commission on Human Rights (CCHR) gained access to Lake Alice in 1976 and were able to raise concerns in national media over how the children there were treated.",
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-5',
        text: {
          header: '4 - Whistleblower',
          content:
            'In 1976 fourteen year-old Hake Halo and whistle blower Lyn Fry brought conditions at Lake Alice to national attention. Fry was a Department of Education psychologist who had recommended Hakeagapuletama be sent to Hokio Beach School in December 1974. Instead, the Department of Social Welfare sent Hake to Lake Alice. When Fry learned this she approached the Auckland Committee on Racism and Discrimination (ACORD). ',
          style: 'scrolling',
          source:
            'Witness-statement-of-Oliver-Sutherland-for-Lake-Alice-Child-and-Adolescent-Unit-hearing-v2-1.pdf#page=4'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-6',
        text: {
          header: '5 - Hake Halo',
          content:
            "Hake had already attempted to raise the alarm about Lake Alice. The children at Lake Alice had to write letters home in English. Hakeagapuletama added a drawing of a smiling stickman to his letter with a speech bubble that said: “Fakasoka he faoa au, mo huki au, mamahi, tagi au”. In English this means: “Mum, the people are giving me electric shocks and injections, it’s painful, I’m crying”. Dr Oliver Sutherland from the Auckland Committee on Racism and Discrimination (ACORD) met with the family after Lyn Fry alerted ACORD to what was happening at Lake Alice. Sutherland introduced the family to New Zealand Herald's Medical Correspondent, Peter Trickett. *The front-page feature published on the 15 December 1976 that Trickett wrote lead to questions being raised in Parliament and eventually a national Inquiry.*",
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=173'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-7',
        text: {
          header: '6 - Inquiries 1976',
          content:
            'A series of inquiries followed including an Ombudsman inquiry and a Medical Council Inquiry.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-8',
        text: {
          header: '7 - Court cases',
          content:
            'In the 1990s, two Lake Alice survivors, Ms Leoni McInroe (1994) and Mr DW (1997), filed claims in the High Court for the abuse they suffered at Lake  Alice. From early 1997, lawyer Grant Cameron also began discussions with the Crown on behalf of a large group of Lake Alice survivors.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-8',
        image: {
          caption:
            "The Court of Appeal dismisses Leoni McInroe and Paul Lucas's case against Selwyn Leeks on a technicality.",
          src: 'fc-20230323-00001-Screenshot 2023-03-23 at 2.59.57 PM.jpg',
          style: 'document'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-9',
        text: {
          header: '8 - First Police Investigation 1977 - 1978',
          content:
            'The first NZ Police investigation begins in 1977 lead by Detective Senior Sergeant, Rob Butler. Butler interviews Leeks first who describes the complainants and other children as "really the bottom-of-the-barrel kids from Hokio, Kohitere and Holdsworth, who could not manage them. They were anti-social and destructive kids”. Only ten days after, having spoken to three of the six complainants and no staff members Butler says he believes there is “no possibility of [laying] criminal charges”. He still has no expert medical opinion. Staff were then interviewed but allegations were not always put to them. Another 44 children that Leeks gave ECT to were never contacted. His report concluded evidence was insufficient for charges under the Mental Health Act 1969. NZ Police\'s legal advisor also made the same conclusion.',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-8',
        image: {
          caption: 'Commissioner of Police, Ken Burnside ',
          src: 'fc-20220710-00001-nlnzimage.jpg',
          style: 'document'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-10',
        text: {
          header: '9 - Police Bias',
          content:
            "Throughout their investigations in this period police displayed bias against the survivors as credible witnesses, mirroring Leeks' view  of the children as  “bottom-of-the-barrel kids” who were “anti-social and  destructive”. Racism, ableism, homophobia and transphobia all played a part in this.",
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=314'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-11',
        text: {
          header: '10 - 2001 -The Gallen Report',
          content:
            'In 2001, High Court judge Sir Rodney Gallen determines how the $6.5 million would  be distributed among the 95 claimants. Gallen also wrote a report to accompany the compensation. Crown Law attempted to block publication of the report but this was overturned by the High Court and parts of the report that summarised claimants’ evidence were published. In his report retired High Court judge, Sir Rodney Gallen details children living in unimaginable terror at an institution intended for care. It includes many horrific and disturbing revelations. At Lake Alice the hospital used Electroconvulsive Therapy (ECT) as an aversion therapy to punish anything from poor school work to running away. An ECT unit had been brought into the dining room to encourage children to eat their meals if they were reluctant. Several claimants reported ECT being administered to their genitals, imposed when accused of unacceptable sexual behaviour. In addition to ECT the drug paraldehyde, administered by painful injection, was also used as a form of punishment. Children were held naked in solitary confinement with only a mattress and a bucket for toilet facilities. Children were also placed with criminally insane adults as punishment; one 15-year-old boy was locked in a wooden cage with a seriously disturbed adult patient. Many of the children experienced sexual abuse by both staff and adult patients. The report found the majority of children at Lake Alice had behavioural rather than psychiatric issues. Gallen found that these incidents, taken with corroborative evidence, lead him to conclude that these incidents did occur.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=267'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-12',
        text: {
          header: '11 - The Apology',
          content:
            'On the 7 October 2001, Prime Minister Helen Clark and Health Minister Annette King make a qualified apology to each of the 95 claimants for the abuse they suffered.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=285'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-13',
        text: {
          header: '12 - Second Police Investigation  2003 - 2005',
          content:
            'In 2003, Grant Cameron passes the survivors witness statements and files to NZ Police and asks them to investigate the allegations of criminal conduct. Superintendent Graham Emery reviewed the files and believes there are "public interest reasons" for an investigation. 15 months pass Detective  Superintendent Larry Reid is assigned the investigation. Reid doesn\'t believe the investigation is warranted and says so when he contacts the Deputy Solicitor-General Ms Nicola Crutchley, at Crown Law in June 2003. He only passes one file - Hake Halo\'s - to the Deputy Solicitor-General which means the systemic nature of abuse at Lake Alice is not apparent. 10 months pass and the Deputy Solicitor-General finds "insufficient evidence" for laying criminal charges. She does recommend further police conduct further investigation particularly over teh use of ECT. NZ Police fail to do this until 2006.  2004 Inspector Jim Taare interviews Hake Halo and finds sufficent evidence to start a criminal investigation. His report has gone missing. More files including survovor testimony goes "missing" including a surivors statement alleging Leeks raped her. Reid misinterprets Crown Law\'s advice saying they have advised against invetsigating teh use of the ECT machine. Reid doesn\'t contact or interview any of the survivors and none of the six staff accused of abuse. Reid told the Royal Commission that he failed to investigate further as without corrobaroative evidence it was only the word of the survivors and his opinion was that they were not credible witnesses. Even though he hadn\'t interviewed any of them. NZ Police dismiss complaints against Dr Selwyn Leeks and staff at Lake Alice.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=307'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-13',
        text: {
          header: '13 - Australia',
          content:
            "In 2003, The Victorian medical board receive legal advice saying it has jurisdiction to investigate Leek's past at Lake Alice. The board were asked by the Royal Australian and New Zealand College of Psychiatrists to assess whether Leeks is fit to practise. Separately, in 2004 the Victorian Medical Practitioners Board also investigate claims in Australia by a former female patient accusing Leeks of sexual misconduct when he treated her for anxiety in Melbourne in 1979-80. After a three year investigation, the Victorian Medical Practitioners Board bring thirty-nine disciplinary charges against Leeks. Leeks agrees to stop working as a psychiatrist on the eve of the disciplinary hearing by the Victorian Medical Practitioners Board. By agreeing not to work anymore Leeks escapes a full public investigation.",
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
            minorPoints: {
              points: [
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
            },
            lines: {
              target: {
                label: 'Melbourne',
                latitude: -37.971237,
                longitude: 144.4926947
              },
              points: [
                {
                  label: 'Lake Alice',
                  latitude: -40.1254336,
                  longitude: 175.3369864
                }
              ]
            }
          }
        }
      },
      {
        id: 'justice-14',
        image: {
          caption: 'Lake Alice Investigation Completed - No Charges Laid.png',
          src: 'fc-20230323-00002-Lake Alice Investigation Completed - No Charges Laid.jpg',
          style: 'document'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-14',
        text: {
          header: '13 - Third Police Investigation 2006 - 2010',
          content:
            'Back in New Zealand, Detective Superintendent Malcolm Burgess inherits the investigation from Reid. His plan for a comprehensive investigation is rejected by Assistant Commissioner Peter Marshall and Detective Superintendent Nick Perry as they believe it would take up too many resources. Burgess and Perry decide to focus on Leeks and the misuse of the ECT machine. The allegations against the other staff, and of wider sexual and physical abuse, use of Paraldyhde are not investigated. Again the police fail to speak to the complainants - they only speak with one after the complainant instigated contact and don\'t speak with another who also instigated contact. Again, multiple allegations of sexual assault and rape including that Leeks had raped one of the survivors were dismissed and no interviews were conducted. Without interviewing survivors making a decision about the credibility of their evidence appears deeply flawed but that is exactly what NZ Police did. Staff were interviewed this time but in a "general way" and in regard to Leeks and ECT not the other allegations.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=308'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-15',
        index: 15,
        image: {
          caption:
            'Operation Lake Alice concluded - criminal charges filed.png',
          src: 'fc-20230323-00001-Operation Lake Alice concluded - criminal charges filed.jpg',
          style: 'document'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-15',
        index: 15,
        text: {
          header: '14 - Fourth Police Investigation - 2018 - 2021',
          content:
            'In 2017 the National Adult Sexual Assault Team became aware of the Lake Alice file as a result of an Official Information Act request made by an investigative journalist. NZ Police decide to investigate the sexual complaints made by three of the survivors including Malcolm who they had previously dismissed in November 2018 and *when he first reported to them*. The United Nations Committee against Torture released its decision in December 2019 that New Zealand had been in breach of its obligations under the Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment by failing to investigate Mr Zentveld’s complaint. At this point NZ Police decide to launch a wider investigation into all of the Lake Alice allegations.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=316'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-15',
        index: 15,
        image: {
          caption:
            '12th June 2022 the United Nations Committee against Torture adopt Malcolm Richards complaint against the Crown for a "Lack of prompt and impartial investigation; right to an effective domestic remedy and redress."',
          src: 'fc-20220628.jpg',
          style: 'document'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        index: 16,
        text: {
          header: '15 - United Nations Committee Against Torture',
          content:
            'Although New Zealand didn\'t ratify the United Nations Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment the United Nations Committee against Torture recognises that a prohibition against torture exists from the inception of the Universal Declaration of Human Rights. In each of its reports to the UN 1992, 1997 and 2002 the Crown made no mention of survivors complaints or the police investigation into Lake Alice. It wasn\'t until 2010 that the Crown acknowlegded there was "improper treatment" at Lake Alice. In the same year, the Citizens Commission on Human Rights wrote to UNCAT to complain that no one had been held accountable. The UN send a please explain letter to the NZ Government. The Govt respond by saying the police act independently and complaints should be made through the Independent Police Complaints Authority. In 2019, the committee found in favour of Lake Alice survivor Paul Zentveld, saying New Zealand had failed to adequately investigate his complaint and failed to provide fair and adequate redress for the abuse he suffered. And then, in 12 May 2022 Malcolm Richards complaint to the committee was also recognised.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=327'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      }
    ]
  },
  '/about': {
    pages: [
      {
        id: 'about-introduction-1',
        index: 1,
        text: {
          content: 'About'
        },
        view: 'markdown',
        content: {
          file: 'about'
        }
      }
      // {
      //   id: 'about-introduction-2',
      //   index: 1,
      //   text: {
      //     content: 'About'
      //   }
      // },
      // {
      //   id: 'about-1',
      //   index: 2,
      //   text: {
      //     content: 'About'
      //   },
      //   view: 'markdown',
      //   content: {
      //     file: 'about'
      //   }
      // }
    ]
  },
  '/': {
    pages: [
      {
        id: 'root-introduction-1',
        index: 1,
        text: {
          content: 'Introduction'
        },
        image: {
          src: 'site-animated.gif'
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
  }
}
// chapter

// page
//

export default data
