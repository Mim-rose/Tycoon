import { Link } from "react-router-dom";
import MixerImg from "../../assets/images/7.jpeg";
import TvImg from "../../assets/images/9.jpeg";
import RiceImg from "../../assets/images/4.jpeg";
import ComforterImg from "../../assets/images/3.jpeg";
import FridgeImg from "../../assets/images/1.jpeg";
import HeaterImg from "../../assets/images/8.jpeg";

const CategoryGrid = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* 1. Mixer Grinder - Large Vertical/Square (Spans 2 cols, 2 rows) */}
          <Link to="/category/mixer-grinder" className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl shadow-lg">
            <img src={MixerImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Mixer" />
          </Link>

          {/* 2. Smart Living Banner - Top Middle (Spans 2 cols, 1 row) */}
          <Link to="/category/smart-living" className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-xl shadow-lg">
            <img src={ComforterImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Smart Living" />
          </Link>

          {/* 3. Google TV - Right Side (Spans 2 cols, 2 rows) */}
          <Link to="/category/tv" className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl shadow-lg">
            <img src={TvImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="TV" />
          </Link>

          {/* 4. Room Heater - Bottom Middle Left (1 col, 1 row) */}
          <Link to="/category/home-appliance" className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-xl shadow-lg">
            <img src={HeaterImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Heater" />
          </Link>

          {/* 5. Rice Cooker - Bottom Middle Right (1 col, 1 row) */}
          <Link to="/category/rice-cooker" className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-xl shadow-lg">
            <img src={RiceImg} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Rice Cooker" />
          </Link>

        </div>

        {/* 6. Refrigerator "Coming Soon" - Full Width Banner Below */}
        <div className="mt-8">
          <Link to="/category/refrigerator" className="group relative block w-full overflow-hidden rounded-2xl shadow-xl">
             <img src={FridgeImg} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" alt="Fridge Banner" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;