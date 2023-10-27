import { Route, Routes } from 'react-router-dom'
import './index.css'
import LoginPage from './components/pages/login/LoginPage'
import Home from './components/pages/main/Home.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
function App() {

  return  (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/accueil/:username" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
