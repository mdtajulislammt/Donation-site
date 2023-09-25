import PropTypes from 'prop-types';

const DonationItem = ({donation}) => {
     const {id,Picture,Title,Category,Color_for_category_bg,Color_for_card_bg,Color_for_text,button_background,} =donation || {}

     return (
          <div>
               <h1>name{id}</h1>
              <img className="rounded-t-md" src={Picture} alt="" />
              <h2>{Title}</h2>
          </div>
     );
};
DonationItem.propTypes = {
     donationItem : PropTypes.func
   };
   
export default DonationItem;