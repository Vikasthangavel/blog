import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import BlogHome from "./pages/BlogHome";
import PostPage from "./pages/PostPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/post/:slug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
