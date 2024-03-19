"use client";

import { singlePostData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
export default function Slider() {
  const item = singlePostData;

  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-80 gap-x-2">
      <div
        className={`${
          open ? "fixed scale-[1]" : "hidden scale-0"
        }  top-0 left-0 w-screen h-screen duration-300 transition-all flex justify-center bg-black z-[999]`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-[999] btn text-2xl"
        >
          <IoMdClose />
        </button>
        <div className="carousel w-full h-full ">
          {item.images.map((img, i) => (
            <div
              key={i}
              id={`item${i + 1}`}
              className="carousel-item relative w-full h-full"
            >
              <Image src={img} objectFit="contain" alt="" fill />
            </div>
          ))}
          <div className="absolute flex justify-center w-full bg-gray-400/60 py-2 gap-4 bottom-0">
            {singlePostData.images.map((img, i) => (
              <a
                key={i}
                href={`#item${i + 1}`}
                className="rounded-md w-20 h-20 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image src={img} alt="" objectFit="cover" fill />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="relative flex-[3] h-full overflow-hidden rounded-md group"
        onClick={() => setOpen(true)}
      >
        <a href="#item1" className="h-full w-full">
          <Image
            src={item.images[0]}
            objectFit="cover"
            className=" group-hover:scale-[1.1] duration-300 transition-all"
            alt=""
            fill
          />
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        {item.images.slice(1).map((img, i) => (
          <div
            key={i}
            className="relative h-24 overflow-hidden rounded-md group"
            onClick={() => setOpen(true)}
          >
            <a href={`#item${i + 2}`} className="h-full w-full">
              <Image
                src={img}
                alt=""
                objectFit="cover"
                className="group-hover:scale-[1.1] duration-300 transition-all"
                fill
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
