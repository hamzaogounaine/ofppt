import { motion } from "framer-motion";
import Navbar from './Navbar';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demandes from "./Demandes";
import Home from "./Home";

const App = () => {
  const [isdark, setDark] = useState(false);

  return (
    <motion.div className={`${isdark ? "dark" : ''}`}>
      <BrowserRouter>
        <Navbar setDark={setDark} isdark={isdark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demandes" element={<Demandes />} />
        </Routes>
      </BrowserRouter>
    </motion.div>
  );
};




export default App;
