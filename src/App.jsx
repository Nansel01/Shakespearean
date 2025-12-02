import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutSchool from "./components/AboutSchool";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Contacts from "./components/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSchool />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
