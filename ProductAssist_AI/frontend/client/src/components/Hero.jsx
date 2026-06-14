import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  
  const handleSubmit = () => {
    if (!product.trim()) {
      alert("Please enter a product type");
      return;
    }

    navigate(
      `/assistant?product=${encodeURIComponent(
        product
      )}&brand=${encodeURIComponent(brand)}`
    );
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">

      <h1 className="text-5xl font-bold mb-4">
        ProductAssist AI
      </h1>

      <p className="text-gray-600 mb-8">
        Diagnose product issues using AI and product manuals
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <input
          type="text"
          placeholder="Product Type (Scooter, AC, Laptop...)"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Brand (Optional)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />


        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get AI Solution
        </button>

      </div>

    </section>
  );
}