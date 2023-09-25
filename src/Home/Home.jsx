
import { useState } from "react";
import DonationCards from "../Components/DonationCards/DonationCards";
import Header from "../Components/Header/Header/Header";
import useGetData from "../Hook/useGetData";


const Home = () => {
     const [donationCards] = useGetData();
     const [search, setSearch] = useState('')
     

     
     return (
          <div>
               <img className=" absolute bg-cover opacity-20" src="https://i.ibb.co/5c94LF6/cover.png" alt="" />
              <Header setSearch={setSearch}></Header>
              <DonationCards donationCards={donationCards} search={search}></DonationCards>
          </div>
     );
};

export default Home;