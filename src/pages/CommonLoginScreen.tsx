import React, { useState } from 'react';
import { UserRole } from '../types/curriculum';
import { sound } from '../utils/audio';
import { 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Lock, 
  User, 
  AlertCircle, 
  Loader2,
  Sparkles
} from 'lucide-react';

interface CommonLoginScreenProps {
  initialRole?: UserRole;
  onSuccess: (role: UserRole) => void;
  onBack: () => void;
  onGoToPortalSelect?: () => void;
}

export const CommonLoginScreen: React.FC<CommonLoginScreenProps> = ({
  initialRole = 'student',
  onSuccess,
  onBack
}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedId = userId.trim();
    const trimmedPassword = password.trim();

    let authenticatedRole: UserRole | null = null;

    if (trimmedId === 'student01' && trimmedPassword === 'student123') {
      authenticatedRole = 'student';
    } else if (trimmedId === 'teacher01' && trimmedPassword === 'teacher123') {
      authenticatedRole = 'teacher';
    } else if (trimmedId === 'admin01' && trimmedPassword === 'admin123') {
      authenticatedRole = 'admin';
    }

    // If navigated specifically from Teacher or Admin portal in "Who are you today?", enforce role
    if (initialRole === 'teacher' && authenticatedRole !== 'teacher') {
      authenticatedRole = null;
    } else if (initialRole === 'admin' && authenticatedRole !== 'admin') {
      authenticatedRole = null;
    }

    if (!authenticatedRole) {
      sound.playTryAgain();
      setErrorMessage('Invalid ID or Password');
      return;
    }

    // Successful credentials match
    sound.playSuccess();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSuccess(authenticatedRole);
    }, 450);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
        position: 'relative',
        backgroundColor: 'var(--bg-app)'
      }}
    >
      {/* Decorative ambient background elements */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '12%', 
          left: '12%', 
          width: '280px', 
          height: '280px', 
          borderRadius: '50%', 
          background: 'rgba(37, 99, 235, 0.05)', 
          filter: 'blur(50px)', 
          pointerEvents: 'none',
          zIndex: 0 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '12%', 
          right: '12%', 
          width: '280px', 
          height: '280px', 
          borderRadius: '50%', 
          background: 'rgba(139, 92, 246, 0.06)', 
          filter: 'blur(50px)', 
          pointerEvents: 'none',
          zIndex: 0 
        }} 
      />

      {/* Top Left Back Button */}
      <button
        type="button"
        className="btn-secondary"
        onClick={() => {
          sound.playClick();
          onBack();
        }}
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 20,
          gap: '0.4rem',
          padding: '0.55rem 0.95rem',
          boxShadow: 'var(--shadow-sm)'
        }}
        aria-label="Go Back"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      {/* Centered Login Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Brand Tag / Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span
            className="badge-tag"
            style={{
              backgroundColor: '#EFF6FF',
              color: 'var(--primary-blue)',
              border: '1px solid #BFDBFE',
              padding: '0.35rem 0.9rem'
            }}
          >
            <Sparkles size={15} /> ROBO LAB LMS PORTAL
          </span>
        </div>

        {/* Main Login Card */}
        <div
          className="card-base"
          style={{
            padding: '2.5rem 2rem',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 16px 40px -8px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          {/* Card Heading */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: '0.4rem',
                letterSpacing: '-0.02em'
              }}
            >
              Welcome Back!
            </h1>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-medium)',
                lineHeight: 1.45
              }}
            >
              Sign in to continue your robotics journey.
            </p>
          </div>

          {/* Error Message Box */}
          {errorMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FECACA',
                color: '#DC2626',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
              role="alert"
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {/* ID / Username Field */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label
                htmlFor="user-id"
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '0.45rem'
                }}
              >
                ID
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    color: 'var(--text-light)',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <User size={18} />
                </span>
                <input
                  id="user-id"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your ID"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    fontSize: '1rem',
                    color: 'var(--text-dark)',
                    backgroundColor: 'var(--bg-card)',
                    outline: 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  marginBottom: '0.45rem'
                }}
              >
                Password
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    color: 'var(--text-light)',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <Lock size={18} />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '0.85rem 3rem 0.85rem 2.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-light)',
                    fontSize: '1rem',
                    color: 'var(--text-dark)',
                    backgroundColor: 'var(--bg-card)',
                    outline: 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    padding: '0.4rem',
                    color: 'var(--text-light)',
                    borderRadius: 'var(--radius-sm)',
                    minHeight: 'auto'
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderRadius: 'var(--radius-lg)',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.85 : 1
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
