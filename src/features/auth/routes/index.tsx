import { Outlet, RouteObject } from "react-router-dom";
import { LoginRoute } from "./Login";
import { SignUpRoute } from "./SignUp";

function AuthLayout() {
  return <Outlet />;
}

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />,
  children: [LoginRoute, SignUpRoute],
};
