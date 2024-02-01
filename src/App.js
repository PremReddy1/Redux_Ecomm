import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";
import PageNotFound from "./components/PageNotFound";
import ProductDetails from "./components/ProductDetails";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<AllProducts/>}/>
          <Route exact path="/products/:productId" element={<ProductDetails/>}/>
          <Route  path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
