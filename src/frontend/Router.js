import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages/index";
import Mockman from "mockman-js";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test-api" element={<Mockman />} />
    </Routes>
  );
}
