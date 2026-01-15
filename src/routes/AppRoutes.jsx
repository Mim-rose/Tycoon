import { Routes, Route } from "react-router-dom";
// import CartPage from "../pages/CartPage";
// import ProtectedRoute from "../components/auth/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetails from "../pages/ProductDetails";
import SearchResultsPage from "../pages/SearchResultsPage";


const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
       <Route path="/category/:type" element={<CategoryPage/>} /> 
      <Route path="/product/:slug" element={<ProductDetails />} />

      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/search" element={<SearchResultsPage/>} />

      {/* PROTECTED */}
      {/* <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;