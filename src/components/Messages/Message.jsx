import React from "react";

export default function Message({ own }) {
  return (
    <div className={`chat ${own ? "chat-end" : "chat-start"} mt-3`}>
      <div
        className={`chat-bubble text-white  ${
          own ? "bg-yellow-400/50" : "bg-blue-400 "
        }`}
      >
        I hate you!
      </div>
      <div className="chat-footer opacity-50">
        {own ? "Seen at 12:46" : "Delivered"}
      </div>
    </div>
  );
}
