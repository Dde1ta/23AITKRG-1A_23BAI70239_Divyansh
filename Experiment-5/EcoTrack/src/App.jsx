import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import ProtectedRoute from "./protectedroutes/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import React,{ Suspense } from "react";
const DashboardSummary=React.lazy(()=>import("./pages/DashboardSummary"));
const DashboardAnalytics=React.lazy(()=>import("./pages/DashboardAnalytics"));
const Logs=React.lazy(()=>import("./pages/Logs"));
const DashboardSettings =React.lazy(()=>import("./pages/DashboardSettings"));
import Logout from "./pages/Logout";
import CircularProgress from "@mui/material/CircularProgress";

const App=()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/" element={<DashboardLayout/>}>
            <Route index element={<DashboardSummary/>}/>
            <Route path="summary" element={<DashboardSummary/>}/>
            <Route path="analytics" element={<DashboardAnalytics/>}/>
            <Route path="settings" element={<DashboardSettings/>}/>
          </Route>
          <Route path="/logs" element={<Suspense fallback={<CircularProgress />}>
          <Logs/>
          </Suspense>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;