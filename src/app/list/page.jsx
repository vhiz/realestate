import CardList from "@/components/CardList/CardList";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { listData } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "22 (listings)",
  description: "there are 22 listings in your area",
};

export default function ListPage() {
  return (
    <div className="h-full flex">
      <div className="w-full lg:pr-12 lg:flex-[3]">
        <Filter />
        <CardList />
      </div>
      <div className="flex-[2] hidden h-full lg:block">
        <Map houses={listData} />
      </div>
    </div>
  );
}
