import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/edit",
        elemen: <Home />,
      },
    ],
  },
  {
    path: "/new",
    element: <Home />,
  },
]);
