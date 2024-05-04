import { RouteObject } from "react-router-dom";
import { AuthLayout } from "./Layout";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ],
};
