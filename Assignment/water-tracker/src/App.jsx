import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Dashboard from "./pages/dashboard"
import Advice from "./pages/Advice"
import WaterTracker from "./pages/WaterTracker"
import ProtectedRoute from "./routes/ProtectedRoute"
import AuthProvider from "./context/AuthContext"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }>
            <Route index element={<Advice />} />
            <Route path="home" element={<Advice />} />
            <Route path="tracker" element={<WaterTracker />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
