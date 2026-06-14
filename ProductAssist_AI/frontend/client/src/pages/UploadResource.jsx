import Navbar from "../components/Navbar";

export default function UploadResource() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold mb-8">
          Upload Resources
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow">

          <input
            type="file"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Upload
          </button>

        </div>

      </div>
    </>
  );
}