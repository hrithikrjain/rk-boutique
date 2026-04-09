import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    {/* CartProvider wraps App so cart state is available globally */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
