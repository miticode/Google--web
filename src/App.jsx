import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home";
import Google from "./pages/google";
import Gmail from "./pages/gmail";
import HinhAnh from "./pages/hinhanh";
import Timtrengg from "./pages/timtrengg";
import Xemtrang from "./pages/xemtrang";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/google",
      element: <Google/>,
    },
    {
      path: "/gmail",
      element: <Gmail/>,
    },
    {
      path: "/hinhanh",
      element: <HinhAnh/>,
    },
    {
      path: "/timtrengg",
      element: <Timtrengg/>,
    },
    {
      path: "/xem",
      element: <Xemtrang/>,
    },
  ]);
  return   <RouterProvider router={router} />
}

export default App