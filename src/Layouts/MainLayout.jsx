import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayout = () => {
     return (
          <div>
               <div className="">
               <div className=" pt-5 px-12 md:px-24 z-10"><Navbar></Navbar></div>
               <div className=" ">

               <Outlet></Outlet>
               </div>
               
               </div>
          </div>
     );
};

export default MainLayout;