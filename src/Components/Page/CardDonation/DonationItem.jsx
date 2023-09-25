import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const DonationItem = ({donation}) => {
     const {id,Picture,Title,Color_for_text,Price,Description} = donation || {};

     const handleAddDonation = ()=>{
          const addDonationArray = [];
          const donationItem = JSON.parse(localStorage.getItem('donation'));

          if(!donationItem){
               addDonationArray.push(donation);
               localStorage.setItem('donation',JSON.stringify(addDonationArray));
               swal("Good job!", "Product Added Successfully!", "success"); 
          }else{
             const isExits = donationItem?.find(donate=>donate.id === id)
               if(!isExits){
                    addDonationArray.push(...donationItem,donation);
               localStorage.setItem('donation',JSON.stringify(addDonationArray));
               swal("Good job!", "Donate Successfully!", "success"); 
               }else{
                    swal("Error!", "You alrady Donated!", "error");
               }
          }
     }

     return (
          <div className='mx-28'>
              <div className="relative w-full h-[500px]  mx-auto mt-7">
               <img className=" h-full w-full object-cover rounded-md" src={Picture} alt="Random image"  />
               <div className="absolute inset-0 h-20 mt-[420px]  bg-gray-700 opacity-50 rounded-b-md">
               </div>
                    <Link><button onClick={handleAddDonation} style={{background:Color_for_text}} className=' absolute p-2 px-4 text-lg font-semibold text-white rounded-lg -mt-16 ml-5  '>Donate ${Price}</button></Link>
               
               </div>
               <h1 className=' text-4xl font-bold mt-10 mb-5'>{Title}</h1>
               <p className=' text-lg text-justify font-normal mb-20'>{Description}</p>
          </div>
          
     );
};
DonationItem.propTypes = {
     donation : PropTypes.object
   };
   
export default DonationItem;