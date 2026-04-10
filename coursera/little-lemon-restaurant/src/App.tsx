import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default App;
