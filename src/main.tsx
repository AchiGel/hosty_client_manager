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
import Team from "./pages/Team.tsx";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";
import Requests from "./pages/Requests.tsx";
import Bookings from "./pages/Bookings.tsx";
import Analytics from "./pages/Analytics.tsx";
import Profile from "./pages/Profile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
