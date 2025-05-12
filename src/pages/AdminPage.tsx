import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, User, Settings, Shield } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { user } = useAuth();

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-red-500" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Access Denied</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                You do not have permission to access this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-600 rounded-md shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome to the admin control panel</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* User Management Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">2</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all users
                  </a>
                </div>
              </div>
            </div>

            {/* Admin Users Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Admin Users</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">1</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Manage permissions
                  </a>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Settings className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">System Settings</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">Security Configuration</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Configure settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Management
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                A list of all the users registered in your system.
              </p>
            </div>
            <ul className="divide-y divide-gray-200">
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Shield className="h-8 w-8 rounded-full bg-indigo-100 p-1 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-indigo-600">Admin User</div>
                        <div className="text-sm text-gray-500">admin@example.com</div>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        Admin
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <User className="h-8 w-8 rounded-full bg-green-100 p-1 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-indigo-600">Regular User</div>
                        <div className="text-sm text-gray-500">user@example.com</div>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        User
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;