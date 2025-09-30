import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import Registrasi from './pages/Registrasi.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route element={<AuthLayout />} >
        <Route path='/login' element={<Login />} />
        <Route path='registrasi' element={<Registrasi />} />
      </Route>

    </Routes>
  </BrowserRouter>,
)
