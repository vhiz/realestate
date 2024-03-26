"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import { listData } from "@/lib/data";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

async function getListings() {
  const res = await fetch("/api/listing");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default function CardList() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getListings();

        setListings(data);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setListings]);

  return (
    <div className="lg:h-[65vh] overflow-y-scroll lg:scrollbar-thin">
      {loading ? (
        <div className="w-full flex h-[60vh] items-center justify-center">
          <TailSpin
            visible={true}
            height="20%"
            width="20%"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="text-base-200"
          />
        </div>
      ) : (
        listings
          .sort((a, b) => b.createdAt.toString() - a.createdAt.toString())
          .map((house) => <Card key={house._id} house={house} />)
      )}
    </div>
  );
}
