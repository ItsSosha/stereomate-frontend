import { Outlet, RouteObject } from "react-router-dom";
import { LoginRoute } from "../Login";
import { SignUpRoute } from "../SignUp";

import styles from "./styles.module.scss";

function AuthLayout() {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
}

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />,
  children: [LoginRoute, SignUpRoute],
};
