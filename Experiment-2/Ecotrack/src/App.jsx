import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/Login"
import Logs from "./pages/Logs"
import DashboardLayout from "./pages/DashboardLayout"
import DashboardAnalytics from "./pages/DashboardAnalytics"
import DashboardSummary from "./pages/DashboardSummary"
import ProtectedRoute from "./routes/ProtectedRoute"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header title={"Eco Track"}/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          
          <Route 
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
          }>
            <Route index element={<DashboardAnalytics />} />
            <Route path="summary" element={<DashboardSummary />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="logs" element={<Logs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
