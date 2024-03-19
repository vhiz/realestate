import React from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import Link from "next/link";
export default function RegisterForm() {
  return (
    <form className="w-full flex flex-col gap-y-5">
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <CiUser className="opacity-70" />
        <input type="text" className="grow" required placeholder="Username" />
      </label>
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <CiUser className="opacity-70" />
        <input type="email" className="grow" required placeholder="Email" />
      </label>
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <IoKeyOutline className="opacity-70" />
        <input type="password" className="grow" required placeholder="password" />
      </label>
      <button className="btn rounded-md bg-blue-400 border-none text-white hover:bg-blue-300">
        Login
      </button>
      <Link
        className="link link-info link-hover w-full text-center"
        href={"/login"}
      >
        {"Have an account?"}
      </Link>
    </form>
  );
}
