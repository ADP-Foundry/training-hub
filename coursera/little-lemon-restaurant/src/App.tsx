import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Reservation from "./pages/reservation";
import Orders from "./pages/orders";
import Login from "./pages/auth/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="order" element={<Orders />} />
      </Route>
      <Route path="auth/login" element={<Login />} />
    </Routes>
  );
};

export default App;
