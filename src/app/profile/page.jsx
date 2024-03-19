"use client";

import AddPost from "@/components/AddPost";
import CardList from "@/components/CardList/CardList";
import MessageContainer from "@/components/Messages/MessageContainer";
import { userData } from "@/lib/data";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-[3] w-full lg:pr-12 flex flex-col gap-y-6">
        <div className="w-full">
          <div className="flex w-full justify-between">
            <h1 className="font-medium text-xl">User Information</h1>
            <button className="btn bg-yellow-300/70 rounded-md">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-y-3 justify-center">
            <div className="flex items-center gap-x-2">
              <h3 className="font-semibold">Avatar :</h3>
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={userData.img} alt="" objectFit="cover" fill />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="font-semibold">Username :</h3>
              <span className="font-normal">{userData.name}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <h3 className="font-semibold">Email :</h3>
              <span className="font-normal">user1@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <h1 className="font-medium text-xl">My List</h1>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn bg-yellow-300/70 rounded-md"
            >
              Add New Post
            </button>
            <AddPost />
          </div>
          <CardList />
        </div>
      </div>
      <div className="flex-[2] h-full">
        <MessageContainer />
      </div>
    </div>
  );
}
