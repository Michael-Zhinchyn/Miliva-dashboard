import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App"; // логін сторінка
import ManagementLayout from "./pages/management/Layout";
import MainPage from "./pages/management/MainPage";
import DriversPage from "./pages/management/DriversPage";
import TrucksPage from "./pages/management/TrucksPage";
import TrailersPage from "./pages/management/TrailersPage";
import StaffPage from "./pages/management/StaffPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* головна сторінка логіну */}
        <Route path="/" element={<App />} />

        {/* менеджмент дашборд */}
        <Route path="/management" element={<ManagementLayout />}>
          <Route index element={<MainPage />} />
          <Route path="drivers" element={<DriversPage />} />
          <Route path="trucks" element={<TrucksPage />} />
          <Route path="trailers" element={<TrailersPage />} />
          <Route path="staff" element={<StaffPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
