import CardList from "@/components/CardList/CardList";
import Filter from "@/components/Filter";
import React from "react";

export default function ListPage() {
  return (
    <div className="h-full flex">
      <div className="flex-[3] pr-12">
        <Filter />
        <CardList/>
      </div>
      <div className="flex-[2]">map</div>
    </div>
  );
}
