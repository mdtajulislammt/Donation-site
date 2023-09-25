import PropTypes from 'prop-types';
import DonationCard from './DonationCard';


const DonationCards = ({donationCards,search}) => {
    

    
     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-12 md:px-24'>
               {
                    donationCards?.filter((value)=>{

                         if(search== ""){
                              return value;
                         }else if(value?.Category.toLowerCase().includes(search.toLowerCase())){
                              return value ;
                         }
                    })
                    .map(value=>{
                         return(
                              <DonationCard key={value.id} donationCard={value}></DonationCard>   
                         )
                    })
                   
               }
          </div>
     );
};

DonationCards.propTypes = {
     donationCards: PropTypes.array,
     search: PropTypes.string
    
   }
   

export default DonationCards;