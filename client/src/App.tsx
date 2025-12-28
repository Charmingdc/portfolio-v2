import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import MainPage from "@/pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<h1> Projects </h1>} />
      </Route>
    </Routes>
  );
};

export default App;
