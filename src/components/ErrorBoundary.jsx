import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          background: '#050814',
          color: '#f8fafc',
          fontFamily: 'monospace',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '800px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid #ef4444',
            borderRadius: '8px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.2)'
          }}>
            <h1 style={{ color: '#ef4444', marginTop: 0 }}>⚠️ React Runtime Exception</h1>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1' }}>
              The application crashed. Below is the debug trace:
            </p>
            <pre style={{
              background: '#020617',
              padding: '15px',
              borderRadius: '4px',
              overflowX: 'auto',
              color: '#f87171',
              border: '1px solid rgba(255,255,255,0.05)',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}>
              {this.state.error && this.state.error.toString()}
            </pre>
            {this.state.errorInfo && (
              <pre style={{
                background: '#020617',
                padding: '15px',
                borderRadius: '4px',
                overflowX: 'auto',
                color: '#94a3b8',
                fontSize: '0.85rem',
                border: '1px solid rgba(255,255,255,0.05)',
                marginTop: '15px',
                whiteSpace: 'pre-wrap'
              }}>
                {this.state.errorInfo.componentStack}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px',
                boxShadow: '0 2px 10px rgba(37, 99, 235, 0.3)'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
