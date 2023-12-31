import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import {  useState } from "react";

const Header = ({setSearch}) => {
    const [searchBtn, setSearchBtn]= useState('');
    if(searchBtn == ""){
       setSearch(searchBtn) ;
    }

    
    const handleSearch = (searchBtn)=>{
            setSearch(searchBtn)
    
    }
     return (
          <div className=" relative  text-center lg:h-[85vh]  ">
               <h1 className=" text-xl md:text-4xl lg:text-5xl font-bold pt-10 md:pt-44 lg:pt-52 mb-2 md:mb-8 lg:mb-10 ">I Grow By Helping People In Need</h1>
               <div>
                    
            <form>
                <div className="flex ">
                
                    <div className="relative w-[300px] lg:w-[600px] mx-auto  ">
                        <input onChange={(e)=>{setSearchBtn(e.target.value)}}  type="search" id="search-dropdown" className="block p-3 w-full z-20 text-sm text-black rounded-lg  border " placeholder="Search here . . ." required />

                        <NavLink><button onClick={()=>handleSearch(searchBtn)} type="submit" className="absolute top-0 right-0 p-3 px-5 text-sm font-medium h-full text-white bg-[#FF444A] rounded-r-lg border border-[#FF444A] hover:bg-[#a43d40]">
                        
                            <span className="">Search</span>
                        </button></NavLink>
                    </div>
                </div>
            </form>

               </div>
          </div>
     );
};


Header.propTypes = {
    setSearch: PropTypes.func
   
  }
  

export default Header;