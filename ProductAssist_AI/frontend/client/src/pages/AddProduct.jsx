import Navbar from "../components/Navbar";

export default function AddProduct() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow">

          <input
            placeholder="Product Name"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            placeholder="Category"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <textarea
            placeholder="Description"
            rows="5"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Save Product
          </button>

        </div>

      </div>
    </>
  );
}