import PropTypes from 'prop-types';
import DonationCard from './DonationCard';


const DonationCards = ({donationCards}) => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-12 md:px-24'>
               {
                    donationCards?.map(donationCard=><DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
               }
          </div>
     );
};

DonationCards.propTypes = {
     donationCards: PropTypes.array,

   }
   

export default DonationCards;