import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import CardDonation from "../Components/Page/CardDonation/CardDonation";

const myCreateRoute = createBrowserRouter([
   {
     path:'/',
     element:<MainLayout></MainLayout>,
     children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/donation',
               element:<Donation></Donation>
          },
          {
               path:'/statistics',
               element:<Statistics></Statistics>
          },
          {
               path:'/donationCard/:id',
               element:<CardDonation></CardDonation>
          },
     ]
   }
])

export default myCreateRoute;