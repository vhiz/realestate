import Image from "next/image";
import { CiBookmark, CiChat1, CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

export default function Card() {
  return (
    <div className="w-full h-[12.5rem] flex group mt-5">
      <div className="relative h-full flex-[1] rounded-md overflow-hidden ">
        <Image
          src={
            "https://images.unsplash.com/photo-1600992045264-136a22de917e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          objectFit="cover"
          alt=""
          className="group-hover:scale-[1.1] duration-300 transition-all"
          fill
        />
      </div>
      <div className="flex-[2] pl-5 flex h-full flex-col justify-between">
        <h2 className="text-xl font-semibold capitalize">A Great Apartment Next To The Beach</h2>
        <div className="flex items-center gap-x-1">
          <CiLocationOn />
          <span className="text-sm text-gray-500 capitalize">456,Park Avenue, London</span>
        </div>
        <span className="text-xl bg-yellow-300/45 rounded-md w-max p-1">$1000</span>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-1 bg-gray-300 rounded-md p-1 text-xs font-semibold">
              <IoBedOutline /> 2 Bedroom
            </div>
            <div className="flex items-center gap-x-1 bg-gray-300 rounded-md p-1 text-xs font-semibold">
              <PiBathtubLight /> 1 Bathroom
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
