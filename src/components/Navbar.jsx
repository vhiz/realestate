"use client";

import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { userData } from "@/lib/data";
import Toggle from "./Toggle";
import { useEffect, useState } from "react";
import { getSession, logout } from "@/lib/getSession";
import sessionStore from "@/store/sessionStore";
import axios from "axios";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const { session, setSession } = sessionStore();
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/") return;
    async function fetchSession() {
      try {
        const session = await getSession();
        setSession({ ...session, img: userData.img });
      } catch (error) {
        console.log(error);
      }
    }
    fetchSession();
  }, [setSession, pathname]);

  async function handleSignOut(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/api/logout");
      setSession(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex justify-between h-[100px] w-full p-5 items-center lg:p-10">
      <div className="flex items-center gap-x-5">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 font-bold text-xl hover:scale-[1.03] duration-300"
        >
          <BiHomeAlt className="text-xl font-bold" />
          <span className="text-xl md:hidden lg:block">RealEstate</span>
        </Link>
        <ul className="menu menu-vertical hidden rounded-box gap-x-5 md:menu-horizontal">
          <li className="">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/list"}>Listing</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>Agents</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-x-3 items-center">
        <Toggle />

        {session?.isLoggedIn ? (
          <div className="flex items-center gap-x-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <Image src={session.img} alt="" objectFit="cover" fill />
            </div>
            <span className="text-semibold hidden md:flex">
              {session.username}
            </span>
            <Link
              href={"/profile"}
              className="btn rounded-md relative hidden md:flex"
            >
              <div className="badge badge-error badge-sm h-5 w-5 text-white absolute -top-2 -right-[0.7rem]">
                <span className="text-xs">1</span>
              </div>
              Profile
            </Link>
            <form className="hidden lg:block" onSubmit={handleSignOut}>
              <button
                type="submit"
                disabled={loading}
                className="btn rounded-md ml-3 btn-error text-base-100"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <div className="hidden gap-x-4 md:flex">
            <Link href={"/login"} className="btn rounded-lg">
              SignIn
            </Link>
            <Link href={"/register"} className="btn btn-warning rounded-lg">
              SignUp
            </Link>
          </div>
        )}
        <label
          htmlFor="my-drawer"
          className="btn btn-circle swap swap-rotate md:hidden"
        >
          <input type="checkbox" />
          <CiMenuBurger className="swap-off fill-current" />
          <IoIosClose className="swap-on fill-current" />
        </label>
      </div>
    </div>
  );
}
