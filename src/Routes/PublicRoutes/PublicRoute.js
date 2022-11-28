import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/404/404Page"; 
import AllBuyers from "../../AllBuyers/AllBuyers";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import Aboutus from "../../Pages/AboutUS/Aboutus";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import CategoryProductDisplay from "../../Pages/Home/CategoryProductDisplay/CategoryProductDisplay";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import MyOrder from "../../Pages/My Buyers/My Orders/MyOrder";
import MyBuyers from "../../Pages/My Buyers/MyBuyers";
import MyProducts from "../../Pages/My Products/MyProducts";
import Signup from "../../Pages/Signup/Signup";
import ReporteItems from "../../ReporteItems/ReporteItems";
import AdminRoute from "../AdminRoute/AdiminRoute";
import PrivateRoute from "../Private Routes/PrivateRoute";
import SellerRoute from "../SellerRoutes/SellerRoutes";
import UserRoute from "../UserRoutes/UserRoutes";
import Blogs from "../../Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader:()=>{
          fetch(`https://laptop-hut-server.vercel.app/advertise/products`);
        },
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
      {
        path:'/category/:id',
        loader:({params})=>{
          return fetch(`https://laptop-hut-server.vercel.app/category/${params.id}`)
        },
        element:<PrivateRoute><CategoryProductDisplay></CategoryProductDisplay></PrivateRoute>

      },  {
        path:'/aboutus',
        element:<Aboutus></Aboutus>
    
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
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
      {
        path: "/dashboard/admin/reportedItems",
        element: <AdminRoute><ReporteItems></ReporteItems></AdminRoute>,
      },
      {
        path:"/dashboard/seller/mybuyers",
        element:<SellerRoute><MyBuyers></MyBuyers></SellerRoute>
      },
      {
        path:"/dashboard/User/myorders",
        element:<UserRoute><MyOrder></MyOrder></UserRoute>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  
]);

export default router;
