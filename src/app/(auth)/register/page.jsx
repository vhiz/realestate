import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="shadow-md bg-base-200 flex flex-col gap-y-2 w-[80vw] h-[53vh] rounded-md items-center p-4 lg:w-[40vw]">
        <h2 className="text-xl font-semibold">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
