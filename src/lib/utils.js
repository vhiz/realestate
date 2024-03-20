
export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "real-estate-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 15 * 24 * 60 * 1000,
  },
};
