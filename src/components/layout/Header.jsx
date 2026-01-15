import Navbar from "./Navbar";
import SearchBar from "../common/SearchBar";
import CartIcon from "../cart/CartIcon";
import UserAuth from "../auth/UserAuth";

const Header = () => {
  return (
    <>
     
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b transition-all duration-300">
        
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src="/Tycoon-Logo.png"
            alt="Tycoon"
            className="h-8 object-contain"
          />

          {/* SEARCH BAR */}
          <SearchBar />

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-6">
            <CartIcon />
            <UserAuth/>
          </div>

        </div>

        {/* CATEGORY NAVBAR */}
        <Navbar />

      </header>

      {/* 2. THE GHOST DIV (SPACER) */}
      {/* This div is NOT fixed. It stays in the normal flow of the page 
          to push your Carousel/Slider down so it doesn't go under the header. 
          The height (h-[125px]) matches your logo + search bar + navbar height. */}
      <div className="h-[120px] md:h-[135px] w-full"></div>
    </>
  );
};

export default Header;