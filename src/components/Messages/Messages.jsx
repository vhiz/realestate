import { userData } from "@/lib/data";
import Image from "next/image";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

export default function Messages() {
  return (
    <div className="w-full h-[22rem] flex flex-col justify-between ">
      <div className="h-[18%] w-full flex gap-x-3 items-center px-2 bg-yellow-300/60">
        <div className="relative h-7 w-7 rounded-full overflow-hidden">
          <Image alt="" src={userData.img} objectFit="cover" fill />
        </div>
        <span className="font-semibold">John Doe</span>
      </div>
      <MessageList />
      <MessageInput />
    </div>
  );
}
