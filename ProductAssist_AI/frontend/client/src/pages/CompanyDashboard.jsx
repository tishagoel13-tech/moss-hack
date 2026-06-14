import Navbar from "../components/Navbar";

export default function CompanyDashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Company Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">
              Products Listed
            </h2>

            <p className="text-4xl font-bold mt-4">
              25
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">
              Resources Uploaded
            </h2>

            <p className="text-4xl font-bold mt-4">
              120
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold">
              Support Requests
            </h2>

            <p className="text-4xl font-bold mt-4">
              310
            </p>
          </div>

        </div>

      </div>
    </>
  );
}