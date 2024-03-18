"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function switchType(val) {
    setQuery((prev) => ({ ...prev, type: val }));
  }

  return (
    <div className="flex flex-col w-full gap-y-2 lg:gap-y-0">
      <div className="w-40 h-12 flex border-t border-x border-gray-300 cursor-pointer rounded-t-md overflow-hidden">
        <button
          onClick={() => switchType("buy")}
          className={`flex-1 btn rounded-none rounded-l-md flex items-center justify-center ${
            query.type === "buy" && "bg-black text-white"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => switchType("rent")}
          className={`flex-1 btn rounded-none rounded-r-md flex items-center justify-center ${
            query.type === "rent" && "bg-black text-white"
          }`}
        >
          Rent
        </button>
      </div>
      <form
        action=""
        className=" w-full flex flex-col items-center gap-y-2 lg:flex-row lg:w-max lg:border lg:border-gray-300"
      >
        <input
          type="text"
          placeholder="City Location"
          className="input rounded-none w-full border border-gray-300 focus:outline-none lg:focus:border-none"
        />
        <input
          type="number"
          placeholder="Min Price"
          min={0}
          max={100000}
          className="input rounded-none w-full border border-gray-300 focus:outline-none lg:focus:border-none"
        />
        <input
          type="number"
          placeholder="Max Price"
          min={0}
          max={100000}
          className="input rounded-none w-full border border-gray-300 focus:outline-none lg:focus:border-none"
        />
        <button className="btn rounded-none w-full btn-warning lg:w-max">
          <CiSearch className="text-white text-xl" />
        </button>
      </form>
    </div>
  );
}
