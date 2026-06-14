import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <div className="flex items-center gap-2">
          <Wrench className="text-blue-600" />
          <h1 className="font-bold text-xl">
            ProductAssist AI
          </h1>
        </div>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/assistant">Assistant</Link>
          <Link to="/mechanics">Mechanics</Link>
          <Link to="/upload-manual">Upload Manual</Link>
          <Link to="/history">
  History
</Link>
        
        </div>

      </div>
    </nav>
  );
}