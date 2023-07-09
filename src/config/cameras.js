const fars = { site: 1000, siteAngled: 3000, building: 100 }
const nears = { site: 1000, building: 10, default: 0.1 }

const cameras = {
  // context: eleven bed villas
  elevenBedVillasWide: {
    name: 'contextElevenBedVillasWide',
    position: [312.54022216796875, 24.06130599975586, -331.59326171875],
    rotation: [-2.892491745565581, 1.0051282948218239, 2.9300868773631823],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  elevenBedVilla: {
    name: 'contextElevenBedVilla',
    position: [87.67674255371094, 6.449056148529053, -336.97576904296875],
    rotation: [-3.0367693081017912, -1.0550672386576285, -3.050322145786049],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  elevenBedVillaAbove: {
    name: 'contextElevenBedVillaAbove',
    position: [134.22805786132812, 31.036693572998047, -309.7185974121094],
    rotation: [
      -1.5707962317244637, -7.330928308846296e-9, -0.17415777158324186
    ],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.building
  },
  elevenBedVillaII: {
    name: 'contextElevenBedVilla-II',
    position: [110.64131927490234, 3.5452535152435303, -281.40679931640625],
    rotation: [3.1314395908787995, -0.8029151403813032, 3.1342954446118556],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },

  // context: staff villas
  doctorsVillas: {
    name: 'contextDoctorsVillas',
    position: [-489.4076843261719, 71.18972778320312, -390.58343505859375],
    rotation: [-2.362001376062758, -1.0627671463346227, -2.4292465422602767],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  singleStaffVillas: {
    name: 'contextSingleStaffVillas',
    position: [138.8545684814453, 44.5850715637207, 168.08799743652344],
    rotation: [-0.36402117979909066, 0.28158438231663213, 0.10547943676201134],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  staffHousing: {
    name: 'contextStaffVillas',
    position: [527.568115234375, 60.342529296875, -236.9739532470703],
    rotation: [-1.8551968193104815, 1.1479435845965322, 1.881025963151375],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  girlsVilla: {
    name: 'contextGirlsVilla',
    position: [104.25685119628906, 8.368541717529297, -328.79327392578125],
    rotation: [-3.141592653589793, 1.5652086160481393, -3.141592653589793],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  maximumSecurity: {
    name: 'contextMaximumSecurity',
    position: [-212.70655822753906, 43.53173828125, -225.8732452392578],
    rotation: [-2.883296831393313, -0.013562286618653132, -3.1379996244759334],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  maximumSecurityClose: {
    name: 'contextMaximumSecurity-Close',
    position: [-178.20697021484375, 1.6383349895477295, -117.40478515625],
    rotation: [3.1124848438691752, 0.27219861036652804, -3.133762826512719],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  boysVillaRearCamera: {
    name: 'boysVilla-Rear',
    position: [30.657419204711914, 10.856568336486816, -314.4128723144531],
    rotation: [-2.8305396496503494, -0.883640620170399, -2.8979849101414645],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },

  // Malcolm
  dormitoryVilla: {
    name: 'boysVilla',
    position: [89.48239135742188, 4.548534297943115, -278.53057861328125],
    rotation: [-0.087191217135521, 0.7660508657330082, 0.060533300213158545],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  boysVillaAboveAngle: {
    name: 'boysVilla-AngleAbove',
    position: [117.24929809570312, 32.56351852416992, -220.86318969726562],
    rotation: [-0.5090140550871015, 0.42185162940219495, 0.22465028834185893],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  cellCamera: {
    name: 'boysVilla-Cell',
    position: [86.12178039550781, 5.552443981170654, -290.54888916015625],
    rotation: [-0.482578629102942, 0.7422889927286265, 0.34036439276294767],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.building
  },
  dayRoomBoysVilla: {
    name: 'boysVilla-DayRoom',
    position: [133.61831665039062, 2.6923305988311768, -337.0742492675781],
    rotation: [-3.13337005933913, 0.558629386369739, 3.137234401876895],
    fov: 22.89519204617112,
    near: nears.default,
    far: fars.site
  },
  boysVillaRearCamera001: {
    name: 'boysVilla-Rear',
    position: [98.6353988647461, 1.7696443796157837, -259.66595458984375],
    rotation: [0.02148847335002331, 0.8515471238262282, -0.016134229434912953],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  // justice
  theLake: {
    name: 'justiceTheLake',
    position: [-310, 400, 200],
    rotation: [-1.7, 0, 0],
    fov: 70,
    near: nears.building,
    far: fars.site
  },
  // all
  disturbedPatientsVilla: {
    name: 'disturbedPatientsVilla',
    position: [19.928375244140625, 42.48586654663086, -303.12908935546875],
    rotation: [-2.213136465964757, 1.1657827872366138, 2.254090363457764],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  boysVilla: {
    name: 'boysVilla',
    position: [120.17782592773438, 6.7427144050598145, -243.90260314941406],
    rotation: [-0.0543095532335127, 1.0312231567350039, 0.046622004958900745],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.site
  },
  boysVillaAbove: {
    name: 'boysVillaAbove',
    position: [85.19853973388672, 51.82072830200195, -269.4840087890625],
    rotation: [-1.5707965653949199, 1.6058265828178264e-12, 1.5707695048878063],
    fov: 39.76070325000613,
    near: nears.default,
    far: fars.building
  },

  sitePlan: {
    name: 'sitePlan',
    position: [50, 510, -220],
    rotation: [-1.7, 0, 0],
    fov: 75,
    near: nears.building,
    far: fars.site
  },
  default: {
    name: 'sitePlan',
    position: [50, 510, -220],
    rotation: [-1.7, 0, 0],
    fov: 80,
    near: nears.building,
    far: fars.site
  },
  sitePlanAngled: {
    name: 'sitePlan-Angled',
    position: [0, 600, 400],
    rotation: [-0.8726646, 0, 0],
    fov: 80,
    near: nears.building,
    far: fars.siteAngled
  }
}
export default cameras
