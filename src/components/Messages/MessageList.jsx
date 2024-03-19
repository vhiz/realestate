import React from "react";
import Message from "./Message";

export default function MessageList() {
  return (
    <div className="w-full h-[calc(100%-32%)] p-2 overflow-y-scroll lg:scrollbar-thin scrollbar-hide">
      <Message />
      <Message />
      <Message own/>
      <Message />
      <Message own />
      <Message own/>
    </div>
  );
}
