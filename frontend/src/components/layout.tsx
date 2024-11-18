import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import axios from 'axios';

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/users/auth', {
          credentials: 'include'
        });
        setIsAuthenticated(res.ok);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('api/users/logout');
      alert('logged out.');
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to logout. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Home Link */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-orange-500">
                HowToFit.
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to="/home"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/post"
                    className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Post
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/home"
                  className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/post"
                      className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Post
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;