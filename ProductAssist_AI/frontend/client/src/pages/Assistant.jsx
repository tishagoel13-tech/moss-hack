import Navbar from "../components/Navbar";
import ChatAssistant from "../components/ChatAssistant";
import { useSearchParams } from "react-router-dom";

export default function Assistant() {

  const [searchParams] = useSearchParams();

  const product =
    searchParams.get("product") || "General Product";

  const brand =
    searchParams.get("brand") || "";

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-6">

          <h2 className="font-bold text-lg mb-2">
            Product Information
          </h2>

          <p>
            <strong>Product:</strong> {product}
          </p>

          {brand && (
            <p>
              <strong>Brand:</strong> {brand}
            </p>
          )}

        </div>

        <ChatAssistant
          product={product}
          brand={brand}
        />

      </div>
    </>
  );
}