import CategoryGrid from "../components/Home/CategoryGrid";
import NewArrivals from "../components/Home/NewArrivals";
import SponsorBanner from "../components/Home/SponsorBanner";
import TopCategories from "../components/Home/TopCategories";
import Carousel from "../components/ui/Carousel";
const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mt-6">
        <div className="max-w-6xl mx-auto px-4">
          <Carousel />
        </div>
      </section>
            
      <section className="mt-10">
        <TopCategories/>
      </section>
      <section className="mt-10">
        <NewArrivals/>
      </section>
      <section className="mt-10">
        <CategoryGrid/>
      </section>
      <section className="mt-6">
        <SponsorBanner/>
      </section>


    </main>
  );
};

export default HomePage;