import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-full w-full">
      <div className="w-full flex flex-col items-center justify-center gap-y-10  lg:flex-[3] lg:pr-28">
        <h1 className="text-4xl font-bold w-full lg:text-6xl">
          Find Real Estate & Get Your Dream Place
        </h1>
        <span className="text-justify w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quas
          quis molestias est quia dignissimos, repellendus consequuntur
          accusantium officiis obcaecati
        </span>
        <SearchBar />
        <div className="hidden w-full justify-between lg:flex">
          <div className="">
            <h2 className="text-3xl font-semibold">16+</h2>
            <span className="text-gray-500">Years of Experience</span>
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold">200</h2>
            <span className="text-gray-500">Award Gained</span>
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold">1200+</h2>
            <span className="text-gray-500">Property Ready</span>
          </div>
        </div>
      </div>
      <div className=" hidden h-full items-center justify-center lg:flex-[2] lg:flex">
        <div className="relative h-full w-full">
          <Image objectFit="contain" alt="" src={"/bg.png"} fill />
        </div>
      </div>
    </div>
  );
}
