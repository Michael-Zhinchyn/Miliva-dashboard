import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App"; // логін сторінка
import ManagementLayout from "./pages/Management/Layout";
import Main from "./pages/Management/Main";
import Drivers from "./pages/Management/Drivers";
import Trucks from "./pages/Management/Trucks";
import Trailers from "./pages/Management/Trailers";
import Staff from "./pages/Management/Staff";

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
