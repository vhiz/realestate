import ItemInfo from "@/components/ItemInfo";
import Slider from "@/components/Slider";
import { listData, singlePostData, userData } from "@/lib/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export const metadata = {
  title: `${singlePostData.title}`,
  description: singlePostData.description,
};

export default function SinglePage() {
  const item = singlePostData;
  return (
    <div className="flex flex-col gap-y-6 lg:flex-row">
      <div className="flex-[3] lg:pr-12">
        <Slider />
        <div className="pt-3 flex flex-col w-full gap-y-6">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h2>
              <div className="flex gap-x-2 items-center text-gray-500">
                <CiLocationOn />
                {item.address},{item.city}
              </div>
              <span className="p-2 w-max bg-warning/60 text-sm md:text-lg rounded-md">
                ${item.price}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3 bg-warning/30 h-28 w-32 rounded-md">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={userData.img} alt="" objectFit="cover" fill />
              </div>
              <span className="font-bold">{userData.name}</span>
            </div>
          </div>
          <p className="w-full capitalize text-justify text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
      <div className="divider lg:hidden"></div>
      <div className="flex-[2] h-full">
        <ItemInfo />
      </div>
    </div>
  );
}
