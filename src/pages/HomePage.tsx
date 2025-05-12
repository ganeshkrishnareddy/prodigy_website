import React from 'react';
import { Shield, Users, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="People working on laptops" 
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Secure Authentication System</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            A robust authentication system with secure login, registration, and protected routes.
            Built with React, TypeScript, and modern security practices.
          </p>
          <div className="mt-10 flex space-x-4">
            {isAuthenticated ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/dashboard'}
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="primary" size="lg">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary" size="lg">
                    Create Account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Security Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Built with security in mind
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our authentication system implements industry best practices to keep your data safe.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Authentication</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Modern authentication protocols with secure password hashing and storage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">User Management</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Complete user management with registration, login, and profile updates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Role-Based Access</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Granular permissions with role-based access control for different user types.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Protected Routes</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Route-level protection ensuring only authenticated users access restricted content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;