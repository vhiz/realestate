import React from "react";
import Card from "./Card";
import { listData } from "@/lib/data";

export default function CardList() {
  return (
    <div className="lg:h-[65vh] overflow-y-scroll lg:scrollbar-thin">
      {listData.map((house) => (
        <Card key={house.id} house={house} />
      ))}
    </div>
  );
}
