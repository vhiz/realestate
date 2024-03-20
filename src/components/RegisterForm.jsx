"use client";

import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post("/api/register", inputs);
      router.push("/login");
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="w-full flex flex-col gap-y-5" onSubmit={handleSubmit}>
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <CiUser className="opacity-70" />
        <input
          type="text"
          className="grow"
          required
          minLength={5}
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
      </label>
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <CiUser className="opacity-70" />
        <input
          type="email"
          className="grow"
          minLength={5}
          required
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </label>
      <label className="input input-bordered rounded-md flex items-center gap-2">
        <IoKeyOutline className="opacity-70" />
        <input
          type="password"
          className="grow"
          minLength={5}
          required
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
      </label>
      {error && <span className="w-full text-center text-error">{error}</span>}
      <button
        type="submit"
        disabled={loading}
        className="btn rounded-md bg-blue-400 border-none text-white hover:bg-blue-300"
      >
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
