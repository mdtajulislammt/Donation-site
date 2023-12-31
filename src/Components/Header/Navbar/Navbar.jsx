import { NavLink } from "react-router-dom";


const Navbar = () => {
     return (
          <div>
               <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="font-bold menu-sm dropdown-content mt-3 z-[1]  rounded-box w-52">
      <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Home</NavLink></li>
    <li><NavLink to='donation'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Donation</NavLink></li>
    <li><NavLink to='/statistics'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Statistics</NavLink></li>
      </ul>
    </div>
    <img className="w-32 md:w-44 ml-24 md:ml-96 lg:ml-0" src="https://i.ibb.co/KD8M4qn/Logo.png" alt="" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex items-center gap-6 font-bold">
    <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Home</NavLink></li>
    <li><NavLink to='donation'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Donation</NavLink></li>
    <li><NavLink to='/statistics'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#FF444A]   underline" : ""
              }>Statistics</NavLink></li>
    </ul>
  </div>
  
</div>
          </div>
     );
};

export default Navbar;