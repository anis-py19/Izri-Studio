import Header from "./Components/Header";
import Hero from "./Pages/Hero";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Offers from "./Pages/Offers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
