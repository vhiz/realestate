import Image from "next/image";
import { CiBookmark, CiChat1, CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import Link from "next/link";

export default function Card({ house }) {
  return (
    <div className="w-full h-80 flex group mt-5 pb-9 flex-col lg:flex-row lg:h-[12.5rem]">
      <div className="relative h-full flex-[1.7] lg:flex-1 rounded-md overflow-hidden ">
        <Image
          src={house.img}
          objectFit="cover"
          alt=""
          className="group-hover:scale-[1.1] duration-300 transition-all"
          fill
        />
      </div>
      <div className="flex-[2] lg:pl-5 flex h-full flex-col justify-between">
        <Link
          href={`/list/${house.id}`}
          className="text-xl font-semibold capitalize link link-hover transition-all duration-300 hover:text-blue-500"
        >
          {house.title}
        </Link>
        <div className="flex items-center gap-x-1">
          <CiLocationOn />
          <span className="text-sm text-gray-500 capitalize">
            {house.address}
          </span>
        </div>
        <span className="text-xl bg-yellow-300/45 rounded-md w-max p-1">
          ${house.price}
        </span>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-1 bg-gray-300 rounded-md p-1 text-xs font-semibold">
              <IoBedOutline /> {house.bedroom} Bedroom
            </div>
            <div className="flex items-center gap-x-1 bg-gray-300 rounded-md p-1 text-xs font-semibold">
              <PiBathtubLight /> {house.bathroom} Bathroom
            </div>
          </div>
          <div className="flex gap-x-4">
            <button className="btn btn-xs btn-outline rounded-md">
              <CiBookmark />
            </button>
            <button className="btn btn-xs btn-outline rounded-md">
              <CiChat1 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
