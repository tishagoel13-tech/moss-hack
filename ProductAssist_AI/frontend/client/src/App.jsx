import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import ProductDetails from "./pages/ProductDetails";
import Mechanics from "./pages/Mechanics";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Register from "./pages/Register";
import CompanyDashboard from "./pages/CompanyDashboard";
import AddProduct from "./pages/AddProduct";
import UploadResource from "./pages/UploadResource";
import UploadManual from "./pages/UploadManual";
import History from "./pages/History";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/mechanics" element={<Mechanics />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/company" element={<CompanyDashboard />} />
<Route path="/add-product" element={<AddProduct />} />
<Route path="/upload-resource" element={<UploadResource />} />
<Route path="/upload-manual" element={<UploadManual />} />
<Route
  path="/history"
  element={<History />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;