import Navbar from "../components/Navbar";

export default function History() {

  const history =
    JSON.parse(
      localStorage.getItem("history")
    ) || [];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Recent Issues
        </h1>

        {history.length === 0 ? (
          <p>No history available.</p>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 mb-6"
            >
              <h2 className="text-xl font-bold">
                {item.brand
                  ? `${item.brand} ${item.product}`
                  : item.product}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.time}
              </p>

              <div className="mt-4">
                <strong>Issue:</strong>
                <p>{item.question}</p>
              </div>

              <div className="mt-4">
                <strong>Diagnosis:</strong>
                <p>{item.answer}</p>
              </div>
            </div>
          ))
        )}

      </div>
    </>
  );
}