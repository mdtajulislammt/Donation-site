import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonateCard from "./DonateCard";


const Donation = () => {
     const [donations, setDonations] = useState()
     const [noFound, setNoFound] = useState("");
     const [isShow, setIsShow] = useState(false);
     useEffect(()=>{
          const donationItem = JSON.parse(localStorage.getItem('donation'));
          
          if(donationItem){
            setDonations(donationItem)   
          }else{
               setNoFound('No Data Found') 
          }
         
     },[])
     const handleRemoveItem=()=>{
          localStorage.clear();
          setDonations([]);
          setNoFound('No Data Found')

     }
     
     return (
          <div className="mx-24 my-10">
             
             {noFound ? <div className="h-[80vh] flex justify-center items-center text-center">
                    <div>
                    <p className="  text-2xl mb-8 ">{noFound} . . . ! ! !</p>
                    
                    <Link to={'/'}>
    <button
      className=" px-5 py-3  text-sm font-medium text-white hover:text-black bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring"
    >
      Go Back Home
    </button>
    </Link>
                    </div>
               </div>
                : 
               <div>
                {donations?.length > 0 && <div>
                    <button onClick={handleRemoveItem} className=" px-5 bg-red-500 hover:bg-red-400 block mx-auto rounded-md p-2 mb-6 font-semibold text-white hover:text-black">Deleted All Donation</button>
                    
                    </div>} 
               <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">

               {isShow ? 
               donations?.map(donate=><DonateCard key={donate.id} donate={donate}></DonateCard>)
               : 
               donations?.slice(0,4).map(donate=><DonateCard key={donate.id} donate={donate}></DonateCard>)}

               </div>
               {donations?.length > 4 &&  <button onClick={()=>setIsShow(!isShow)} className=" px-10 mt-7 bg-red-500 hover:bg-red-400 block mx-auto rounded-md p-2 mb-6 font-semibold text-white hover:text-black">{isShow ? "See Less": "See More"}</button>}
               </div> }               
          </div>
     );
};

export default Donation;