import DonationCards from "../Components/DonationCards/DonationCards";
import Header from "../Components/Header/Header/Header";
import useGetData from "../Hook/useGetData";


const Home = () => {
     const [donationCards] = useGetData();
     return (
          <div>
               <img className=" absolute bg-cover opacity-20" src="/public/images/cover.png" alt="" />
              <Header></Header>
              <DonationCards donationCards={donationCards} ></DonationCards>
          </div>
     );
};

export default Home;