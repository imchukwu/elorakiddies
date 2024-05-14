import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import clothings_banner from "./Components/Assets/banner_clothings.png";
import shoes_banner from "./Components/Assets/banner_shoes.png";
import bags_banner from "./Components/Assets/banner_bags.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/clothings"
            element={
              <ShopCategory banner={clothings_banner} category="clothing" />
            }
          />
          <Route
            path="/shoes"
            element={<ShopCategory banner={shoes_banner} category="shoe" />}
          />
          <Route
            path="/bags"
            element={<ShopCategory banner={bags_banner} category="bag" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
