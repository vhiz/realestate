"use client";

import ItemInfo from "@/components/ItemInfo";
import Slider from "@/components/Slider";
import { listData, singlePostData, userData } from "@/lib/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

async function fetchSinglePost(id) {
  const res = await fetch(`/api/listing/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default function SinglePage({ params }) {
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const { id } = params;
      setLoading(true);
      try {
        const data = await fetchSinglePost(id);
        setListing(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params]);

  return (
    <div className="flex flex-col gap-y-6 lg:flex-row">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <TailSpin
            visible={true}
            height="40%"
            width="40%"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="text-base-200"
          />
        </div>
      ) : (
        <div className="flex-[3] lg:pr-12">
          <Slider listing={listing} />
          <div className="pt-3 flex flex-col w-full gap-y-6">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  {listing.title}
                </h2>
                <div className="flex gap-x-2 items-center text-gray-500">
                  <CiLocationOn />
                  {listing.address}, {listing.city}
                </div>
                <span className="p-2 w-max bg-warning/60 text-sm md:text-lg rounded-md">
                  ${listing.price}
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
              {listing.desc}
            </p>
          </div>
        </div>
      )}
      <div className="divider lg:hidden"></div>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <TailSpin
            visible={true}
            height="30%"
            width="30%"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="text-base-200"
          />
        </div>
      ) : (
        <div className="flex-[2] h-full">
          <ItemInfo listing={listing} />
        </div>
      )}
    </div>
  );
}
