import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          My Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">
              Registered Products
            </h2>

            <p className="text-4xl font-bold mt-3">
              3
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">
              Diagnoses Performed
            </h2>

            <p className="text-4xl font-bold mt-3">
              14
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg">
              Maintenance Alerts
            </h2>

            <p className="text-4xl font-bold mt-3">
              2
            </p>
          </div>

        </div>

      </div>
    </>
  );
}