"use server";

import { cookies } from "next/headers";
import { sessionOptions } from "./utils";
import { getIronSession } from "iron-session";
import { redirect } from 'next/navigation'
const defaultSession = {
  isLoggedIn: false,
};
export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};
