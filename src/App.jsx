import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import ProductDetails from "./pages/ProductDetails";
import Opening from "./pages/Openings";
import PrivacyPolicy from "./pages/PrivacyPolicy";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/openings" element={<Opening />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
