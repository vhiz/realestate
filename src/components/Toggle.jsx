"use client";

import { useEffect, useState } from "react";

export default function Toggle() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage?.getItem("isdark")) || "sunset"
  );
  useEffect(() => {
    if (isdark == null) localStorage.setItem("isdark", "sunset");
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <div>
      <input
        type="checkbox"
        value="sunset"
        checked={isdark === "sunset"}
        className="toggle theme-controller"
        onChange={() =>
          setIsdark((prev) => (prev === "cupcake" ? "sunset" : "cupcake"))
        }
      />
    </div>
  );
}
