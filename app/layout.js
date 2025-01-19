// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Cafi AI - Autonomous Interview Agent',
  description: 'Automate your interview process with Cafi AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="p-1 flex justify-center items-center border-b border-gray-800 sticky top-0 z-10 bg-black">
            <div className="flex items-center justify-between w-full max-w-screen-lg">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg.png" alt="Cafi AI Logo" className="w-7 h-7" />
                <h2 className="text-xl font-bold text-green-600">cafi AI</h2>
              </div>
              <nav className="flex items-center space-x-6">
                <a href="#" className="text-sm font-small text-white hover:text-green-500 transition-colors">
                  Home
                </a>
                <a href="#" className="text-sm font-small text-white hover:text-green-500 transition-colors">
                  About
                </a>
                <a href="#" className="text-sm font-small text-white hover:text-green-500 transition-colors">
                  <button className="bg-green-600 px-4 py-2 rounded-lg">Login</button>
                </a>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer Section */}
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
              {/* Left Section */}
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <h4 className="text-green-500 font-semibold">Cafi AI</h4>
                <p>© 2025 Cafi AI. All rights reserved.</p>
              </div>

              {/* Middle Section */}
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <h4 className="font-semibold">Resources</h4>
                <ul>
                  <li>Documentation</li>
                  <li>AI References</li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="w-full sm:w-1/3">
                <h4 className="font-semibold">Legal</h4>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
