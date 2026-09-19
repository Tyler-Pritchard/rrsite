import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import {
  SightingsSection,
  SightingsTitle,
  SightingsSubtitle,
  MapFrame,
  PopupTitle,
  PopupMeta,
} from "./sightingsMap.styles";
import { RobRichSighting } from "../../../types/Sightings";

// CRA/webpack breaks Leaflet's default icon path resolution, so the default
// marker image has to be re-pointed manually. Without this, pins render as
// broken image icons.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Phase 1: hardcoded pins. Swap this out for a fetch to the events
// microservice once that endpoint exists — the shape below is what
// that response should match.
const SIGHTINGS: RobRichSighting[] = [
  {
    id: 1,
    city: "Tacoma, WA",
    crossStreets: "54th St & S. Tacoma Way",
    dateSeen: "2026-09-16",
    note: "Outside Airport Tavern after Metaphysical Market",
    lat: 47.20792587868961,
    lng: -122.4838888879923,
  },
  {
    id: 2,
    city: "Tacoma, WA",
    crossStreets: "7th St & Broadway",
    dateSeen: "2026-07-04",
    note: "Yes Ma'am & Holy Locust @Spanish Ballroom",
    lat: 47.25773733140079,
    lng: -122.44093502327121,
  },
  {
    id: 3,
    city: "Eugene, OR",
    crossStreets: "W Park St & E 8th Ave",
    dateSeen: "2026-07-25",
    note: "Eugene Saturday Market",
    lat: 44.05108212299453,
    lng: -123.09195169468848,
  },
    {
    id: 3,
    city: "Seattle, WA",
    crossStreets: "Seattle Center",
    dateSeen: "2026-05-25",
    note: "Random empty stage at Folk Life Seattle",
    lat: 47.619818852944135,
    lng: -122.35099018697544,
  },
];

const SightingsMap: React.FC = () => {
  return (
    <SightingsSection>
      <SightingsTitle>Rob Rich Sightings</SightingsTitle>
      <SightingsSubtitle>
        Not every show has a ticket. Here's where the Soapbox of the Covenant
        has turned up so far.
      </SightingsSubtitle>
      <MapFrame>
        <MapContainer
          center={[47.4, -122.6]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {SIGHTINGS.map((sighting) => (
            <Marker key={sighting.id} position={[sighting.lat, sighting.lng]}>
              <Popup>
                <PopupTitle>{sighting.city}</PopupTitle>
                <PopupMeta>{sighting.crossStreets}</PopupMeta>
                <PopupMeta>{sighting.dateSeen}</PopupMeta>
                {sighting.note && <PopupMeta>{sighting.note}</PopupMeta>}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapFrame>
    </SightingsSection>
  );
};

export default SightingsMap;