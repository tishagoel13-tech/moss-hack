export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-4">
              ProductAssist AI
            </h2>

            <p className="text-slate-400">
              AI-powered troubleshooting platform
              for products and appliances.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Product
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Marketplace</li>
              <li>AI Assistant</li>
              <li>Mechanics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Legal
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500">
          © 2026 ProductAssist AI
        </div>

      </div>
    </footer>
  );
}