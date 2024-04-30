import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const authenticated = true;

  return authenticated ? children : <Navigate to="/login" />;
}
