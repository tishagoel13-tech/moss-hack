import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition">

      <img
        src={product.image}
        alt=""
        className="h-52 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">

        <h2 className="font-semibold text-lg">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.category}
        </p>

        <Link to="/product">
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}