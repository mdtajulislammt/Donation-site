import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DonationCard = ({donationCard}) => {
     const {id,Picture,Title,Category,Color_for_category_bg,Color_for_card_bg,Color_for_text} = donationCard || {}
     return (
          <div  >
              <Link to={`/donationCard/${id}`}>
               
<div style={{background:Color_for_card_bg}} className="max-w-sm border shadow-lg rounded-lg ">
    
        <img className=" w-full rounded-t-md" src={Picture} alt="" />
    
    <div className="p-5">
    <h4 style={{background:Color_for_category_bg, color:Color_for_text}} className="  font-medium inline-flex items-center px-3 py-2 text-sm font-medium text-center text-
     rounded-lg  ">
           {Category}
            
        </h4>

            <h5 style={{color:Color_for_text}} className="mb-2 mt-2 text-xl font-medium  text-black ">{Title}</h5>
       
        
       
    </div>
</div>

               </Link> 
          </div>
     );
};

DonationCard.propTypes = {
     donationCard: PropTypes.object,
    
   }
   

export default DonationCard;