import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/login"
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
              </ProtectedRoute>}/>

          <Route index element={<Login/>}/>

          <Route path="summary" element={<DashboardSummary/>}></Route>
          <Route path="analytics" element={<DashboardAnalytics/>}></Route>
          
          <Route path="/logs" element={
            <ProtectedRoute>
              <Logs/>
            </ProtectedRoute>
          }/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
