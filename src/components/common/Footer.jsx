import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center lg:text-left">
          
          {/* Brand Section */}
          <aside>
            <h2 className="mb-2 flex justify-center lg:justify-start">
              <img
                src="/Tycoon-Logo.png"
                alt="Tycoon Logo"
                className="h-10 w-auto"
              />
            </h2>
            <p className="text-sm text-gray-600">
              Smart Appliances Platform <br />
              &copy; {currentYear} All rights reserved.
            </p>
          </aside>

          {/* Explore Section */}
          <nav>
            <h6 className="text-red-600 font-semibold mb-3">Explore</h6>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Menu</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Offers</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Catering</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Gift Cards</a>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="text-red-600 font-semibold mb-3">Company</h6>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">About Us</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Careers</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Contact</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Blog</a>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="text-red-600 font-semibold mb-3">Legal</h6>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Terms of Use</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Privacy Policy</a>
            <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Cookie Policy</a>
          </nav>

          {/* Social Media Section */}
          <nav className="flex justify-center lg:justify-end gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors" size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors" size={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors" size={32} />
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;