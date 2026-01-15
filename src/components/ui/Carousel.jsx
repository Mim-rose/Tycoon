import { useEffect, useState } from "react";
import slide1 from "../../assets/images/6.jpeg";
import slide2 from "../../assets/images/40.jpg";
import slide3 from "../../assets/images/19.jpg";
import slide4 from "../../assets/images/20.jpg";

const images = [slide1, slide2, slide3, slide4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-xl shadow-md mt-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-red-600" : "bg-red-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
