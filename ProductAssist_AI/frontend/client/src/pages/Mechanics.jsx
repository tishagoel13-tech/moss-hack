import Navbar from "../components/Navbar";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Mechanics() {

    const [city, setCity] = useState("");

    const [searchParams] = useSearchParams();

    const product =
        searchParams.get("product") || "";

    const mechanics = [
        {
            name: "ABC Scooter Repair",
            city: "Lucknow",
            type: "Scooter",
            phone: "9876543210"
        },
        {
            name: "Sharma Two Wheeler",
            city: "Lucknow",
            type: "Scooter",
            phone: "9876543211"
        },
        {
            name: "CoolAir Services",
            city: "Delhi",
            type: "Air Conditioner",
            phone: "9876543212"
        },
        {
            name: "Laptop Care Center",
            city: "Delhi",
            type: "Laptop",
            phone: "9876543213"
        }
    ];

    const filteredMechanics =
        mechanics.filter(
            mechanic =>
                mechanic.city
                    .toLowerCase()
                    .includes(city.toLowerCase()) &&
                mechanic.type
                    .toLowerCase()
                    .includes(product.toLowerCase())
        );

    return (
        <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-6">

                <h1 className="text-4xl font-bold mb-4">
                    Nearby Mechanics
                </h1>

                <h2 className="text-xl font-semibold mb-4">
                    Showing mechanics for: {product}
                </h2>

                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter your city"
                        value={city}
                        onChange={(e) =>
                            setCity(e.target.value)
                        }
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {city.trim() === "" ? (
  <p className="text-gray-500">
    Enter your city to find nearby mechanics.
  </p>
) : filteredMechanics.length > 0 ? (
                        filteredMechanics.map((m, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-2xl p-6"
                            >
                                <h2 className="text-xl font-bold">
                                    {m.name}
                                </h2>

                                <p className="mt-2">
                                    📍 {m.city}
                                </p>

                                <p className="mt-2">
                                    📞 {m.phone}
                                </p>

                                <a
                                    href={`tel:${m.phone}`}
                                    className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Call Now
                                </a>
                            </div>
                        ))
                    ) : (
  <p className="text-red-500">
    No mechanics found for "{city}".
  </p>
)}

                </div>

            </div>
        </>
    );
}