import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RegisterCredentials } from '../../types/auth';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

const RegisterForm: React.FC = () => {
  const { register, error, clearError, loading } = useAuth();
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!credentials.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!credentials.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!credentials.password) {
      errors.password = 'Password is required';
    } else if (credentials.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(credentials.password)) {
      errors.password = 'Password must include uppercase, lowercase, number and special character';
    }
    
    if (credentials.password !== credentials.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await register(credentials);
    }
  };

  return (
    <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Create an account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            sign in to your account
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
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            label="Full name"
            placeholder="John Doe"
            value={credentials.name}
            onChange={handleChange}
            error={validationErrors.name}
            fullWidth
            icon={<User size={18} />}
          />

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
            error={validationErrors.email}
            fullWidth
            icon={<Mail size={18} />}
          />

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            label="Password"
            placeholder="********"
            value={credentials.password}
            onChange={handleChange}
            error={validationErrors.password}
            fullWidth
            icon={<Lock size={18} />}
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            label="Confirm password"
            placeholder="********"
            value={credentials.confirmPassword}
            onChange={handleChange}
            error={validationErrors.confirmPassword}
            fullWidth
            icon={<Lock size={18} />}
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={loading}
            size="lg"
          >
            Create account
          </Button>
        </div>

        <div className="text-xs text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </Link>
          .
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;