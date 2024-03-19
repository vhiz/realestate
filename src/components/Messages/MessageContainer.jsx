import React from "react";
import MessageItem from "./MessageItem";

export default function MessageContainer() {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <h2 className="text-2xl font-medium">Messages</h2>
      <div className="w-full flex flex-col gap-y-5 h-[80vh] lg:overflow-y-scroll lg:scrollbar-thin scrollbar-thumb-gray-500 scrollbar-hide">
        {Array(10)
          .fill()
          .map((message, i) => (
            <MessageItem key={i} i={i} />
          ))}
      </div>
    </div>
  );
}
