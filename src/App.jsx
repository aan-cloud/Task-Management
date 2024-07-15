import Home from "../src/pages/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
