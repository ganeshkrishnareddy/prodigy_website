import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, icon, className = '', ...props }, ref) => {
    const baseInputStyles = 'appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight';
    const stateStyles = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500';
    const widthStyles = fullWidth ? 'w-full' : '';
    const iconStyles = icon ? 'pl-10' : '';

    return (
      <div className={`mb-4 ${widthStyles}`}>
        {label && (
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor={props.id}>
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`${baseInputStyles} ${stateStyles} ${iconStyles} ${widthStyles} focus:outline-none focus:ring-2 transition-all duration-200 ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;