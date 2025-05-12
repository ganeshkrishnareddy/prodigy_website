import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertVariant = 'success' | 'info' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  onClose,
}) => {
  const variantStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-400',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      title: 'text-green-800',
      text: 'text-green-700',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-400',
      icon: <Info className="h-5 w-5 text-blue-500" />,
      title: 'text-blue-800',
      text: 'text-blue-700',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
      title: 'text-yellow-800',
      text: 'text-yellow-700',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-400',
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      title: 'text-red-800',
      text: 'text-red-700',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`rounded-lg border-l-4 p-4 ${styles.bg} ${styles.border}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">{styles.icon}</div>
        <div className="ml-3">
          {title && <h3 className={`text-sm font-medium ${styles.title}`}>{title}</h3>}
          <div className={`text-sm ${styles.text}`}>{message}</div>
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              className={`inline-flex rounded-md p-1.5 ${styles.text} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2`}
              onClick={onClose}
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;