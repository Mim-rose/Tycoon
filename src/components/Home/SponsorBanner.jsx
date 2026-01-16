import SaforBanner from "../../assets/images/SaforTravels.webp";

const SponsorBanner = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-2 text-center">
          <h2
            className="text-xl font-bold text-red-600 px-6 py-2 rounded-lg shadow-md bg-gray-100 inline-block"
          >
            Sponsor
          </h2>
          <p className="text-sm text-gray-700 font-medium mt-2">
            Trusted partners who help us grow
          </p>
        </div>

        {/* Clickable Banner */}
        <a
          href="https://safor-steel.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={SaforBanner}
            alt="Safor Travels Banner"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://placehold.co/1200x400?text=Sponsor+Banner";
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default SponsorBanner;