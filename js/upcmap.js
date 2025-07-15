document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([-0.22985, -78.52495], 13); // Quito centro por defecto

  // Cargar mapa base
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Marcar tu ubicación actual
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;

      const userMarker = L.marker([userLat, userLon])
        .addTo(map)
        .bindPopup("Estás aquí")
        .openPopup();

      // Mostrar todas las UPCs sin filtro
      const marcadores = mostrarTodasUPCs(map);

      // Agregar también el marcador del usuario al grupo
      marcadores.push(userMarker);

      // Ajustar zoom para que todos se vean
      const grupo = L.featureGroup(marcadores);
      map.fitBounds(grupo.getBounds().pad(0.2));

    }, err => {
      alert("No se pudo obtener tu ubicación.");
      const marcadores = mostrarTodasUPCs(map);
      const grupo = L.featureGroup(marcadores);
      map.fitBounds(grupo.getBounds().pad(0.2));
    });
  } else {
    alert("Tu navegador no permite geolocalización.");
    const marcadores = mostrarTodasUPCs(map);
    const grupo = L.featureGroup(marcadores);
    map.fitBounds(grupo.getBounds().pad(0.2));
  }
});
const listaUPCs = [
  {
    nombre: "UPC CHUGCHILÁN",
    direccion: "Vía Sigchos Quilotoa",
    lat: -0.77866,
    lon: -78.91123
  },
 {
  nombre: "iTur GAD Chugchilán",
  direccion: "Chugchilán 010204, Vía Sigchos Quilotoa",
  lat: -0.79963,
  lon: -78.92105
},
{
  nombre: "Centro de Salud Sigchos",
  direccion: "74R4+693, Sigchos",
  lat: -0.70944,
  lon: -78.89410
},
{
  nombre: "Centro de Salud Chugchilan tipo A",
  direccion: "633M+CH Chugchilán",
  lat: -0.79644,
  lon: -78.91605
},
{
  nombre: "Puesto de Salud Casa Quemada",
  direccion: "Vía La Maná – Pujilí – Latacunga",
  lat: -0.90882,
  lon: -78.82291
},
{
  nombre: "Centro de salud tipo B Zumbahua",
  direccion: "24Q4+FJ8, Zumbagua",
  lat: -0.96127,
  lon: -78.89344
},
{
  nombre: "EQUILIBRIO, Centro de Bienestar Emocional",
  direccion: "Av. Miguel Iturralde 43, Latacunga",
  lat: -0.89543,
  lon: -78.61793
}
];

// Mostrar todas sin filtro
function mostrarTodasUPCs(map) {
  const marcadores = [];
  listaUPCs.forEach(upc => {
    const marker = L.marker([upc.lat, upc.lon])
      .addTo(map)
      .bindPopup(`<b>${upc.nombre}</b><br>${upc.direccion}`);
    marcadores.push(marker);
  });
  return marcadores;
}
