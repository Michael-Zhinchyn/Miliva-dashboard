import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App"; // логін сторінка
import ManagementLayout from "./pages/management/Layout";
import Main from "./pages/management/Main";
import Drivers from "./pages/management/Drivers";
import Trucks from "./pages/management/Trucks";
import Trailers from "./pages/management/Trailers";
import Staff from "./pages/management/Staff";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* головна сторінка логіну */}
        <Route path="/" element={<App />} />

        {/* менеджмент дашборд */}
        <Route path="/management" element={<ManagementLayout />}>
          <Route index element={<Main />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="trucks" element={<Trucks />} />
          <Route path="trailers" element={<Trailers />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
