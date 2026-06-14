import Navbar from "../components/Navbar";

export default function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Product Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800"
              alt="product"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Product Info */}
          <div>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Scooter
            </span>

            <h1 className="text-5xl font-bold mt-4">
              Honda Activa 6G
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              Reliable daily scooter with fuel-efficient engine and
              smart maintenance support.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                Ask AI Assistant
              </button>

              <button className="border border-slate-300 px-6 py-3 rounded-xl">
                Download Manual
              </button>

            </div>

          </div>

        </div>

        {/* Resources */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Product Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white shadow rounded-xl p-6">
              📄 User Manual
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              🔧 Service Manual
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              🎥 Maintenance Video
            </div>

          </div>

        </div>

      </div>
    </>
  );
}