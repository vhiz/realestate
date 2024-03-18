import { Marker, Popup } from "react-leaflet";
import Image from "next/image";
import Link from "next/link";
export default function Pin({ house }) {
  return (
    <Marker position={[house.latitude, house.longitude]}>
      <Popup>
        <div className="flex gap-x-5">
          <div className="relative w-16 h-12 overflow-hidden rounded-md">
            <Image src={house.img} objectFit="cover" alt="" fill />
          </div>
          <div className="flex flex-col justify-between">
            <Link className="link link-hover" href={`/list/${house.id}`}>{house.title}</Link>
            <span>{house.bedroom} Bedroom</span>
            <b>${house.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
