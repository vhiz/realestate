import { VscTools } from "react-icons/vsc";
import { MdOutlinePets } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbRulerMeasure } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import MapInfo from "./MapInfo/MapInfo";
import { singlePostData } from "@/lib/data";

export default function ItemInfo({ listing }) {
  return (
    <div className="flex flex-col px-3">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-semibold md:text-xl">General</h2>
        <div className="bg-base-200 rounded-md p-4 gap-y-4 flex flex-col">
          {listing?.policies?.map((policy, i) => (
            <div key={i} className="flex items-center gap-x-1">
              {policy.name === "Utilities" ? (
                <VscTools className="text-2xl text-yellow-300" />
              ) : policy.name === "Pet Policy" ? (
                <MdOutlinePets className="text-2xl text-yellow-300" />
              ) : (
                <CiMoneyCheck1 className="text-2xl text-yellow-300" />
              )}
              <div className="flex flex-col gap-y-0">
                <span className="text-base font-semibold md:text-lg capitalize">
                  {policy.name}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-medium">
                  {policy.policy}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-5">
        <h2 className="text-lg font-semibold md:text-xl">Room Sizes</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 bg-base-200 p-2 rounded-md">
            <TbRulerMeasure className="text-yellow-400" />
            <span>{listing.size} sqm</span>
          </div>
          <div className="flex items-center gap-x-2 bg-base-200 p-2 rounded-md">
            <IoBedOutline className="text-yellow-400" />
            <span>{listing.bedRooms} Bedroom</span>
          </div>
          <div className="flex items-center gap-x-2 bg-base-200 p-2 rounded-md">
            <BiBath className="text-yellow-400" />
            <span>{listing.bathRooms} Bathroom</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-4">
        <h2 className="text-lg font-semibold md:text-xl">Nearby Places</h2>
        <div className="bg-base-200 p-3 rounded-md flex justify-between w-full">
          <div className="flex items-center gap-x-1">
            <IoSchoolOutline className="text-yellow-400 text-xl md:text-2xl" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold ">School</span>
              <span className="text-xs text-gray-400 ">{listing.school}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <MdOutlineDirectionsBus className="text-yellow-400 text-xl md:text-2xl" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold ">Bus Stop</span>
              <span className="text-xs text-gray-400 ">{listing.bus}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <GiFoodTruck className="text-yellow-400 text-xl md:text-2xl" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold ">Restaurant</span>
              <span className="text-xs text-gray-400 ">
                {listing.restaurant}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-4">
        <h2 className="text-lg font-semibold md:text-xl">Location</h2>
        <div className="w-full h-[12.5rem] z-[10]">
          {/* {listing && <MapInfo listing={listing} />} */}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pb-6">
        <button className="btn btn-sm md:btn rounded-md">
          <TbMessageDots /> Send a Message
        </button>
        <button className="btn btn-sm md:btn rounded-md">
          <CiBookmark /> Save the Place
        </button>
      </div>
    </div>
  );
}
