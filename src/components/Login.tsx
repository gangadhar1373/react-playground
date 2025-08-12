import { useEffect, useState } from 'react';
import './Login.css';

interface ValidationErrors {
  username?: string;
  password?: string;
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateUsername = (value: string): string | undefined => {
    if (!value) return 'Username is required';
    if (value.length < 3) return 'Username must be at least 3 characters';
    if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
    return undefined;
  };

  const validatePassword = (value: string): string | undefined => {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/[0-9]/.test(value)) return 'Password must contain at least one number';
    if (!/[!@#$%^&*]/.test(value)) return 'Password must contain at least one special character (!@#$%^&*)';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      username: validateUsername(username),
      password: validatePassword(password),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ username: true, password: true });

    if (validateForm()) {
      // Proceed with login
      console.log('Form is valid, proceeding with login');
    }
  };

  const handleBlur = (field: keyof ValidationErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: field === 'username' ? validateUsername(username) : validatePassword(password),
    }));
  };

  useEffect(() => {
    // Reset form on mount
    setUsername('');
    setPassword('');
    setErrors({});
    setTouched({});
  }, []);

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='input-wrapper'>
            <input
              className={`form-input ${touched.username && errors.username ? 'input-error' : ''}`}
              type='text'
              id='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur('username')}
            />
            {touched.username && errors.username && <div className='error-message'>{errors.username}</div>}
          </div>
        </div>
        <div className='form-group'>
          <div className='input-wrapper'>
            <input
              className={`form-input ${touched.password && errors.password ? 'input-error' : ''}`}
              type='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
            />
            {touched.password && errors.password && <div className='error-message'>{errors.password}</div>}
          </div>
        </div>
        <button type='submit' className='form-submit'>
          Login
        </button>
        <div className='signup-link'>
          Don't have an account? <a href='https://www.google.com'>Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
