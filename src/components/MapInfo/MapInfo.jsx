"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import PinInfo from "./PinInfo";
import { listData, singlePostData } from "@/lib/data";
export default function MapInfo({ listing }) {
  return (
    <MapContainer
      center={[listing?.latitude, listing?.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PinInfo house={listing} />
    </MapContainer>
  );
}
