import { Route, Routes, Router } from "react-router-dom";
import "./App.css";

import SignUp from "./components/SignUp";
import OtpForm from "./components/OtpForm";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/dashboard-page";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
            <SignUp />
          </MainLayout>
        }
      />
      <Route
        path="/otp"
        element={
          <MainLayout text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
            <OtpForm />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default App;
