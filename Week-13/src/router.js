import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/shrotenLink";
import { Contact } from "./Contact/Contact";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
