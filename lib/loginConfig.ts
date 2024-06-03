import { SessionOptions } from "iron-session";

export interface SessionData {
  username?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

var date = new Date();
var minutes = 5;
date.setTime(date.getTime() + minutes * 60 * 1000);

export const sessionOptions: SessionOptions = {
  // You need to create a secret key at least 32 characters long.
  password: "Fq7F3OZNK7565lwqUZIxF4MOVZ85Ch5lHgUGkoswux8=",
  cookieName: "admin-session",
  ttl: 1200, // 20 min
  cookieOptions: {
    httpOnly: true,
    // Secure only works in `https` environments. So if the environment is `https`, it'll return true.
    secure: process.env.NODE_ENV === "production",
  },
};
