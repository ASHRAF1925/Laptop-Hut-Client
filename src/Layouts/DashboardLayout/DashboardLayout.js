import React, { useContext } from "react";

import { Link, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // const user={
  //   email:'admin@laptop-hut.com'
  // }

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  console.log(isSeller)

  const loadAllUsers = (email) => {
    fetch(`http://localhost:5000/admin/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const sidebarItems = (
    <>
      {
        isSeller&&(
          <>
          <h1>Welecome to Seller Dash Board</h1>
          <Link className="btn btn-primary" to='/dashboard/seller/addProducts'>Add a Product</Link>


          
          </>
        )
      }
      {isAdmin && (
        <>
         <li>
         <h1 className="btn btn-primary" onClick={loadAllUsers}>
            hello Admin
          </h1>
         </li>
         <li>
          <Link to='/dashboard/seller/addProducts'>Add a Product </Link>
         </li>
        </>
      )}
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
