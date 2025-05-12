import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would call your auth service here
      // await authService.requestPasswordReset(email);
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send password reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Check your email</h2>
        </div>
        
        <Alert 
          variant="success" 
          message={`We've sent a password reset link to ${email}. Please check your inbox and follow the instructions.`}
        />
        
        <div className="text-center mt-4">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Forgot your password?</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {error && (
        <Alert 
          variant="error" 
          message={error} 
          onClose={() => setError(null)}
        />
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          icon={<Mail size={18} />}
        />

        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={loading}
            size="lg"
          >
            Send reset link
          </Button>
        </div>

        <div className="text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;