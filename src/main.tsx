import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App.tsx';
import './index.css';
import './i18n';

const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Default test key

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
);
