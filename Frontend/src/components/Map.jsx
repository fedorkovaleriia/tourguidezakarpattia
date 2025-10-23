import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';

// Іконки Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locations = [
  {
    id: 1,
    name: 'Карпати',
    position: [48.62, 22.28],
    path: '/location/1',
  },
  {
    id: 2,
    name: 'Термальні джерела Косино',
    position: [48.3, 22.63],
    path: '/location/2',
  },
  {
    id: 3,
    name: 'Старовинний замок Паланок',
    position: [48.56, 22.72],
    path: '/location/3',
  },
];

export default function Map() {
  const navigate = useNavigate();

  return (
    <MapContainer
      center={[48.62, 22.28]} // центр Закарпаття (Ужгород)
      zoom={10} // охоплення всього регіону
      style={{ height: '500px', width: '100%', borderRadius: '10px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.position}
          eventHandlers={{
            click: () => navigate(loc.path), // SPA-перехід на сторінку локації
          }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
