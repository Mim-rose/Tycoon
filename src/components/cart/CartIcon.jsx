import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const CartIcon = () => {
 const { cartItems } = useCart();


  return (
    <Link to="/cart" className="relative">
      <FiShoppingBag size={24} />

      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
