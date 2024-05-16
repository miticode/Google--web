import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home";
import Google from "./pages/google";
import Gmail from "./pages/gmail";
import HinhAnh from "./pages/hinhanh";
import Timtrengg from "./pages/timtrengg";
import Xemtrang from "./pages/xemtrang";
import English from "./pages/english";
import Francais from "./pages/français";
import Taukhia from "./pages/taukhia";
import Gioithieu from "./pages/gioithieu";
import Quangcao from "./pages/quangcao";
import Doanhnghiep from "./pages/doanhnghiep";
import Cachhd from "./pages/cachhoatdong";
import Quyenrt from "./pages/quyenrt";
import Dieukhoan from "./pages/dieukhoan";
import Caidat from "./pages/caidat";
import Audio from "./pages/audioo";
import Listt from "./pages/list";
import Ava from "./pages/ava";


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
    {
      path: "/English",
      element: <English/>,
    },
    {
      path: "/Francias",
      element: <Francais/>,
    },
    {
      path: "/taukhia",
      element: <Taukhia/>,
    },
    {
      path: "/gioithieu",
      element: <Gioithieu/>,
    },
    {
      path: "/quangcao",
      element: <Quangcao/>,
    },
    {
      path: "/doanhnghiep",
      element: <Doanhnghiep/>,
    },
    {
      path: "/cachhoatdong",
      element: <Cachhd/>,
    },
    {
      path: "/quyenriengtu",
      element: <Quyenrt/>,
    },
    {
      path: "/dieukhoan",
      element: <Dieukhoan/>,
    },
    {
      path: "/caidat",
      element: <Caidat/>,
    },
    {
      path: "/audio",
      element: <Audio/>,
    },
    {
      path: "/list",
      element: <Listt/>,
    },
    {
      path: "/ava",
      element: <Ava/>,
    },
  ]);
  return   <RouterProvider router={router} />
}

export default App