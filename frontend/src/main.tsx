import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Patch fetch to automatically adjust API call paths based on deployment mode
const originalFetch = window.fetch;
window.fetch = function(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  // Get the base path from the studio config
  // CLI studio: basePath = '' (empty) - API at /api/*
  // Self-hosted: basePath = '/api/studio' - API at /api/studio/api/*
  const basePath = (window as any).__STUDIO_CONFIG__?.basePath || '';
  
  let url: string;
  if (typeof input === 'string') {
    url = input;
  } else if (input instanceof URL) {
    url = input.toString();
  } else if (input instanceof Request) {
    url = input.url;
  } else {
    url = '';
  }
  
  // Transform API URLs based on deployment mode:
  // CLI studio (basePath = ''): /api/users stays as /api/users
  // Self-hosted (basePath = '/api/studio'): /api/users becomes /api/studio/api/users
  //   - We PREPEND basePath (keeping /api prefix for server-side routing)
  if (url.startsWith('/api/') && basePath && !url.startsWith(basePath)) {
    // Prepend basePath: /api/users -> /api/studio/api/users
    url = basePath + url;
    
    // Recreate the input with the modified URL
    if (typeof input === 'string') {
      input = url;
    } else if (input instanceof URL) {
      input = new URL(url, window.location.origin);
    } else if (input instanceof Request) {
      input = new Request(url, input);
    }
  }
  
  return originalFetch.call(window, input, init);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
