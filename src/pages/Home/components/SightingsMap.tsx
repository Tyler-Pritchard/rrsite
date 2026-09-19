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
    city: "Seattle, WA",
    crossStreets: "Pike St & 1st Ave",
    dateSeen: "2026-03-14",
    note: "Set up right outside the market, drew a real crowd.",
    lat: 47.6089,
    lng: -122.341,
  },
  {
    id: 2,
    city: "Tacoma, WA",
    crossStreets: "6th Ave & Sprague Ave",
    dateSeen: "2026-04-02",
    note: "Acoustic set, mostly covers.",
    lat: 47.2555,
    lng: -122.4581,
  },
  {
    id: 3,
    city: "Portland, OR",
    crossStreets: "Hawthorne Bridge, west end",
    dateSeen: "2026-05-19",
    lat: 45.5122,
    lng: -122.6674,
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