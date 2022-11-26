import React, { useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import useUser from "../../Hooks/useUser";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // const user={
  //   email:'admin@laptop-hut.com'
  // }

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const[isUser]=useUser(user?.email);

  console.log(isSeller)


  const sidebarItems = (
    <>
      {
        isSeller&&(
          <>
          <h1>Welecome to Seller Dash Board</h1>
          <Link className="btn btn-primary" to='/dashboard/seller/addProducts'>Add a Product</Link>
          <Link className="btn btn-primary mt-10" to='/dashboard/seller/myproducts'>My Products</Link>
          <Link className="btn btn-primary mt-10" to='/dashboard/seller/mybuyers'>My Buyers</Link>



          
          </>
        )
      }
      {isAdmin && (
        <>
       
         <li>
          <Link className="btn btn-secondary mt-6" to='/dashboard/admin/allsellers'>All Sellers</Link>
         </li>
         <li>
          <Link className="btn btn-secondary mt-6" to='/dashboard/admin/allbuyers'>All Buyers</Link>
         </li>
         <li>
          <Link className="btn btn-secondary mt-6" to='/dashboard/admin/reportedItems'>Reported Items</Link>
         </li>

        
        </>
      )}

{
      isUser&&<>
       <li>
          <Link className="btn btn-secondary mt-6" to='/dashboard/User/myorders'>My Orders</Link>
         </li>
      </>
    }
    </>

    
  );
  return (
    <div >
      <NavBar></NavBar>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content  bg-red-400 ">
            {
              sidebarItems
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
