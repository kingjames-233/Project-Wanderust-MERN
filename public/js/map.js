document.addEventListener("DOMContentLoaded", function () {
    // Safety check: make sure coordinates exist
    if (!listing || !listing.geometry || !listing.geometry.coordinates || listing.geometry.coordinates.length < 2) {
        console.warn("Listing has invalid coordinates. Map will not render.");
        return;
    }

    // Get latitude and longitude from listing.geometry.coordinates
    const lat = Number(listing.geometry.coordinates[1]); // Latitude
    const lng = Number(listing.geometry.coordinates[0]); // Longitude

    // Initialize the map centered at the listing location
    const map = L.map("map").setView([lat, lng], 9);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Add a marker at the listing location
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
        .openPopup();
});


// document.addEventListener("DOMContentLoaded", () => {
//     if (
//         !listing ||
//         !listing.geometry ||
//         !listing.geometry.coordinates ||
//         listing.geometry.coordinates.length < 2
//     ) {
//         console.warn("Listing has invalid coordinates. Map will not render.");
//         return;
//     }

//     const lat = Number(listing.geometry.coordinates[1]);
//     const lng = Number(listing.geometry.coordinates[0]);

//     const map = L.map("map").setView([lat, lng], 9);

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         maxZoom: 19,
//         attribution: "&copy; OpenStreetMap contributors",
//     }).addTo(map);

//     L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
//         .openPopup();
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const map = L.map('map').setView([27.7172, 85.3240], 9);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//     }).addTo(map);

//     L.marker([27.7172, 85.3240]).addTo(map)
// });


// map.js
// document.addEventListener("DOMContentLoaded", () => {
//     const map = L.map("map").setView(
//   [
//     listing.geometry.coordinates[1], // lat
//     listing.geometry.coordinates[0], // lng
//   ],
//   9
// );

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: '&copy; OpenStreetMap contributors',
// }).addTo(map);

// L.marker([
//   listing.geometry.coordinates[1],
//   listing.geometry.coordinates[0],
// ])
//   .addTo(map)
//   .bindPopup(
//     `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
//   )
//   .openPopup();
// });

