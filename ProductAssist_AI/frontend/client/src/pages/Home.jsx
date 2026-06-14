import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const products = [
  {
    name: "Honda Activa 6G",
    category: "Scooter",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
  },
  {
    name: "LG Washing Machine",
    category: "Appliance",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
  },
  {
    name: "Samsung AC",
    category: "Air Conditioner",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Stats */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Products</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Companies</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p>Diagnoses</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">95%</h3>
            <p>Accuracy</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Popular Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                1. Select Product
              </h3>
              <p>
                Choose your product and access manuals,
                videos and support resources.
              </p>
            </div>

            <div className="shadow rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                2. Ask AI Assistant
              </h3>
              <p>
                Explain the issue and receive
                step-by-step troubleshooting.
              </p>
            </div>

            <div className="shadow rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-3">
                3. Contact Mechanic
              </h3>
              <p>
                If unresolved, connect with trusted
                mechanics nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}