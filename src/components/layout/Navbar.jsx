import { NavLink } from "react-router-dom";

const categories = [
  { name: "HOME PAGE", path: "/" },
  { name: "REFRIGERATOR", path: "/category/refrigerator" },
  { name: "HOME APPLIANCE", path: "/category/home-appliance" },
  { name: "KITCHEN APPLIANCE", path: "/category/kitchen-appliance" },
  { name: "RICE COOKER", path: "/category/rice-cooker" },
  { name: "MIXER GRINDER", path: "/category/mixer-grinder" },
  { name: "PRESSURE COOKER", path: "/category/pressure-cooker" },
];

const Navbar = () => {
  return (
    <nav className="border-t">
      <div className="max-w-7xl mx-auto px-6 flex gap-8 py-3 text-sm font-semibold justify-between">
        {categories.map((cat) => (
          <NavLink
            key={cat.name}
            to={cat.path}
            className={({ isActive }) =>
              isActive
                ? "text-red-600"
                : "text-black hover:text-red-600"
            }
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
