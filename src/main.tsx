import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import '../src/styles/globals.css';

=======
import './styles/globals.css';
import { LanguageProvider } from '@/hooks/LanguageContext';
>>>>>>> 29b0ea9 (change usable language)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
