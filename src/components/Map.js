import React from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import arrowIcon from "../assets/images/icon-location.svg";
import { Icon } from "leaflet";

const ChangeMap = ({ coordinates }) => {
  const map = useMap();
  map.setView(coordinates, 18);
  return null;
};

export default function Map({ coordinates }) {
  return (
    <div id="map">
      <MapContainer
        center={coordinates}
        zoom={1}
        style={{ position: "inherit", height: "70vh", width: "100%", top: "29.2vh" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={new Icon({ iconUrl: arrowIcon })} />
        <ChangeMap coordinates={coordinates} />
      </MapContainer>
    </div>
  );
};
