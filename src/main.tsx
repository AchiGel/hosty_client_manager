import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/config";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Settings from "./pages/Settings.tsx";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";
import Requests from "./pages/Requests.tsx";
import Analytics from "./pages/Analytics.tsx";
import Staff from "./pages/Staff.tsx";
import Departments from "./pages/Departments.tsx";
import Shifts from "./pages/Shifts.tsx";
import Integration from "./pages/Integration.tsx";
import SingleDepartment from "./pages/SingleDepartment.tsx";
import SingleDepartmentItem from "./pages/SingleDepartmentItem.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<SingleDepartment />} />
        <Route path="/departments/:id/:id" element={<SingleDepartmentItem />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
