import { userData } from "@/lib/data";
import Image from "next/image";
import Messages from "./Messages";

export default function MessageItem() {
  return (
    <div className="collapse overflow-visible collapse-arrow rounded-md bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <Image src={userData.img} alt="" objectFit="cover" fill />
            </div>
            <h3 className="font-semibold">John Doe</h3>
          </div>
          <span>Lorem ipsum dolor sit....</span>
        </div>
      </div>
      <div className="collapse-content">
        <Messages />
      </div>
    </div>
  );
}
