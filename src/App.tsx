import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "@/components/shared/ScrollToHash";
import Layout from "@/components/shared/Layout";
import MainPage from "@/pages/MainPage";
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));

const App = () => {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:name" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
