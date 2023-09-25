import { useParams } from "react-router-dom";
import useGetData from "../../../Hook/useGetData";
import { useEffect, useState } from "react";
import DonationItem from "./DonationItem";

const CardDonation = () => {
     const [donation,setDonation] = useState({});
     const {id} = useParams()
     const [donationData] = useGetData() ;

     useEffect(()=>{
         const findDonationItem = donationData?.find(donation=>donation.id == id);

         setDonation(findDonationItem);

     },[id,donationData])
    
     return (
          <div>
               
              <DonationItem donation={donation}></DonationItem>
          </div>
     );
};

export default CardDonation;