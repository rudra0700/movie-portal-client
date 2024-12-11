import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from './routers/Routers.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
         <RouterProvider router={router} />
         <ToastContainer />
     </AuthProvider>
  </StrictMode>,
)
