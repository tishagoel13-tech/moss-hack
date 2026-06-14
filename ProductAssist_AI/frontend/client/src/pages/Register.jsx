import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}