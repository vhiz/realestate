"use client";

import { useEffect, useState } from "react";

export default function Toggle() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <div>
      <input
        type="checkbox"
        value="sunset"
        checked={isdark === "cupcake"}
        className="toggle theme-controller"
        onChange={() =>
          setIsdark((prev) => (prev === "cupcake" ? "sunset" : "cupcake"))
        }
      />
      ;
    </div>
  );
}
