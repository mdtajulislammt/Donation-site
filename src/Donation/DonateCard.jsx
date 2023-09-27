import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonateCard = ({donate}) => {
     const {id,Picture,Title,Category,Color_for_category_bg,Color_for_card_bg,button_background,Color_for_text,Price} = donate || {}
     return (
          <div className="">
               
     <div style={{background:Color_for_card_bg}} className="  flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl md:h-[200px] lg:h-[250px]  lg:w-[550px]">

     <img className="object-cover  md:mr-5 lg:mr-5 rounded-t-lg   md:w-[250px] h-full lg:h-full lg:w-[250px] md:rounded-none md:rounded-l-lg" src={Picture} alt="" />

     <div className="flex flex-col justify-between p-4 mr-10 md:mr-0 lg:mr-0">
     <h4 style={{background:Color_for_category_bg, color:Color_for_text}} className="items-center px-3 py-2 w-24  text-sm font-semibold text-center
     rounded-lg  ">
           {Category}
            
        </h4>
          <h5 className="mb-2 mt-4 text-xl font-bold tracking-tight text-black ">{Title}</h5>
          <p style={{color:button_background}} className="mb-3 font-semibold text-gray-700 ">${Price}</p>
          <Link to={`/donationCard/${id}`}><button style={{background:button_background}} className=" w-40 rounded-lg text-lg font-semibold p-1 text-white">View Details</button></Link>
     </div>
     </div>

          </div>
     );
};

DonateCard.propTypes = {
     donate: PropTypes.object
    
   }

export default DonateCard;