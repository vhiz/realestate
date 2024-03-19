import React from "react";

export default function MessageInput() {
  return (
    <form className="h-[14%] w-full flex border border-gray-300 rounded-md overflow-hidden">
      <input type="text" className="input w-[80%] outline-none focus:outline-none border-none bg-transparent"/>
      <button className="btn rounded-none bg-transparent w-[20%] h-[12%] bg-yellow-300 border-none">Send</button>
    </form>
  );
}
