import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export const App = () => {
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    auth.authStateReady().then(() => setAuthReady(true));
  }, []);

  return authReady ? <Outlet /> : null;
};

export default App;
