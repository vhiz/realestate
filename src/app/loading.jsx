"use client";

import { ProgressBar } from "react-loader-spinner";

export default function loading() {
  return (
    <div className=" flex h-full w-full items-center justify-center">
      <ProgressBar
        visible={true}
        height="80%"
        width="40%"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
