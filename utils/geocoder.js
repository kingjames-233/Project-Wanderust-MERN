const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "openstreetmap",
  httpAdapter: "https",
  formatter: null,

  headers: {
    "User-Agent": "WanderlustApp/1.0 (contact: mohanthapa0430@gmail.com)",
  },
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
