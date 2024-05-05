import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { authStore } from "../../stores/authStore";

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  const { idToken } = authStore;
  return !!idToken ? children : <Navigate to="/login" />;
});
