import stateCareFacilities from '../config/state-care-facilities.json'
import psychiatricFacilities from '../config/psychiatric-facilities.json'
import cameras from '../config/cameras.js'
import location from './location'

const lakeAliceLocation = {
  label: 'Lake Alice',
  latitude: -40.1254336,
  longitude: 175.3369864
}

const sortByOpeningYear = list =>
  list.sort((a, b) => parseInt(a.opened) - parseInt(b.opened))

const sortByLabel = list =>
  list.sort((a, b) => {
    if (a.label < b.label) {
      return -1
    }
    if (a.label > b.label) {
      return 1
    }
    return 0
  })

// "id": "bexley-clinic",
//       "label": "Bexley Clinic - Tāmaki Makaurau Auckland",
//       "latitude": -36.8830791,
//       "longitude": 174.8046149

const removeLabels = list => {
  return list.map(({ label, ...list }) => list)
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
      {
        id: 'introduction-introduction-1',
        text: {
          content: 'Introduction'
        },
        image: {
          src: '/images/site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 'introduction-introduction-2',
        text: {
          content: 'Introduction'
        },
        image: {
          src: '/images/site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 'intro-3',
        image: {
          src: '/images/site-animated.gif',
          style: 'static'
        }
      },
      {
        id: 'intro-4',
        text: {
          content:
            'The United Nations Committee Against Torture (UNCAT) found New Zealand in breach of the Convention Against Torture in 2019.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-5',
        text: {
          content:
            'New Zealand had failed to ensure a prompt and impartial investigation into allegations of systematic physical, emotional and sexual child abuse at the Lake Alice Child and Adolescent Unit.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-6',
        text: {
          content:
            "The Child and Adolescent Unit opened in 1972 and closed around 1980 after allegations that electroconvulsive therapy (ECT) and paraldehyde 'aversion therapy' were used as a form of torture to punish children with behavioural issues in the unit.",
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-7',
        text: {
          content:
            'The children held at Lake Alice were disproportionately Māori tamariki.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-8',
        text: {
          content:
            'After civil cases were brought against the Crown, minimal compensation was paid to a group of 95 survivors in 2001. Legal fees swallowed up over a third of this payment.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            "Three of New Zealand's initial periodic reports to UNCAT deliberately excluded all mention of Lake Alice and the survivors’ allegations of torture.",
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            'Two survivors of Lake Alice have since had their complaints recognised by the United Nations – Paul Zentveld in 2020 and Malcolm Richards in 2022.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            'Only in 2021 was a former member of staff charged by the police. No one has ever been convicted.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content: 'New Zealand is still in breach of the convention.',
          style: 'static'
        },
        view: '3d',
        camera: cameras.default
      },
      {
        id: 'intro-9',
        text: {
          content:
            'Fifty years on, when will there be justice for the survivors of Lake Alice?',
          style: 'static'
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
          src: '/images/fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-introduction-2',
        text: {
          content: 'Malcolm'
        },
        image: {
          src: '/images/fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-1',
        text: {
          content:
            "Malcolm Richards spent three months at the Lake Alice Child and Adolescent Unit in 1975 when he was 15. During his time at Lake Alice, Malcolm was subjected to electroconvulsive therapy (ECT) as punishment and was sexually abused. For almost fifty years, Malcolm - and the other survivors of Lake Alice - have battled against the state for accountability and redress. Malcolm's case has been recognised by the United Nations Committee Against Torture.",
          style: 'scrolling'
        },
        image: {
          src: '/images/fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-2',
        text: {
          header: 'Family',
          content:
            "Malcolm grew up in Heretaunga Hastings. His family life was difficult. Both his parents were physically abusive. Malcolm's behaviour at home became disruptive and was exacerbated by being sexually abused by his teacher. This ultimately led to an incident where Malcolm assaulted his father following a domestic violence assault on Malcolm's mother. After the assault, Malcolm's mum took him to see a psychiatrist at Hastings Hospital.",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [
              {
                label: 'Heretaunga Hastings',
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
          header: 'Pathway',
          content:
            'The Hastings psychiatrist placed Malcolm under Public Trust guardianship and told his mum to take Malcolm to the Lake Alice Child and Adolescent Unit for residential treatment.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              points: [
                {
                  label: 'Heretaunga Hastings',
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
          header: 'Arrival',
          content:
            "Malcolm was left at the Boys' Villa by his mum with Dr Selwyn Leeks - the director of the unit. Neither Malcolm nor his mother were made aware of, or asked to consent to, any form of electroconvulsive therapy or aversion.",
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.boysVillaRearCamera001
      },
      {
        id: 'malcolm-5',
        view: '3d',
        camera: cameras.boysVillaRearCamera001
      },
      {
        id: 'malcolm-6',
        text: {
          header: 'First night',
          content:
            'Malcolm recalls being initially taken upstairs to the upstairs locker room and being made to change out of his clothes into clothes provided by Lake Alice.',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'malcolm-7',
        image: {
          src: '/images/fc-20210621-00007-Scan 1.jpg',
          caption:
            "Drawing by Malcolm Richards of the dormitory layout in the Boys' Villa.",
          author: 'Malcolm Richards',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'malcolm-8',
        content:
          "The boy's unit comprised of a kitchen, dinning room, day room and upstairs a dormitory and four secure solitary confinement cells. The unit housed x number of boys at that time.",
        view: '3d',
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'malcolm-9',
        text: {
          header: 'A Typical day',
          content:
            'After his first day, Malcolm described life in the Boys’ Villa as like being in the military, "If you weren\'t on time, you got punished. If you made too much noise, you got punished." Punishment could mean any of the following: solitary confinement, ECT without anaesthetic, or a paraldehyde injection. Paraldehyde was a sedative, but when administered as an injection, was excruciatingly painful. It was so corrosive that it was kept in glass syringes. Malcolm\'s life at Lake Alice was lonely and brutal, "You kept yourself to yourself."',
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
          header: 'ECT - Villa',
          content:
            "Malcolm recalled being given ECT in a ward in the Disturbed Patient's Villa.",
          style: 'scrolling'
        },
        labels: [
          {
            id: 'DisturbedPatientsVilla',
            label: "Disturbed Patient's Villa"
          }
        ],
        view: '3d',
        camera: {
          ...cameras.disturbedPatientsVilla
        }
      },
      {
        id: 'malcolm-11',
        image: {
          src: '/images/fc-20210828-00008-FL59130374(1).jpg',
          caption:
            'Lake Alice Hospital, Bulls - Disturbed patients villa - building floor plans (including information if on same sheet as floor plan) - [copy a].',
          author:
            'Archives New Zealand Te Rua Mahara o te Kāwanatanga, Wellington',
          recordID: 'R23378991',
          URL: 'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE59119710',
          style: 'scrolling'
        },
        view: '3d',
        labels: [
          {
            id: 'DisturbedPatientsVilla',
            label: "Disturbed Patient's Villa"
          }
        ],
        camera: { ...cameras.disturbedPatientsVilla }
      },
      {
        id: 'malcolm-12',
        text: {
          header: 'ECT - Villa',
          content:
            '“I was in a ward with other people getting ECT three times a week. They’d bring the trolley down one side and up the other, saving the children ‘til last, They just put you to sleep and gave you ECT to the head. The wait for your turn was worse than the ECT. It wasn’t worse than having ECT while you were awake - that pain is indescribable. If you are old enough to have an old black and white TV, transmission used to end at the end of the night. The TV would make a real buzzing noise and you’d see the black and white speckles on the screen. That’s exactly what you saw in your eyes while the current was going through. The pain was horrendous."',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'DisturbedPatientsVilla',
            label: "Disturbed Patient's Villa"
          }
        ],
        view: '3d',
        camera: {
          ...cameras.disturbedPatientsVilla
        }
      },
      {
        id: 'malcolm-13',
        image: {
          src: '/images/fc-20210619-00006-Scan 2.jpg ',
          caption:
            'Drawing by Malcolm Richards of the dormitory used for ECT. Adults were given ECT first and children last.',
          author: 'Malcolm Richards',
          style: 'scrolling'
        },
        view: '3d',
        labels: [
          {
            id: 'DisturbedPatientsVilla',
            label: "Disturbed Patient's Villa"
          }
        ],
        camera: {
          ...cameras.disturbedPatientsVilla
        }
      },
      {
        id: 'malcolm-14',
        text: {
          header: 'ECT Ward',
          content:
            'Malcolm recalls being threatened with ECT for refusing to participate in group therapy, "I got into a few fights with boys who tried to put their hands down your pants. I got ECT for fighting with one of them.” The ward was notorious. In one incident, Leeks made children in the unit deliver ECT to another child with a modified ECT unit where the strength of the current could be dialled up. Fridays in the ward were known as “Black Friday” as Leeks typically gave ECT on that day.',
          style: 'scrolling'
        },
        view: '3d',
        labels: [
          {
            id: 'DisturbedPatientsVilla',
            label: "Disturbed Patient's Villa"
          }
        ],
        camera: {
          ...cameras.disturbedPatientsVilla
        }
      },
      {
        id: 'malcolm-15',
        text: {
          header: 'Escape',
          content:
            'Like a number of survivors, Malcolm attempted to escape from Lake Alice. The remoteness of Lake Alice made it difficult for anyone to escape. "It was the ideal place for a secure unit because if someone got out they had miles to go to get anywhere. So it was very safe to put very mentally disturbed people but most of us weren\'t mentally disturbed at all."',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.lakeAliceMediumLocal,
          visibleMapLayers: {
            majorPoints: [lakeAliceLocation]
          }
        }
      },
      {
        id: 'malcolm-16',
        text: {
          header: 'Closest Towns',
          content:
            'The closest towns - Marton and Bulls - were more than 10 km away.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.lakeAliceLocal,
          visibleMapLayers: {
            majorPoints: [lakeAliceLocation],
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
        id: 'malcolm-17',
        text: {
          header: 'Escape',
          content: "Malcolm didn't get far before he was caught.",
          style: 'scrolling'
        },
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        view: '3d',
        camera: { ...cameras.boysVillaAboveAngle }
      },
      {
        id: 'malcolm-17',
        text: {
          header: 'Escape',
          content:
            "He was thrown into a solitary secure cell back in the boys' unit.",
          style: 'scrolling'
        },
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        view: '3d',
        camera: { ...cameras.dormitoryVilla }
      },
      {
        id: 'malcolm-18',
        text: {
          header: 'Consequences',
          content:
            'In despair Malcolm attempted suicide in the cell. He was found still alive by staff who then stripped him naked and administered unmodified ECT as punishment until Malcolm passed out in pain. He was sexually assaulted whilst unconscious and then left alone to recover.',
          style: 'scrolling'
        },
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        view: '3d',
        camera: { ...cameras.cellCamera }
      },

      {
        id: 'malcolm-19',
        text: {
          header: 'Afterwards',
          content:
            'After his escape attempt Malcolm was given ECT three times a week.',
          style: 'scrolling'
        },
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        view: '3d',
        camera: { ...cameras.cellCamera }
      },
      {
        id: 'malcolm-20',
        text: {
          header: 'Runaway',
          content:
            "Not long after this, Malcolm was sent home for Christmas. Knowing he would be sent back to Lake Alice after the holidays he ran away and this time wasn't caught.",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
        id: 'malcolm-21',
        text: {
          header: 'Waipawa',
          content:
            'As a runaway, he moved around the country in fear of being sent back to Lake Alice - some of his time was spent living on the street and sleeping rough. He suffered PTSD and memory loss from the ECT and couldn\'t hold down a regular job. Instead he found short-term work as a manual labourer, dairy worker and "a lot of time between jobs with no job or income".',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
        id: 'malcolm-22',
        text: {
          header: 'Waipukurau',
          content:
            'After running away from home Malcolm initially lived under a bridge at Waipukurau.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
        id: 'malcolm-23',
        text: {
          header: '12 - Runaway',
          content:
            'Malcolm found his way to Pahiatua and worked on a dairy farm.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
        id: 'malcolm-24',
        text: {
          header: 'Napier',
          content:
            'His next move was to Napier where he worked in a factory. Napier was also the first place where Malcolm reported his experience at Lake Alice to the police.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Ahuriri Napier',
                  latitude: -39.4794044,
                  longitude: 176.7985016
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-25',
        text: {
          header: 'Whakapirau Welsford',
          content:
            'He then moved to Whakapirau Welsford and found more dairy farming work.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Whakapirau Welsford',
                  latitude: -36.2858116,
                  longitude: 174.4447237
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-26',
        text: {
          header: 'Kaiwaka',
          content: 'From Welsford to Kaiwaka and worked on a dairy farm.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
        id: 'malcolm-27',
        text: {
          header: 'Runaway',
          content:
            'Moved to the North Shore at Tāmaki Makaurau Auckland and worked drain laying.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Tāmaki Makaurau Auckland North Shore',
                  latitude: -36.7494681,
                  longitude: 174.5825004
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-28',
        text: {
          header: 'Connolly Mental Health Unit',
          content:
            'In Auckland, PTSD from his experience at Lake Alice saw Malcolm admitted to the Connolly Mental Health Unit. After this, Malcolm lived on the street.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                    'The Connelly Unit and Te Whetu Tawera - Tāmaki Makaurau Auckland Hospital',
                  latitude: -36.8605068,
                  longitude: 174.7674006
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-29',
        text: {
          header: 'South Auckland',
          content: "In South Auckland, Malcolm found work in a butcher's shop.",
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Tāmaki Makaurau South Auckland',
                  latitude: -36.9914801,
                  longitude: 174.8690175
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-30',
        text: {
          header: 'Napier',
          content:
            'Malcolm then moved to Ahuriri Napier and worked in several manual labouring jobs.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Ahuriri Napier',
                  latitude: -39.4794044,
                  longitude: 176.7985016
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-31',
        text: {
          header: 'Heretaunga Hastings',
          content:
            'Finally, Malcolm moved to Heretaunga Hastings where he worked in forestry.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Heretaunga Hastings',
                  latitude: -39.6394411,
                  longitude: 176.7794575
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-32',
        text: {
          header: 'Afterwards',
          content:
            'Four years after his escape, Malcolm reported his abuse to the police. “They told me, ‘No way would any of that stuff happen in New Zealand. You are just making this up.’” The police threatened to arrest him for wasting police time.',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            majorPoints: [],
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
                  label: 'Heretaunga Hastings',
                  latitude: -39.6394411,
                  longitude: 176.7794575
                }
              ]
            }
          }
        }
      },
      {
        id: 'malcolm-33',
        text: {
          header: 'Malcolm today',
          content:
            'Today, in 2023, Malcolm still suffers from PTSD and physical symptoms from his time in Lake Alice. Malcolm was almost broken by a system that should have been there for his care and protection. Instead, Malcolm is among a small group of survivors - women, men, trans, Māori, Pasifika, Pākehā, disabled and able-bodied - who have fought for accountability and redress for more than fifty years. Their struggle for justice against the state is also a struggle for tamariki who were broken by Lake Alice.',
          style: 'scrolling'
        },
        // view: '3d',
        // camera: { ...cameras.default }
        image: {
          src: '/images/fc-20211029-00028-FCC2910_FCC2910-R1-E001.jpg',
          style: 'static'
        }
      },
      {
        id: 'malcolm-34',
        image: {
          src: '/images/fc-20211021-00004-FC22100_FC22100-R5-E110-web-2.jpg',
          caption: 'Malcolm Richards, 2019 Heretaunga',
          author: 'Fraser Crichton',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.default
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
        view: 'map',
        map: {
          ...location.national
        }
      },
      {
        id: 'context-introduction-2',
        text: {
          content: 'Context'
        },
        view: 'map',
        map: {
          ...location.national
        }
      },
      {
        id: 'context-1',
        text: {
          header: 'Adult Psychiatric Facility',
          content:
            'Lake Alice Psychiatric Hospital opened in 1950. It was originally an adult psychiatric facility specialising in treating men who had returned from the Second World War with post-traumatic stress disorder. It treated male and female patients with a spectrum of psychiatric issues including the criminally insane.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.national,
          visibleMapLayers: {
            majorPoints: [lakeAliceLocation]
          }
        }
      },
      {
        id: 'context-2',
        text: {
          content:
            'Located in rural farmland on Te Ika-a-Māui, the North Island, Lake Alice was a sprawling geographically isolated complex.',
          style: 'scrolling'
        },
        view: 'map',
        map: location.lakeAliceSite
      },
      {
        id: 'context-3',
        text: {
          content:
            'The hospital operated as an entirely self-contained community where staff lived on-site with patients. With a farm, laundry, butchery, a community hall and latterly a school, the facility was self-sufficient and those living at Lake Alice had limited contact with the outside world.',
          source:
            'https://archivescentral.org.nz/rangitikei-district-council/record/lake-alice-mental-hospital-site-plan',
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
            label: "Disturbed Patients' Villa"
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
        camera: cameras.default
      },
      {
        id: 'context-4',
        text: {
          header: '11-bed Villas',
          content:
            "When it opened in 1950, Lake Alice's 11-bed villas were at the heart of a pioneering approach using intensive group therapy to treat adult mental illness.",
          source: 'https://www.jstor.org/stable/10.5401/healthhist.19.1.0020',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.elevenBedVillasWide
      },
      {
        id: 'context-5',
        view: '3d',
        camera: cameras.elevenBedVilla
      },
      {
        id: 'context-6',
        image: {
          src: '/images/fc-20230321-00001-R26288977-0001.jpg',
          caption: 'The original eleven bed villas',
          recordID: 'R24730915',
          author:
            'Archives New Zealand Te Rua Mahara o te Kāwanatanga, Wellington',
          date: 'October 1967',
          URL: 'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE25129143',
          style: 'scrolling'
        },

        view: '3d',
        camera: cameras.elevenBedVilla
      },
      {
        id: 'context-7',
        view: '3d',
        camera: cameras.elevenBedVilla
      },
      {
        id: 'context-8',
        view: '3d',
        camera: {
          ...cameras.elevenBedVillaAbove
        }
      },
      {
        id: 'context-9',
        text: {
          header: 'Eleven Bed Villa Top Floor',
          content:
            'The first floor of the 11-bed villa comprised two 4-bed dormitories, three single bedrooms, toilets and washrooms.',
          source: 'https://www.jstor.org/stable/10.5401/healthhist.19.1.0020',
          style: 'scrolling'
        },
        view: '3d',
        disable: ['ElevenBedVillaRoof016_2', 'ElevenBedVillaRoof016_3'],
        camera: {
          ...cameras.elevenBedVillaAbove
        }
      },
      {
        id: 'context-10',
        text: {
          header: 'Eleven Bed Villa Ground Floor',
          content:
            'The ground floor had a day room, a kitchen, a laundry and dining room and an office.',
          source: 'https://www.jstor.org/stable/10.5401/healthhist.19.1.0020',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ElevenBedVillaRoof016_2',
          'ElevenBedVillaRoof016_3',
          'ElevenBedVillaFirstFloor016_',
          'ElevenBedVillaFirstFloor016_1',
          'ElevenBedVillaFirstFloor016_2',
          'ElevenBedVillaFirstFloor016_3',
          'ElevenBedVillaFirstFloor016_4'
        ],
        camera: {
          ...cameras.elevenBedVillaAbove
        }
      },
      {
        id: 'context-11',
        image: {
          src: '/images/fc-20130307-00001-2013P_Pi293_006718.jpg',
          style: 'scrolling',
          caption:
            'Dr Selwyn Robert Leeks, Director of the Manawaroa Centre for Psychological Medicine',
          author: 'Stuff Limited',
          date: 'August 12, 1975',
          URL: 'https://manawatuheritage.pncc.govt.nz/item/b4f42c5b-15c9-4425-98ce-992873e5525f#tab-item-description'
        },
        view: '3d',
        camera: cameras.elevenBedVillasWide
      },
      {
        id: 'context-12',
        text: {
          header: 'Adult Psychiatric Facility',
          content:
            'From 1971, Dr Selwyn Leeks accepted responsibility as the psychiatric consultant for all patients at Lake Alice under the age of 17. Dr Sydney Pugmire remained the hospital’s medical superintendent. Leeks also worked at two other child health clinics, one in Whanganui and another at Palmerston North Hospital.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.elevenBedVillasWide }
      },
      {
        id: 'context-13',
        view: '3d',
        camera: { ...cameras.elevenBedVillasWide }
      },
      {
        id: 'context-14',
        text: {
          header: "11-bed Villas - Children's unit",
          content:
            'In 1972, the Lake Alice Child and Adolescent Unit opened. Initially, it housed a small number of boys in an 11-bed villa which was known as Villa 10. A second 11-bed villa was added later in 1972 which was known as Villa 11.  Although never directly appointed, Leeks’ de facto role found him responsible for running the Unit.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=62'
        },
        view: '3d',
        camera: cameras.elevenBedVillaII
      },
      {
        id: 'context-15',
        text: {
          header: "11-bed Villas - Children's unit",
          content:
            'The boys - and later girls - in the Child and Adolescent Unit were a mix of Pakeha, Māori and Pasifika. Many were referred to the Unit from state care institutions across Aotearoa.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=62'
        },
        view: '3d',
        camera: { ...cameras.elevenBedVillaII }
      },
      {
        id: 'context-16',
        view: '3d',
        camera: { ...cameras.elevenBedVillaII }
      },
      {
        id: 'context-17',
        text: {
          header: '6 - Girls Unit',
          content:
            'Girls were initially housed in the adult admission villa - which accommodated both men and women - but spent their days in the 11-bed villa unit. Later, eight to 10 girls were accommodated in one wing of the women’s villa.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=62',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.girlsVilla }
      },
      {
        id: 'context-18',
        text: {
          content:
            'As the number of children in the Child and Adolescent Unit grew, the use of the 11-bed villas was superseded. In 1975, the boys were transferred to a dedicated 36-bed villa known as Villa 7.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=62',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.boysVilla }
      },
      {
        id: 'context-19',
        text: {
          header: 'Roof',
          content: 'The plans for the 36-bed villa were drawn up in 1944.',
          source:
            'https://collections.archives.govt.nz/en/web/arena/search#/entity/aims-archive/R23378995/lake-alice-hospital%2C-bulls---villa-8---building-floor-plans-(including-information-if-on-same-sheet-as-floor-plan)---[copy-a]?q=R23378995&source=aims-archive',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-20',
        text: {
          header: 'Top Floor',
          content:
            "The top floor of the boys' villa contained two 16-bed dormitories and four secure solitary cells. On the original plans, there was a third dormitory, but this was ultimately used as a locker room.",
          source:
            'https://collections.archives.govt.nz/en/web/arena/search#/entity/aims-archive/R23378995/lake-alice-hospital%2C-bulls---villa-8---building-floor-plans-(including-information-if-on-same-sheet-as-floor-plan)---[copy-a]?q=R23378995&source=aims-archive',
          style: 'scrolling'
        },
        view: '3d',
        disable: [
          'ChildrensVillaRoof',
          'ChildrensVillaRoof_1',
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-21',
        text: {
          header: 'Ground Floor',
          content:
            'The ground floor of the villa had a day room, a kitchen and dining room, as well as staff quarters and an office.',
          source:
            'https://collections.archives.govt.nz/en/web/arena/search#/entity/aims-archive/R23378995/lake-alice-hospital%2C-bulls---villa-8---building-floor-plans-(including-information-if-on-same-sheet-as-floor-plan)---[copy-a]?q=R23378995&source=aims-archive',
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
          'ChildrensVillaRoof_2',
          'ChildrensVillaRoof_3'
        ],
        camera: {
          ...cameras.boysVillaAbove
        }
      },
      {
        id: 'context-22',
        text: {
          header: 'Maximum Security Villa',
          content:
            "The adult maximum security villa opened in 1965. Otherwise known as the National Security Unit, it was Aotearoa's only official psychiatric security institution. It was first used as a temporary prison for men who had been involved in the Mount Eden Prison riot. As a psychiatric secure unit, it saw a riot by patients in 1985. The unit was administered separately to Lake Alice, but a significant number of children were transferred to the villa as punishment for defiant behaviour.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=112',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.maximumSecurity }
      },
      {
        id: 'context-23',
        image: {
          src: '/images/fc-20230314-00003-R26288153-0001.jpg',
          caption:
            'Maximum security block at Lake Alice Psychiatric Hospital Marton (Photographer: Mr Cleal).',
          recordID: 'R24730910',
          author:
            'Archives New Zealand Te Rua Mahara o te Kāwanatanga, Wellington',
          date: 'October 1967',
          URL: 'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE86070772',
          style: 'scrolling'
        },

        view: '3d',
        camera: { ...cameras.maximumSecurityClose }
      },
      {
        id: 'context-24',
        view: '3d',
        camera: { ...cameras.maximumSecurityClose }
      },
      {
        id: 'context-25',
        text: {
          header: 'Staff on Site - I',
          content:
            'Many of the staff who worked at Lake Alice lived on-site. This proximity posed numerous issues not least of which was that it meant whistleblowing was much less likely. Staff housing was located across the site in the northeast.',
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
      {
        id: 'context-26',
        text: {
          header: 'Staff on Site - II',
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
        id: 'context-27',
        text: {
          header: 'Staff on Site - III',
          content: 'Staff were housed at the north east of the site.',
          style: 'scrolling'
        },
        labels: [
          {
            id: 'StaffVillas',
            label: 'Staff Quarters'
          }
        ],
        view: '3d',
        camera: {
          ...cameras.staffHousing
        }
      },
      {
        id: 'context-28',
        text: {
          header: '7 - Adults and Children',
          content:
            'Housing disturbed adults so close to children was clearly problematic. Incidents of sexual abuse of children by adult patients occurred and this threat of abuse was also used by staff to intimidate the children.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=129',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.boysVillaRearCamera
      },
      {
        id: 'context-29',
        text: {
          header: '9 - Torture',
          content:
            "Dr Leeks introduced his own brand of 'aversion therapy' to the Lake Alice Child and Adolescent Unit in 1972. Controversial even at the time, aversion therapy was a punishment/reward system. It was used to ‘treat’  addiction or moderate 'deviant behaviour' (which included gay and transgender people).",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=83',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.sitePlan
      },
      {
        id: 'context-30',
        text: {
          header: 'ECT',
          content:
            "At Lake Alice, Leeks used electroconvulsive therapy (ECT) and excruciatingly painful paraldehyde injections as a punishment primarily for violent and sexual misbehaviour. ECT was used at Lake Alice in two ways. 'Modified ECT', where patients were anaesthetised prior to being treated, and 'unmodified ECT' with no anaesthetic. At Lake Alice, unmodified ECT's use was far removed from any form of therapy; instead it was used as an arbitrary punishment.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=84',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.sitePlan
        }
      },
      {
        id: 'context-31',
        image: {
          src: '/images/large_1980_1389.jpg',
          caption:
            '"Ectonustim 3" electroconvulsive therapy (ECT) machine, with headset, by Ectron Ltd, England, 1958-1965.',
          author: 'The Board of Trustees of the Science Museum',
          URL: 'https://collection.sciencemuseumgroup.org.uk/objects/co134213/ectonustim-3-ect-machine-with-scalp-electrodes-english-1958-1965-medicine-electroconvulsive-therapy-ect-mental-illness',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.sitePlan
      },
      {
        id: 'context-32',
        text: {
          header: 'Torture',
          content:
            "ECT's use as an aversion therapy is now acknowledged as torture. Both the Abuse in Care Royal Commission of Inquiry's final report and the United Nations Committee Against Torture have acknowledged that actions by Lake Alice staff under the supervision of Leeks and actions by Leeks himself constituted torture against the children held at Lake Alice.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=86',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.sitePlan
      },
      {
        id: 'context-33',
        text: {
          header: 'Demolition',
          content:
            "The Child and Adolescent Unit was closed around 1980 after an Ombudsman's inquiry into conditions at the unit. Lake Alice Psychiatric Hospital closed in 1999. Demolition of Lake Alice started in 2016 and was completed in 2018. The site is now a private working farm.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40',
          style: 'scrolling'
        },
        view: '3d',
        camera: cameras.sitePlan
      }
    ]
  },
  '/pathways': {
    pages: [
      {
        id: 'pathways-introduction-1',
        text: {
          content: 'Pathways'
        },
        view: 'map',
        map: location.lakeAliceSite
      },
      {
        id: 'pathways-1',
        text: {
          content:
            'Children were referred to Lake Alice from family homes, state care residences, foster homes, hospitals and other contexts including faith-based residences.',
          source: 'documents/Abuse-in-Care-Volume-One.pdf#14',
          style: 'scrolling'
        },
        view: 'map',
        map: location.lakeAliceSite
      },
      {
        id: 'pathways-2',
        text: {
          header: 'First Cohort - Lake Alice',
          content:
            'The first cohort of children arrived at Lake Alice in 1972. Many were from Kohitere Boys Training Centre, Hokio Beach School and Holdsworth. Leeks worked as a consultant at both Kohitere and Hokio.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=69',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.hubLocation,
          visibleMapLayers: {
            majorPoints: [lakeAliceLocation],
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
        id: 'pathways-3',
        text: {
          header: 'Kohitere',
          content:
            'Kohitere Boys Training Centre was part of the network of national state care facilities. Kohitere held more than 100 boys at one point, aged 14 to 17. Many of these boys were Māori. Situated several miles outside of Levin, this remote facility included a secure solitary cell block. The centre was notorious for physical and sexual abuse.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=70',
          style: 'scrolling'
        },
        image: {
          src: '/images/fc-20190219-00006-HP5-4009 (2).jpg',
          author: 'Fraser Crichton 2019',
          style: 'static'
        }
      },
      {
        id: 'pathways-4',
        text: {
          header: 'State Care Residences',
          content:
            'By 1976, Lake Alice became a hub for a sprawling network of state care facilities across Aotearoa. The children in this network were disproportionately Māori. Many of these facilities shared high levels of physical, psychological and sexual abuse. Of an estimated 655,000 people who went through state care since the 1950s, 200,000 may have been abused in care, according to the Royal Commission. Lake Alice was a punishment for vulnerable children who challenged this system. Leeks referred to them as "bottom of the barrel kids" and used this to justify their torture with ECT.',
          source:
            'https://aucklanduniversitypress.co.nz/the-road-to-hell-state-violence-against-children-in-postwar-new-zealand',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.national,
          visibleMapLayers: {
            type: 'interactive',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              ...stateCareFacilities,
              points: sortByOpeningYear(stateCareFacilities.points)
            }
          }
        }
      },
      {
        id: 'pathways-5',
        view: 'map-animated',
        map: {
          ...location.national,
          visibleMapLayers: {
            type: 'interactive',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              ...stateCareFacilities,
              points: sortByOpeningYear(stateCareFacilities.points)
            }
          }
        }
      },
      {
        id: 'pathways-6',
        text: {
          content:
            'Many children were referred from psychiatric and psychopaedic hospitals across Aotearoa. Child health clinics also referred children to Lake Alice including the child health clinic at Whanganui where Leeks worked. Whanganui was a major source of referrals by Leeks.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=71',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.national,
          visibleMapLayers: {
            type: 'static',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              points: [
                ...removeLabels(psychiatricFacilities.auckland.points),
                ...removeLabels(psychiatricFacilities.northIsland.points),
                ...removeLabels(psychiatricFacilities.southIsland.points)
              ]
            }
          }
        }
      },
      {
        id: 'pathways-7',
        view: 'map-animated',
        map: {
          ...location.auckland,
          visibleMapLayers: {
            type: 'interactive',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              ...psychiatricFacilities.auckland,
              points: sortByLabel(psychiatricFacilities.auckland.points)
            }
          }
        }
      },
      {
        id: 'pathways-8',
        view: 'map-animated',
        map: {
          ...location.northIsland,
          visibleMapLayers: {
            type: 'interactive',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              ...psychiatricFacilities.northIsland,
              points: sortByLabel(psychiatricFacilities.northIsland.points)
            }
          }
        }
      },
      {
        id: 'pathways-9',
        view: 'map-animated',
        map: {
          ...location.southIsland,
          visibleMapLayers: {
            type: 'interactive',
            majorPoints: [lakeAliceLocation],
            minorPoints: {
              ...psychiatricFacilities.southIsland,
              points: sortByLabel(psychiatricFacilities.southIsland.points)
            }
          }
        }
      },
      {
        id: 'pathways-10',
        text: {
          header: 'Home',
          content:
            'Children were most commonly referred to Lake Alice from family homes. The Department of Social Welfare monitored families with children they perceived to be at risk and in some cases would refer those children to Lake Alice. Foster care homes were another source of children for Lake Alice and other referrals were simply parents looking to stop their children from getting into trouble at school.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=66',
          style: 'scrolling'
        },
        view: 'map',
        map: location.national
      },
      {
        id: 'pathways-11',
        text: {
          header: 'Numbers',
          content:
            'The Royal Commission estimated that between 400 and 450 children in total went through Lake Alice between 1970 and 1980. Half of these came from home and half from care placements. The peak year for admissions was 1974 when 82 children were admitted to Lake Alice. Some children were admitted more than once.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=66',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-12',
        text: {
          header: 'Ages',
          content:
            'The Department of Social Welfare estimated that the median age of children at the Child and Adolescent Unit was from 8-13. The youngest child treated in the unit was just five years old. Prior to this, a four-year-old child was on site with his mother at Lake Alice.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=73',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-13',
        text: {
          header: 'Maori and Pasifika',
          content:
            'Like many records, the ethnicity of children at Lake Alice was poorly documented. The Royal Commission estimated 63% of the children were European and 34% Māori or Māori-Pacific, 2% were of Pacific descent and 1% Indian. This was an over-representation of Māori who had a smaller population base. More Māori admissions came from state, foster care and hospitals.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=74',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-14',
        text: {
          header: 'Gender',
          content:
            'There were 165 boys admitted to the Child and Adolescent Unit and 38 girls (including one intersex survivor).',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=73',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-15',
        text: {
          header: 'Reasons',
          content:
            'The main reason children were referred to the unit was not mental health but behaviour. In the case of state care residences, in many instances this behaviour was in direct response to physical or sexual abuse and also from separation from whānau.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=75',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-16',
        text: {
          header: 'Impact - Personal',
          content:
            'Lake Alice had a profound lifelong negative impact on the children that it was meant to help. Survivors have experienced severe mental health issues like depression, anxiety and memory loss from ECT. Some continue to be on medication to help with PTSD. Some have committed suicide. Survivors have experienced difficulty with relationships, education and employment. Some have been incarcerated.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=1',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
      },
      {
        id: 'pathways-17',
        text: {
          header: 'Impact - Community',
          content:
            'The legacy of intergenerational trauma from Lake Alice and other forms of state care on whānau across Aotearoa are seen in the negative statistics of over-representation of incarceration and child abuse. Survivors have received minimal redress from the state and seen no accountability for the abuse they endured. And yet many survivors have shown incredible resiliency fighting for decades for redress and accountability.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=179',
          style: 'scrolling'
        },
        view: '3d',
        camera: { ...cameras.sitePlanAngled, isRotating: true }
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
        id: 'justice-introduction-3',
        view: '3d',
        text: {
          content: 'Justice'
        },
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-1',
        decade: '1970',
        text: {
          header: 'Intro',
          content:
            'As adult survivors, the children of Lake Alice endured a different form of failing by the state. Attempting to gain accountability against the perpetrators of abuse and redress from the state have both been difficult processes. Abuse at Lake Alice was an open secret. Multiple police investigations have failed to hold anyone accountable. Compensation and redress have never been fairly distributed. The process of justice stretched across the lifetimes of the survivors.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-3',
        decade: '1970',
        text: {
          header: 'Intro II',
          content:
            'This timeline is a summary of some of the findings of the Abuse in Care Royal Commission of Inquiry into Lake Alice.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-2',
        decade: '1970',
        text: {
          header: 'Complaints',
          content:
            'Only a year after it opened in 1972, a boy referred from Holdsworth School made a complaint of abuse at the Child and Adolescent Unit. In 1974, the acting chief educational psychologist raised serious concerns with Dr Sydney Pugmire, Lake Alice’s medical superintendent, about the improper use of ECT. And yet the unit continued to operate as it had. No further investigation was made.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-3',
        decade: '1970',
        text: {
          header: 'Citizens Commission on Human Rights',
          content:
            "Lake Alice's isolation contributed to the lack of oversight of Leeks and other staff members. Although inspections did occur, as Malcolm recalls, staff prepared for these by threatening children with ECT if they spoke out about the conditions they were held in. The Citizens Commission on Human Rights (CCHR) gained access to Lake Alice in 1976 and was able to raise concerns in national media over how the children there were treated.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-4',
        decade: '1970',
        text: {
          header: 'The 1976 Ombudsman’s Inquiry',
          content:
            "In July 1976, the parents of one of the children complained to the Ombudsman’s office about his detention and treatment at the Adolescent Unit. The Ombudsman's investigation recommended that the use of unmodified ECT should be discontinued and that modified ECT should be discouraged and only given with consent.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=165'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-5',
        decade: '1970',
        text: {
          header: 'Hake Halo',
          content:
            "Fourteen-year-old Hakeagapuletama 'Hake' Halo played a pivotal role in the closure of the Child and Adolescent Unit. The children at Lake Alice were required to regularly write letters home in English. Hake, added a drawing of a smiling stickman to his letter with a speech bubble that said: “Fakasoka he faoa au, mo huki au, mamahi, tagi au”. In English this means: “Mum, the people are giving me electric shocks and injections, it’s painful, I’m crying”.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=173',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-4',
        decade: '1970',
        image: {
          caption:
            'Drawing by Hakeagapuletama Halo of the image he included in his letter to his mum.',
          src: '/images/fc-20210616-00001-Hake Halo Drawing 2.jpg',
          URL: 'https://pacificmedianetwork.com/articles/subjected-to-electric-shock-torture-as-a-teenager-a-niuean-mans-story',
          recordID: '/records/22875316',
          author: 'Pacific Media Network',
          date: '16th June, 2021',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },

      {
        id: 'justice-6',
        decade: '1970',
        text: {
          header: 'Whistleblower',
          content:
            "In 1976, on receiving his letter, Hake's parents complained to the Ombudsman. At the same time, Lyn Fry, a Department of Education psychologist, approached the Auckland Committee on Racism and Discrimination (ACORD) after she learned the Department of Social Welfare sent Hake to Lake Alice instead of Hokio Beach School against her recommendation and were about to deport him back to Niue. Dr Oliver Sutherland from ACORD met with the family and introduced them to the New Zealand Herald's medical correspondent, Peter Trickett. The front-page feature that Trickett wrote led to questions being raised in parliament.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=166'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-6',
        decade: '1970',
        text: {
          header: 'Commission of Inquiry into Mr Hake Halo’s Case 1977',
          content:
            'Hakeagapuletama\'s case led to a Commission of Inquiry known as "The Case of a Niuean Boy". This was led by magistrate William Mitchell who was given only four weeks to investigate and report. Letters were written in support of Dr Leeks from the University of Auckland medical school and the Australian and New Zealand College of Psychiatrists. Mitchell found that ECT was warranted and "accepted medical practice" at the time. Mitchell didn\'t believe ECT was used at Lake Alice as a punishment. Dr Leeks’ superiors, however, were worried enough by the report and the Ombudsman\'s findings to remove Leeks from his position at Lake Alice.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=168'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-6',
        decade: '1970',
        text: {
          header: 'Investigation by Professional Bodies',
          content:
            'The Medical Council of New Zealand, the New Zealand Medical Association and the Australian and New Zealand College of Psychiatrists conducted an inquiry in 1977. The Medical Association dismissed a number of allegations against Leeks. However, the allegation that he had allowed a group of boys to administer ECT to another boy was referred to the New Zealand Medical Council’s Penal Cases Committee for investigation of potential disgraceful conduct. The committee dismissed the allegation.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=273'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-6',
        decade: '1970',
        text: {
          header: 'District Inspector Inquiry 1977',
          content:
            "Two more families approached the Auckland Committee on Racism and Discrimination (ACORD) after Hake Halo's case. Dr Stanley Mirams, the Department of Health’s director of mental health, commissioned Gordon Vial, a lawyer and district mental health inspector, to investigate the allegations. Vial was initially sceptical but his report concluded that the allegations of ECT used as a punishment called for further investigation. Mirams' copy of the report was sent to commissioner of NZ Police Ken Burnside. In his report to the Minister of Health, Mirams said that if nursing staff had administered shocks of whatever nature then that would breach the Mental Health Act and that the police should investigate. The commissioner of police responded by starting the first police investigation into the Lake Alice Child and Adolescent Unit.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=264'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-6',
        decade: '1970',
        text: {
          header: 'First Police Investigation 1977–1978',
          content:
            'The first NZ Police investigation into abuse at the Lake Alice Child and Adolescent Unit began in 1977, led by detective senior sergeant Rob Butler. Butler first interviewed Leeks who described the complainants and other children as "bottom-of-the-barrel kids”. Butler\'s report swiftly concluded there was insufficient evidence for charges. He failed to interview all of the complainants, failed to put allegations to all the staff and failed to interview 44 children that Leeks punished with ECT. Butler still had no expert medical opinion.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=267'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-7',
        decade: '1970',
        image: {
          caption:
            'Commissioner of Police, Ken Burnside. Police cadets graduation ceremony, Upper Hutt - Photograph taken by Ross Giblin. Dominion Post (Newspaper): Photographic negatives and prints of the Evening Post and Dominion newspapers. Ref: EP/1979/4377/19-F.',
          src: '/images/fc-20220710-00001-nlnzimage.jpg',
          URL: 'https://ndhadeliver.natlib.govt.nz/delivery/DeliveryManagerServlet?dps_pid=IE1170158',
          recordID: '/records/22875316',
          author: 'Alexander Turnbull Library, Wellington, New Zealand.',
          date: '1979',
          style: 'scrolling'
        },

        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-8',
        decade: '1970',
        text: {
          header: 'First Police Investigation 1977-1978 (Part II)',
          content:
            "Despite Rob Butler’s report, one case required further investigation. Leeks supervised a group of children administering ECT to another child. Deputy police commissioner Bob Walton investigated and asked for expert psychiatric opinion over this use of ECT. Psychiatrist Dr David McLachlan advised that only 'bad judgment' had been exercised. This opinion was decisive for NZ Police. On 27 January 1978, they issued a press release saying their investigation had found no evidence of criminal misconduct. McLachlan, however, failed to disclose a conflict of interest as he knew Leeks personally and it later emerged he had been accused of improper conduct including performing prefrontal lobotomies.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=267'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-9',
        decade: '1970',
        text: {
          header: 'Police Bias',
          content:
            'According to the Royal Commission, throughout their investigations, police displayed bias against the survivors as credible witnesses. Racism, ableism, homophobia and transphobia all played a part in this.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=313',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-9',
        decade: '1970',
        text: {
          header: 'Leeks',
          content:
            'Leeks was cleared by the New Zealand Medical Council of wrongdoing at Lake Alice. He left New Zealand and moved to Australia. Leeks then took a role as director of child psychiatry at a child guidance clinic in Melbourne. He did this one week before the police investigation into abuse at Lake Alice concluded and with a certificate of good standing from the New Zealand Medical Council.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=40'
        },
        view: 'map',
        map: {
          ...location.australia,
          visibleMapLayers: {
            minorPoints: {
              points: [
                lakeAliceLocation,
                {
                  label: 'Melbourne',
                  latitude: -37.971237,
                  longitude: 144.4926947
                }
              ]
            }
          }
        }
      },
      {
        id: 'justice-16',
        decade: '1990',
        text: {
          header: 'United Nations Committee Against Torture',
          content:
            'In 1991 a Lake Alice survivor filed a complaint with the New Zealand Medical Council alleging that other boys at the Unit were encouraged by Leeks to administer shocks to him. The Medical Council did not uphold his complaint.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=327'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        decade: '1990',
        text: {
          header: 'United Nations Committee Against Torture',
          content:
            "Under the United Nations Convention against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment, New Zealand is required to submit reports to the UN about compliance with the convention. In each of its reports to the UN in 1992, 1997 and 2002, the Crown made no mention of survivors’ complaints or the police investigations into Lake Alice. It wasn't until 2010 that the Crown acknowledged there was any 'improper treatment' at Lake Alice. Although New Zealand didn't ratify the Convention until 1989, the United Nations Committee against Torture (UNCAT) recognised that a prohibition against torture exists from the inception of the Universal Declaration of Human Rights.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=327'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-9',
        decade: '1990',
        text: {
          header: 'Court Cases',
          content:
            'With no accountability offered by the police, two Lake Alice survivors filed civil claims for redress in the High Court against Leeks – Leoni McInroe in 1994 and Mr DW in 1997. According to the Royal Commission, Crown Law initially attempted to deny redress using both the Limitation Act and Leeks’ immunity under the Mental Health Act. The High Court rejected this. Crown Law still didn’t settle. They stalled and were ordered by the High Court to comply with deadlines. Crown Law demanded McInroe’s personal diaries which they held onto for six years. The Crown then proposed a ‘mediation’ process where McInroe was forced to physically face her abuser, Leeks, in a secret meeting in Auckland. No settlement resulted.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=281',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-9',
        decade: '1990',
        text: {
          header: 'Court Cases II',
          content:
            "In 1997, lawyer Grant Cameron began talks with the Crown on behalf of what was to become a group of 95 survivors. Cameron sought an out-of-court settlement including the payment of compensation and an apology. Despite Crown Law, the state's legal representatives, having overwhelming evidence and advice that the survivors’ claims were true, they insisted the government go to court to test legal liability.",
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=281',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-11',
        decade: '1990',
        text: {
          header: 'The Gallen Report',
          content:
            'A change of government in 1999 saw a change in direction by the state. According to the Royal Commission, Crown Law still wanted to go ahead with an adversarial court process that would pit vulnerable survivors against staff and Leeks represented by Crown Law. However, then prime minister Helen Clark ultimately directed Crown Law to settle out of court. The settlement was to cover improper medical treatment only and not compensation for sexual and physical abuse. Distribution of the $6.5 million compensation among the 95 claimants was to be decided by retired High Court judge Sir Rodney Gallen who interviewed survivors and compiled a report on their experiences.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=281'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-11',
        decade: '2000',
        text: {
          header: 'The Gallen Report',
          content:
            'With the out-of-court settlement agreed, Sir Rodney Gallen published his report in 2001. Gallen detailed children living in unimaginable terror at an institution intended for their care. It included many horrific and disturbing revelations. Electroconvulsive therapy (ECT) was used to punish anything from poor school work to running away. Several claimants reported ECT being administered to their genitals. Paraldehyde, administered by painful injection, was also used as a punishment. Children were held naked in solitary confinement with only a mattress and a bucket for the toilet. One 15-year-old boy was locked in a wooden cage with a seriously disturbed adult patient. Many of the children experienced sexual abuse by both staff and adult patients. The report found the majority of children at Lake Alice had behavioural rather than psychiatric issues.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=285'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-11',
        decade: '2000',
        text: {
          header: '2001 - The Gallen Report II',
          content:
            "Crown Law attempted to block the publication of Gallen's report but this was overturned by the High Court.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=267'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-12',
        decade: '2000',
        text: {
          header: 'The Apology',
          content:
            "On 7 October 2001, then prime minister Helen Clark and health minister Annette King made a qualified apology to each of the 95 Lake Alice Child and Adolescent Unit claimants for the abuse they suffered. Over a third of the survivors' compensation was swallowed up by Cameron's legal fees and a second round of claimants received even less compensation.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=285'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-10',
        decade: '2000',
        text: {
          header: 'Claims for Redress II',
          content:
            'Excluded from this apology, however, was Leoni McInroe. According to the Royal Commission, McInroe’s lawyer had requested McInroe be included in the Cameron settlement. Crown Law refused. Instead they demanded she undergo a psychiatric examination to verify her claims. Only in 2002 was a final offer of settlement made. Woefully less than that made to the other survivors, McInroe no longer had the funds to pursue the case. Only at the request of her lawyer did she receive a qualified apology. The Crown took five months to deliver it.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=300',
          style: 'scrolling'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-14',
        decade: '2000',
        text: {
          header: 'Australia',
          content:
            'In Australia in 2003, the Medical Practitioners Board of Victoria investigated Leeks’ past at Lake Alice having been asked by the Royal Australian and New Zealand College of Psychiatrists to assess whether Leeks was fit to practice. Separately, in 2004, the board also investigated claims in Australia by a former female patient accusing Leeks of sexual misconduct. After a three-year investigation, 39 disciplinary charges were laid against Leeks. Leeks agreed to stop working as a psychiatrist on the eve of his disciplinary hearing. By agreeing not to work anymore, Leeks escaped a full public investigation.',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=300',
          style: 'scrolling'
        },
        view: 'map',
        map: {
          ...location.australia,
          visibleMapLayers: {
            minorPoints: {
              points: [
                lakeAliceLocation,
                {
                  label: 'Melbourne',
                  latitude: -37.971237,
                  longitude: 144.4926947
                }
              ]
            }
          }
        }
      },
      {
        id: 'justice-13',
        decade: '2000',
        text: {
          header: 'Grant Cameron passes files to the police',
          content:
            'Back in Aotearoa in 2003, the Citizens Commission on Human Rights and Grant Cameron passed the survivors’ witness statements and files to NZ Police and asked them to investigate.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=307'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-13',
        decade: '2000',
        text: {
          header: 'Second Police Investigation 2003 - 2005',
          content:
            'Initially, superintendent Graham Emery believed there were "public interest reasons" for an investigation. Fifteen months passed. Detective superintendent Larry Reid was then assigned to the investigation. Reid didn\'t believe the investigation was warranted. He only passed one file - Hake Halo\'s - to the deputy solicitor-general Nicola Crutchley which hid the systemic nature of abuse at Lake Alice. Time dragged. Crutchley found "insufficient evidence" for laying criminal charges but recommended the police conduct further investigation into the use of ECT.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=307'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-13',
        decade: '2000',
        text: {
          header: 'Second Police Investigation 2003-2005 (Part II)',
          content:
            "Larry Reid misinterpreted Crutchley's advice and believed Crown Law had advised against investigating the use of the ECT machine. Reid failed to contact or interview any of the survivors later telling the Royal Commission the survivors were not credible witnesses. None of the six staff accused of abuse were interviewed. NZ Police dismissed complaints against Dr Selwyn Leeks and staff at Lake Alice. According to the Royal Commission, files went 'missing'. An interview with Hake Halo that found sufficient evidence to start a criminal investigation went missing. A survivor's statement alleging Leeks raped her went missing. Three years had passed since the start of the investigation.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=307'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        decade: '2000',
        text: {
          header: 'Third Police Investigation 2006 - 2010',
          content:
            "In 2006, detective superintendent Malcolm Burgess inherited the police investigation. Burgess's plan for a comprehensive investigation was rejected by assistant commissioner Peter Marshall and detective superintendent Nick Perry as they don't want to commit resources. The allegations against staff, of wider sexual and physical abuse, and the use of paraldehyde were not investigated. Instead, the investigation focused on Leeks and the misuse of the ECT machine.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=308'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        decade: '2000',
        text: {
          header: 'Third Police Investigation 2006-2010 (Part II)',
          content:
            'Again the police failed to speak to survivors – only speaking with one complainant who instigated contact with them and failing to follow up on another who also instigated contact. Staff were interviewed this time but only in regard to Leeks and ECT. Again, multiple allegations of sexual assault and rape - including that Leeks had raped one of the survivors - were dismissed and no interviews were conducted.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=308'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        decade: '2000',
        text: {
          header: 'Third Police Investigation 2006-2010 (Part III)',
          content:
            'Three years passed. In 2009, Burgess completed his report finding that seven complaints may have grounds for prosecution. The report didn\'t include a summary of a statement from Dr Garry Walter, professor of child and adolescent psychiatry at the University of Sydney, that confirmed treatment at Lake Alice departed "significantly from the standards of the day". NZ Police southern region legal services rejected the report. No further actions are taken against Leeks and in 2010 NZ Police found “insufficient evidence” to justify a prosecution.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=310'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-15',
        decade: '2010',
        image: {
          caption: 'Lake Alice Investigation Completed - No Charges Laid',
          src: '/images/fc-20230323-00002-Lake Alice Investigation Completed - No Charges Laid.jpg',
          URL: 'https://www.police.govt.nz/news/release/22745',
          date: '30 March, 2010',
          author: 'New Zealand Police',
          style: 'document'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-16',
        decade: '2010',
        text: {
          header: 'Recognition',
          content:
            'In 2010, the Citizens Commission on Human Rights wrote to UNCAT to complain that no one had been held accountable. The UN sent a please-explain letter to the New Zealand government. The government responded by saying the police act independently and any complaints should be made through the Independent Police Complaints Authority.',
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=327'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-18',
        decade: '2010',
        text: {
          header: 'Waitangi Tribunal 2017',
          content:
            'A number of kaupapa claims for an independent inquiry into abuse in state care that disproportionately affected Māori come before the Waitangi Tribunal including one from Lake Alice survivor Tyrone Marks of Ngāti Raukawa.',
          style: 'scrolling',
          source:
            'https://forms.justice.govt.nz/searchdocuments/WT/wt_DOC_121077713/Wai%202615%2C%20A003.pdf'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-17',
        decade: '2010',
        image: {
          caption:
            'Brief of Evidence of Tyrone Marks in Support of an Application for an Urgent Hearing Concerning the Settlement of Grievances of Maori Children Put Into State Care, 20 March 2017',
          src: '/images/fc-20230323-00001-Screenshot 2023-03-23 at 5.27.37 PM.jpg',
          author: 'The Waitangi Tribunal',
          URL: 'https://forms.justice.govt.nz/searchdocuments/WT/wt_DOC_121077713/Wai%202615%2C%20A003.pdf',
          date: '20 March, 2017',
          style: 'document'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },

      {
        id: 'justice-18',
        decade: '2010',
        text: {
          header: 'Fourth Police Investigation - 2018 - 2021',
          content:
            "In 2017, NZ Police's National Adult Sexual Assault Team decided to re-investigate the sexual assault complaints made by survivors who wanted to have their complaints investigated. Three survivors - Paul Zentveld, Sharyn Collis and Malcolm Richards - were interviewed. NZ Police had initially dismissed Malcolm's complaint.",
          style: 'scrolling',
          source: 'documents/Redacted-Lake-Alice-Report.pdf#page=316'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-19',
        decade: '2010',
        text: {
          header: 'The Commission',
          content:
            "In 2018, almost 50 years after allegations of abuse at Lake Alice, the Abuse in Care Royal Commission of Inquiry was formally established. The Commission had a broad remit to investigate abuse in a number of contexts including institutional state care, foster, psychiatric and faith-based care, and specifically Māori and Pacific people's experiences of care. The Commission did not have powers of redress.",
          style: 'scrolling',
          source: 'https://www.abuseincare.org.nz/our-progress/timeline/'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-20',
        decade: '2010',
        text: {
          header: 'United Nations Committee Against Torture 2019',
          content:
            'In December 2019, survivor Paul Zentveld’s complaint of torture, filed by CCHR, is upheld by the United Nations Committee against Torture (UNCAT) who found New Zealand had failed to adequately investigate Zentveld’s complaint and failed to provide fair and adequate redress for the abuse he suffered.',
          style: 'scrolling',
          source: 'documents/G2001877.pdf'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-21',
        decade: '2020',
        text: {
          header: 'Malcolm Richards',
          content:
            'On 12 May 2022, UNCAT found in favour of Malcolm Richards against the Crown for a "Lack of prompt and impartial investigation; right to an effective domestic remedy and redress."',
          style: 'scrolling',
          source: 'documents/G2240600.pdf'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-22',
        decade: '2020',
        image: {
          caption:
            '12th May 2022 the United Nations Committee against Torture adopt Malcolm Richards complaint.',
          src: '/images/fc-20220628.jpg',
          author: 'United Nations Committee against Torture',
          date: '13 July, 2022',
          URL: 'https://d10yslqdemxz8r.cloudfront.net/lake-alice.spacedocuments/G2240600.pdf',
          style: 'document'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-23',
        decade: '2020',
        text: {
          header: 'Accountability',
          content: 'Under pressure from the Commission\'s inquiry and UNCAT\'s reports, the police finally made an arrest of an 89-year-old former staff member John Richard Corkran. Two other members of staff were "medically unfit to stand trial", including Dr Selwyn Leeks.',
          style: 'scrolling',
          source:
            'https://www.police.govt.nz/news/release/operation-lake-alice-concluded-criminal-charges-filed'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-24',
        decade: '2020',
        image: {
          caption: 'Operation Lake Alice concluded - criminal charges filed',
          src: '/images/fc-20230323-00001-Operation Lake Alice concluded - criminal charges filed.jpg',
          author: 'New Zealand Police',
          URL: 'https://www.police.govt.nz/news/release/operation-lake-alice-concluded-criminal-charges-filed',
          date: '8 December, 2021',
          style: 'document'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-24',
        decade: '2020',
        text: {
          header: 'Accountability',
          content: 'In 2022, Leeks died, never having faced trial and never having apologised for his actions. The judge in Corkran\'s trial ordered a stay of proceedings as Corkran had terminal cancer.',
          style: 'scrolling',
          source:
            'https://www.police.govt.nz/news/release/operation-lake-alice-concluded-criminal-charges-filed'
        },
        view: '3d',
        camera: {
          ...cameras.theLake
        }
      },
      {
        id: 'justice-25',
        decade: '2020',
        text: {
          header: 'Redress',
          content:
            'All of the survivors, like Malcolm, are now approaching the end of their lives. This is their last chance to receive any form of meaningful redress from the State. The Royal Commission’s report From Redress to Puretumu Torowhānui sets out 95 recommendations for a new redress scheme. The report concludes that the time for action is now and yet the survivors still wait.',
          style: 'scrolling',
          source:
            'https://www.abuseincare.org.nz/our-progress/reports/from-redress-to-puretumu'
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
        text: {
          content: 'About'
        },
        view: 'markdown',
        content: {
          file: '/md/about'
        }
      }
    ]
  }
}

export default data
