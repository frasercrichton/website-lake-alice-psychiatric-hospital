const fars = { site: 3000, building: 100 }
const nears = { site: 1000, building: 10 }
const size = { width: window.innerWidth, height: window.innerHeight }

const cameras = {
  staffHousingSingle: {
    name: 'staffHousingSingle',
    position: [43.21534729003906, 60.34771728515625, 181.0399627685547],
    rotation: [-0.3814260821091194, -0.3742519527430261, -0.11583750777327607],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  staffHousing: {
    name: 'staffVillaCamera',
    position: [527.568115234375, 60.342529296875, -236.9739532470703],
    rotation: [-1.8551968193104815, 1.1479435845965322, 1.881025963151375],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  staffHousingMain: {
    name: 'staffHousing2Camera',
    position: [421.6955261230469, 60.52777862548828, 277.9809265136719],
    rotation: [-0.38798422563226825, 0.5513942748249363, 0.21092563657678642],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  adultVilla: {
    name: 'adultVilla',
    position: [122.62739562988281, 56.65733337402344, -271.85943603515625],
    rotation: [-2.0217181008082585, 1.0382688604123456, 2.0828650332136203],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 3048
  },
  boysVilla: {
    name: 'boysVilla',
    position: [120.17782592773438, 6.7427144050598145, -243.90260314941406],
    rotation: [-0.0543095532335127, 1.0312231567350039, 0.046622004958900745],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 3048
  },
  boysVillaAbove: {
    name: 'ChildrensVillaCamera',
    position: [85.19853973388672, 51.82072830200195, -269.4840087890625],
    rotation: [-1.5707965653949199, 1.6058265828178264e-12, 1.5707695048878063],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: fars.building
  },
  dormitoryVilla: {
    name: 'DormitoryCamera',
    position: [89.48239135742188, 4.548534297943115, -278.53057861328125],
    rotation: [-0.087191217135521, 0.7660508657330082, 0.060533300213158545],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  boysVillaRearCamera: {
    name: 'BoysVillaRearCamera',
    position: [30.657419204711914, 10.856568336486816, -314.4128723144531],
    rotation: [-2.8305396496503494, -0.883640620170399, -2.8979849101414645],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.10000000149011612,
    far: 1000
  },
  boysVillaRearCamera001: {
    name: 'ChildrensVillaRearCamera001',
    position: [98.6353988647461, 1.7696443796157837, -259.66595458984375],
    rotation: [0.02148847335002331, 0.8515471238262282, -0.016134229434912953],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.10000000149011612,
    far: 1000
  },
  boysVillaAboveAngle: {
    name: 'boysVillaAboveAngle',
    position: [117.24929809570312, 32.56351852416992, -220.86318969726562],
    rotation: [-0.5090140550871015, 0.42185162940219495, 0.22465028834185893],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.10000000149011612,
    far: 3048
  },
  cellCamera: {
    name: 'CellCamera',
    position: [86.12178039550781, 5.552443981170654, -290.54888916015625],
    rotation: [-0.482578629102942, 0.7422889927286265, 0.34036439276294767],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.10000000149011612,
    far: 1000
  },
  dayRoomBoysVilla: {
    name: 'MalcolmVilla',
    position: [133.61831665039062, 2.6923305988311768, -337.0742492675781],
    rotation: [-3.13337005933913, 0.558629386369739, 3.137234401876895],
    aspect: 1.7777777777777777,
    fov: 22.89519204617112,
    near: 0.10000000149011612,
    far: 1000
  },
  doctorsVillas: {
    name: 'doctorsVillas',
    position: [-489.4076843261719, 71.18972778320312, -390.58343505859375],
    rotation: [-2.362001376062758, -1.0627671463346227, -2.4292465422602767],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 3048
  },
  girlsVilla: {
    name: 'girlsVilla',
    position: [104.25685119628906, 8.368541717529297, -328.79327392578125],
    rotation: [-3.141592653589793, 1.5652086160481393, -3.141592653589793],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 3048
  },
  maximumSecurity: {
    name: 'MaximumSecurityBlockCamera',
    position: [-212.70655822753906, 43.53173828125, -225.8732452392578],
    rotation: [-2.883296831393313, -0.013562286618653132, -3.1379996244759334],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  maximumSecurityAbove: {
    name: 'maximunSecurityAbove',
    position: [-201.16896057128906, -138.39601135253906, -60.418582916259766],
    rotation: [
      1.570795527742501, -0.0000015944736091462282, -2.1144121777468134
    ],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: fars.building
  },
  maximumSecurityClose: {
    name: 'maximumSecurityCloseCamera',
    position: [-178.20697021484375, 1.6383349895477295, -117.40478515625],
    rotation: [3.1124848438691752, 0.27219861036652804, -3.133762826512719],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  singleStaffVillas: {
    name: 'singleStaffVillas',
    position: [138.8545684814453, 44.5850715637207, 168.08799743652344],
    rotation: [-0.36402117979909066, 0.28158438231663213, 0.10547943676201134],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  elevenBedVillaImage: {
    name: 'twelveBedVillaImage',
    position: [87.67674255371094, 6.449056148529053, -336.97576904296875],
    rotation: [-3.0367693081017912, -1.0550672386576285, -3.050322145786049],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  elevenBedVillaAbove: {
    name: 'ElevenBedVillaCamera010',
    position: [254.4232940673828, 31.82072830200195, -290.8634948730469],
    rotation: [
      -1.5707962289753654, -7.330926976578667e-9, -0.17415773961651546
    ],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: fars.building
  },
  elevenBedVillasWide: {
    name: 'twelveBedVillasWide',
    position: [312.54022216796875, 24.06130599975586, -331.59326171875],
    rotation: [-2.892491745565581, 1.0051282948218239, 2.9300868773631823],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.1,
    far: 1000
  },
  elevenBedVillaII: {
    name: 'elevenBedVillasII',
    position: [110.64131927490234, 3.5452535152435303, -281.40679931640625],
    rotation: [3.1314395908787995, -0.8029151403813032, 3.1342954446118556],
    aspect: 1.7777777777777777,
    fov: 39.76070325000613,
    near: 0.10000000149011612,
    far: 1000
  },
  sitePlan: {
    name: 'sitePlan',
    position: [50, 510, -220],
    rotation: [-1.7, 0, 0],
    aspect: 1.7777777777777777,
    fov: 75,
    near: 10,
    far: fars.site
  },
  default: {
    name: 'default',
    position: [160, 480, -220],
    rotation: [-1.7, 0, 0],
    aspect: size,
    fov: 80,
    near: 10,
    far: fars.site
  },
  siteAngled: {
    name: 'siteAngled',
    position: [0, 600, 400],
    rotation: [-0.8726646, 0, 0],
    aspect: size,
    fov: 80,
    near: 10,
    far: fars.site
  },
  theLake: {
    name: 'The Lake',
    position: [-310, 400, 200],
    rotation: [-1.7, 0, 0],
    aspect: 1.7777777777777777,
    fov: 70,
    near: 10,
    far: fars.site
  }
}
export default cameras
