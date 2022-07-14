import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, SinglePostDetail } from "../pages/index";
import Mockman from "mockman-js";
import { RequiresAuth } from "./RequiresAuth";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test-api" element={<Mockman />} />
      {/* <Route path="/single-post/:postId" element={<SinglePostDetail />} /> */}
      <Route path="/:component" element={<Home />} />
      {/* <Route path="*" element={<PageNotFound />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/userFeed" element={<UserFeed />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/post" element={<SinglePost />} /> */}
    </Routes>
  );
}
