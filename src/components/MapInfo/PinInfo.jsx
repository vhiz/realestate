import { Marker, Popup } from "react-leaflet";
import Image from "next/image";
export default function PinInfo({ house }) {
  return (
    <Marker position={[house.latitude, house.longitude]}>
      <Popup>
        <div className="flex gap-x-5">
          <div className="relative w-16 h-12 overflow-hidden rounded-md">
            <Image src={house.images[0]} objectFit="cover" alt="" fill />
          </div>
          <div className="flex flex-col justify-between">
            <span>{house.title}</span>
            <span>{house.bedroom} Bedroom</span>
            <b>${house.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
