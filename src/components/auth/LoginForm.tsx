import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginCredentials } from '../../types/auth';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

const LoginForm: React.FC = () => {
  const { login, error, clearError, loading } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credentials);
  };

  return (
    <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Sign in</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </Link>
        </p>
      </div>

      {error && (
        <Alert 
          variant="error" 
          message={error} 
          onClose={clearError}
        />
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            label="Email address"
            placeholder="you@example.com"
            value={credentials.email}
            onChange={handleChange}
            fullWidth
            icon={<Mail size={18} />}
          />

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            label="Password"
            placeholder="********"
            value={credentials.password}
            onChange={handleChange}
            fullWidth
            icon={<Lock size={18} />}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={loading}
            size="lg"
          >
            Sign in
          </Button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Demo accounts:</p>
          <p>admin@example.com / Admin123!</p>
          <p>user@example.com / User123!</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;