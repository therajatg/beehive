import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, PageNotFound, Landing } from "../pages/index";
import Mockman from "mockman-js";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test-api" element={<Mockman />} />
      <Route path="/page/:component" element={<Home />} />
      <Route path="/profile/:username" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
