import LoginForm from "@/components/LoginForm";
import React from "react";

export default function Login() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="shadow-md bg-base-200 flex flex-col gap-y-2 w-[80vw] h-[44vh] rounded-md items-center p-4 lg:w-[40vw]">
        <h2 className="text-xl font-semibold">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
