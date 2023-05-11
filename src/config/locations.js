const locations = {
  hubLocation: {
    zoom: 9.5,
    centre: {
      latitude: -40.28187,
      longitude: 175.24732
    },

    // {lng: 175.24732, lat: -40.28187}
    bounds: {
      southWest: [-40.692093, 173.9328],
      northEast: [-39.821194, 176.009216]
    }
  },

  // {lng: 174.75841, lat: -36.88588}
  // [174.45889, -37.15314, 175.05871, -36.71825]
  auckland: {
    zoom: 9.83,
    centre: { longitude: 174.7574, latitude: -36.88183 },
    bounds: {
      southWest: [-37.15314, 174.45889],
      northEast: [-36.71825, 175.05871]
    }
  },

  northIsland: {
    zoom: 7,
    centre: {
      latitude: -38.71357,
      longitude: 175.82181
    },
    bounds: {
      southWest: [-41.96648, 170.6778],
      northEast: [-34.16916, 179.50721]
    }
  },
  southIsland: {
    zoom: 7,
    centre: {
      latitude: -43.45201,
      longitude: 171.05672
    },
    bounds: {
      southWest: [-48.02951, 165.86028],
      northEast: [-40.31135, 175.25421]
    }
  },

  // {lng: 170.80368, lat: -43.70685}
  // [165.86028, -48.02951, 175.25421, -40.31135]

  national: {
    zoom: 6,
    centre: {
      latitude: -40.7670087,
      longitude: 173.4506545
    },
    bounds: {
      southWest: [-45.59589790007943, 157.09106084377453],
      northEast: [-35.574503782518356, 189.78093879433226]
    }
  },

  australia: {
    zoom: 5,
    centre: {
      latitude: -40.7670087,
      longitude: 173.4506545
    },
    bounds: {
      southWest: [-51.481383, 100.810547],
      northEast: [-6.620957, 192.963867]
    }
  },

  lakeAliceLocal: {
    zoom: 13.1,

    // [175.33743, -40.12610]
    centre: {
      latitude: -40.1261,
      longitude: 175.33743
    },
    bounds: {
      southWest: [-40.212047, 175.12928],
      northEast: [-40.051928, 175.489254]
    }
  }
}
export default locations
