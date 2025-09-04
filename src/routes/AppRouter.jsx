import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Projects from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
// import Blog from "../pages/Blog";
// import BlogDetail from "../pages/BlogDetail";
// import Projects from "../pages/Projects";
// import About from "../pages/About";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
