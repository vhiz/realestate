"use client";
import sessionStore from "@/store/sessionStore";
import Link from "next/link";
import { useState } from "react";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
export default function Mobile() {
  const [loading, setLoading] = useState(false);
  const { session, setSession } = sessionStore();

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
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex items-center justify-center gap-y-6">
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Home
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            About
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Contact
          </Link>
        </li>
      </label>
      <label htmlFor="my-drawer">
        <li>
          <Link className="text-4xl" href={"/"}>
            Agents
          </Link>
        </li>
      </label>
      {session?.isLoggedIn ? (
        <form onSubmit={handleSignOut}>
          <button
            disabled={loading}
            className="btn rounded-md ml-3 btn-error text-base-100"
          >
            <CiLogout className="text-2xl" />
          </button>
        </form>
      ) : (
        <>
          <label htmlFor="my-drawer">
            <li>
              <Link className="text-4xl" href={"/login"}>
                SignIn
              </Link>
            </li>
          </label>
          <label htmlFor="my-drawer">
            <li>
              <Link className="text-4xl" href={"/register"}>
                SignUp
              </Link>
            </li>
          </label>
        </>
      )}
    </ul>
  );
}
