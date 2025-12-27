import { Routes, Route } from "react-router-dom";

import MainPage from "@/pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<h1> Projects </h1>} />
    </Routes>
  );
};

export default App;
