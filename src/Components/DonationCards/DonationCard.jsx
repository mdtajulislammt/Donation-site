import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DonationCard = ({donationCard}) => {
     const {id,Picture,Title,Category,Color_for_category_bg,Color_for_card_bg,Color_for_text,button_background,} = donationCard || {}
     return (
          <div>
              <Link to={`/donationCard/${id}`}>
               
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-md" src={Picture} alt="" />
    
    <div className="p-5">
    <h4 className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-
     bg-[${button_background}] rounded-lg hover:bg-blue-800 `}>
           {Category}
            
        </h4>

            <h5 className="mb-2 mt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
       
        
       
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