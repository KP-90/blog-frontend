import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NewPost from "./components/NewPost";
import BlogSingle from "./components/BlogSingle";
const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
        </Routes>
      </BrowserRouter>
    );
};
  
export default RouteSwitch;