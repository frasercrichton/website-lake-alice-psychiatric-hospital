import stateCareFacilities from '../config/state-care-facilities.json'
import psychiatricFacilities from '../config/psychiatric-facilities.json'

const stateCareUnlabeled = stateCareFacilities.filter(function (facility) {
  delete facility.label
  return true
})

const psychiatricFacilitiesUnlabeled = psychiatricFacilities.filter(function (
  facility
) {
  delete facility.label
  return true
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
        id: 1,
        index: 1,
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
      {
        id: 1,
        index: 1,
        image: {
          src: 'site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 2,
        index: 2,
        text: {
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
          content: 'Lake Alice Child and Adolescent Unit opened in 197x.',
          style: 'static'
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
          style: 'scrolling',
          caption:
            'Malcolm Richards spent three months at the Lake Alice Child and Adolescent Unit in 1975 when he was 15. During his time at Lake Alice Malcolm was subjected to Electroconvulsive therapy (ECT) used as punishment and sexual abuse. For almost fifty years Malcolm and the other survivors of Lake Alice have battled against the State for accountability and redress.'
        },
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
        id: 3,
        index: 3,
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
        id: 4,
        index: 4,
        text: {
          header: '4 - Arrival',
          content:
            "Malcolm was left at the Boys' Villa by his mum with Dr Selwyn Leeks - the Director of the unit. Neither Malcolm nor his mother were made aware of or asked to consent to Electroconvulsive therapy. ",
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
        id: 5,
        index: 5,
        image: {
          src: 'fc-20130307-00001-2013P_Pi293_006718.jpg',
          style: 'scrolling',
          caption:
            'Dr Selwyn Robert Leeks, Director of the Manawaroa Centre for Psychological Medicine',
          source:
            'https://manawatuheritage.pncc.govt.nz/item/b4f42c5b-15c9-4425-98ce-992873e5525f#tab-item-description'
        },
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
        id: 6,
        index: 6,
        text: {
          header: '5 - First night',
          content:
            "The boy's unit comprised of a kitchen, dinning room, day room and upstairs a dormitory and four secure solitary confinement cells. The unit housed x number of boys at that time.",
          style: 'scrolling'
        },
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
        id: 7,
        index: 7,
        text: {
          header: '6 - A Typical day',
          content:
            'Malcolm described life in the Boys\' Villa as like being in the military "If you weren\'t on time you got punished, if you made too much noise you got punished." Punishment could mean anything from solitary confinement, ECT given without anaesthetic or painful Paraldhyde injections. Malcolm\'s life at Lake Alice was lonely and brutal, "You kept yourself to yourself."',
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
        id: 8,
        index: 8,
        text: {
          header: '7 - ECT',
          content:
            "Electroconvulsive therapy (ECT) was used at Lake Alice in two ways. Modified ECT where patients were anaesthetised prior to being treated and un-modified ECT with no anaesthetic. Un-modified ECT was introduced as an aversion therapy by Leeks in 1972. Controversial even at the time aversion therapy was a punishment reward system that was used ‘treat’ addiction, homosexuality, trans-people. At Lake Alice un-modified ECT's use was far removed from any form of therapy. ECT was used as an arbitrary punishment.",
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
        id: 9,
        index: 9,
        text: {
          header: '8 - ECT - Villa',
          content:
            '"I was in a ward with other people getting ECT three times a week where they’d bring the trolley down one side and up the other and save the children to last and just put you to sleep and give you ECT to the head. The wait for your turn was worse than the ECT. It wasn’t worse than having ECT while you were awake - that pain is indescribable. If you are old enough to have an old black and white TV and transmission used to end and the end of the night and the TV would make a real buzzing noise and you’d see the black and white speckles on the screen that’s exactly what you saw in your eyes while the current was going through. The pain was horrendous." Recovery was as excruciating; "like you\'d been in a ring with a boxer".',
          style: 'scrolling'
        },
        image: {
          src: 'fc-20210619-00006-Scan 2.jpg ',
          caption:
            'Drawing by Malcolm Richards of the dormitory used for ECT. Adults were given ECT first and children last.',
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
        id: 10,
        index: 10,
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
        id: 11,
        index: 11,
        text: {
          header: '10 - Consequences',
          content:
            "When he was caught trying to escape he was placed in a solitary secure cell back in the boys' unit. In despair Malcolm attempted suicide in the cell. He was found still alive, stripped naked,  given unmodified ECT as punishment until he passed out. He was sexually assaulted whilst unconscious and then left alone to recover.",
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
        id: 12,
        index: 12,
        text: {
          header: '11 - Afterwards',
          content:
            'After this incident Malcolm was given ECT three times a week.',
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
        id: 13,
        index: 13,
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
                },
                {
                  label: 'Waipukurau',
                  latitude: -40.0309529,
                  longitude: 176.5278439
                },
                {
                  label: 'Pahiatua',
                  latitude: -40.7491005,
                  longitude: 176.1375833
                },
                {
                  label: 'Napier',
                  latitude: -39.4794044,
                  longitude: 176.7985016
                },
                {
                  label: 'Welsford',
                  latitude: -36.2858116,
                  longitude: 174.4447237
                },
                {
                  label: 'Kaiwaka',
                  latitude: -36.2160784,
                  longitude: 174.3493232
                },
                {
                  label: 'Auckland North Shore',
                  latitude: -36.7494681,
                  longitude: 174.5825004
                },
                {
                  label:
                    'Auckland Hospital (including the Connelly Unit and Te Whetu Tawera)',
                  latitude: -36.8605068,
                  longitude: 174.7674006
                },
                {
                  label: 'South Auckland',
                  latitude: -36.9914801,
                  longitude: 174.8690175
                },
                {
                  label: 'Napier',
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
        id: 1,
        index: 1,
        text: {
          header: 'Context',
          content: '',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
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
          far: 10000,
          isRotating: true
        }
      },
      {
        id: 2,
        index: 2,
        text: {
          header: '2 - Adult Psychiatric Facility',
          content:
            'Lake Alice opened in 1950 as an adult psychiatric facility and specialised in treating men returning from the war with post-traumatic stress disorder.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
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
          caption: 'The original eleven bed villas Archway Item ID: R24730915 ',
          source:
            'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE25129143',
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
          header: '3 - 12-bed Villas',
          content:
            'Originally the small 12 bed villas were intended for intensive group therapy. At the time this was a pioneering approach.',
          source:
            "In Defence of Theodore Gray: Architecture as a Vehicle for Re-evaluating a Doctor's Commitment to Patient Care (January 2017, Rebecca J. McLaughlan)",
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
          header: "4 - 12-bed Villas - Children's unit",
          content:
            'The Lake Alice Child and Adolescent Unit was set up in 1972  in a 12-bed villa for boys which was known as villa 10. A second 12-bed villa for boys was added later in 1972 which was known as villa 11. As the number of children at Lake Alice grew these units were superseded by the larger 36-bed villas.',
          style: 'scrolling',
          source: 'Redacted-Lake-Alice-Report.pdf#page=62'
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
        id: 7,
        index: 7,
        text: {
          header: '8 - Maximum Security Villa',
          content:
            "The Maximum Security villa opened in 1965. Otherwise known as the National Security Unit it was Aotearoa's only official psychiatric security institution. It was first used as a temporary prison for men who had been involved in the Mount Eden Prison riot. As a psychiatric secure unit, it saw a riot by patients in 1985. The unit was administered separately to Lake Alice, but a significant number of children were transferred to the villa as punishment for defiant behaviour.",
          source: 'Redacted-Lake-Alice-Report.pdf#page=112',
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
        id: 8,
        index: 8,
        text: {
          content:
            "The 36-bed villas opened in 1975 replacing the smaller 12-bed units. The boys' villa was known as villa 7. The numbering system changed at some point in Lake Alice's history. This created confusion and has been used to undermine survivors testimony.",
          source: 'Redacted-Lake-Alice-Report.pdf#page=62',
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
        id: 9,
        index: 9,
        image: {
          src: 'fc-20210828-00001-FL25129125.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton (Photographer: Mr Cleal).',
          source: 'Redacted-Lake-Alice-Report.pdf#page=62',
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
        id: 10,
        index: 10,
        text: {
          header: '9 - Staff on Site',
          content:
            'Many of the staff who worked at Lake Alice lived on site including Selwyn Leeks.',
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
        id: 11,
        index: 11,
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
        id: 12,
        index: 12,
        text: {
          header: '9 - Torture',
          content:
            "The use of unmodified ECT was combined with the sedative Paraldehyde - an excruciatingly painful injection - has been formally recognised in the Abuse in Care Royal Commission of Inquiry's final report on the Child and Adolescent Unit and by the United Nations Committee Against Torture.",
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
      },
      {
        id: 13,
        index: 13,
        text: {
          header: '10 - Demolition',
          content:
            'The Child and Adolescent Unit finally closed in 1978 and Lake Alice Psychiatric Hospital was closed in 1999. Lake Alice was finally demolished starting in 2016 and completed in 2018. The site is now a private working farm.',
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
  '/pathways': {
    pages: [
      {
        id: 1,
        index: 1,
        text: {
          header: '1- Intro',
          content:
            "Many of the files that describe how children came to be at Lake Alice have been lost or destroyed. Children were placed in Lake Alice from a number of paths. Most, like Malcolm, came from family homes, many that may have been under supervision of the Department of Social Welfare. Roughly half were admitted by the Department of Social Welfare. Of these children they were referred from a mix of home, state residences, hospitals, foster homes and other contexts including faith-based residences. Residences weren't fixed so many children experienced insecurity as they were frequently moved between state, foster and home care.  These contexts also shared high levels of physical, psychological and sexual abuse. Of an estimated 655,000 people who went through care 200, 000 may have been abused in care according to a report commissioned by the Royal Commission. Lake Alice was a part of a sprawling network of care contexts - it was the ultimate punishment for any children who challenged this system.",
          source: 'Abuse-in-Care-Volume-One.pdf#14',
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
          header: '2 - Home',
          content:
            'The most common referral to Lake Alice for children was from home.',
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
        id: 2,
        index: 2,
        text: {
          header: '2 - Home',
          content:
            'The most common referral to Lake Alice for children was from home.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=69',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national
        }
      },
      {
        id: 3,
        index: 3,
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
        id: 4,
        index: 4,
        text: {
          header: 'Kohitere',
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus error blanditiis minus. Perspiciatis dignissimos earum mollitia quasi placeat quaerat itaque dolore odio veniam, cupiditate nobis. Optio culpa minus neque porro?',
          style: 'scrolling'
        },
        image: {
          src: 'fc-20190219-00006-HP5-4009 (2).jpg',
          caption: 'Kohitere [Fraser Crichton]',
          style: 'static'
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
              colour: '#ff0000',
              points: [...stateCareFacilities]
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
            minorPoints: { colour: '#ff0000', points: [...stateCareUnlabeled] }
          }
        }
      },
      {
        id: 6,
        index: 6,
        text: {
          header: '5 - Foster Care and Family Homes',
          content:
            'Foster care homes across Aotearoa were another source of children for Lake Alice.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=67',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national
        }
      },
      {
        id: 7,
        index: 7,
        text: {
          header: '6 - Hospital',
          content:
            'Many children were referred from psychiatric and psychopaedic hospitals across Aotearoa. Child health clinics also referred children to Lake Alice including the child health clinic at Whanganui where Leeks worked. Whanganui was a mjor source of referrals.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: 'map',

        map: {
          ...national,
          visibleMapLayers: {
            minorPoints: {
              colour: '#0000ff',
              points: [...psychiatricFacilitiesUnlabeled]
            }
          }
        }
      },
      {
        id: 8,
        index: 8,
        text: {
          header: '6 - Numbers',
          content:
            'The Royal Commission estimated that 400 and 450 children went through Lake Alice between 1970 and 1980. Half of these came from home and half from care placements. Admissions peaked in 1974 at 82. Some children were admitted more than once.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=66',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national
        }
      },
      {
        id: 9,
        index: 9,
        text: {
          header: '7 - Ages',
          content:
            'The median age of children by the Department of Social Welfare at Lake Alice was 13 - the youngest was eight. Although a four-year-old was on site with his mother at Lake Alice the youngest child treated there was just five years old.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },

        view: 'map',
        map: {
          ...national
        }
      },
      {
        id: 10,
        index: 10,
        text: {
          header: '8 - Maori and Pasifika',
          content:
            'The ethnicity of children at Lake Alice was poorly recorded. Through records the Royal Commission obtained 63 percent European and 34 percent Māori or Māori-Pacific. This showed an over-representation of Māori who had a smaller population base. More Māori admissions came from State, foster care and hospitals.',
          source: 'Redacted-Lake-Alice-Report.pdf#page=74',
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
          }
        }
      },
      {
        id: 11,
        index: 11,
        text: {
          header: '9 - Gender',
          content:
            'There were 165 boys admitted to the Child and Adolescent Unit and 38 girls (including one intersex survivor).',
          source: 'Redacted-Lake-Alice-Report.pdf#page=73',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national
        }
      },
      {
        id: 12,
        index: 12,
        text: {
          header: '10 - Impact',
          content:
            'Lake Alice had a profound life-long negative impact on the children that it was meant to help. Survivors have experienced severe mental health issues like depression and anxiety. Memory loss from ECT. Some continue to be on medication to help with PTSD. Some have committed suicide.  Survivors have experienced difficulty with relationships, education, employment and some have been incarcerated. The impact of intergenerational trauma on whānau across Aotearoa is seen in the negative statistics of over representation that are so often shared today today of incarceration and child abuse. Survivors have received minimal support from the State and yet many survivors have endured and shown incredible resiliency fighting for decades for redress and accountability.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...national
        }
      }
    ]
  },
  '/justice': {
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
          source: '',
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
          source: '',
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
        id: 5,
        index: 5,
        image: {
          src: 'fc-20220628.jpg',
          caption: 'Committee Against Torture',
          source: '',
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
            }
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
export default data
