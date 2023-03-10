import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/PublicRoutes/PublicRoute";
import toast, { Toaster } from "react-hot-toast";


function App() {

  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>


    <Toaster></Toaster>


    </div>
  );
}

export default App;
