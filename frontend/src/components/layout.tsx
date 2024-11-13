import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-1 pt-1 text-gray-900 font-bold"
              >
                HowToFit.
              </Link>
              {/* Add more navigation links here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500">© 2024 Your App Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;