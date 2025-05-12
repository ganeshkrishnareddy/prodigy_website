import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              SecureAuth
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            )}
            {isAuthenticated && user?.role === 'admin' && (
              <Link to="/admin" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Admin
              </Link>
            )}
          </nav>
          
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-gray-700 flex items-center">
                  {user?.role === 'admin' ? (
                    <Shield size={16} className="mr-1 text-indigo-600" />
                  ) : (
                    <User size={16} className="mr-1 text-indigo-600" />
                  )}
                  {user?.name}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleLogout}
                  className="flex items-center"
                >
                  <LogOut size={16} className="mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;