import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Client from './pages/client/Client.tsx'
import Admin from './pages/admin/Admin.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Register } from './pages/auth/register/Register.tsx'
import { Login } from './pages/auth/login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<Client />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
