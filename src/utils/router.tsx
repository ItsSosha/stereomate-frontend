import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { AuthRoutes } from "@/features/auth";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <></>,
      },
      AuthRoutes,
    ],
  },
]);
