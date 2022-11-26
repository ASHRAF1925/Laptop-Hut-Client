import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../../AllBuyers/AllBuyers";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import MyProducts from "../../Pages/My Products/MyProducts";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdiminRoute";
import PrivateRoute from "../Private Routes/PrivateRoute";
import SellerRoute from "../SellerRoutes/SellerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },

      {
        path: "/dashboard/admin/allsellers",
        element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,
      },
      {
        path:'/dashboard/seller/addProducts',
        element:<SellerRoute> <AddProduct></AddProduct> </SellerRoute>
      },
      {
        path:'/dashboard/seller/myproducts',
        element:<SellerRoute> <MyProducts></MyProducts></SellerRoute>
      },
      {
        path: "/dashboard/admin/allbuyers",
        element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
      },
      
    ],
  },
]);

export default router;
