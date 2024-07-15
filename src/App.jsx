import { Route, Routes } from "react-router-dom";
import { Templates } from "./Pages/Templates.jsx";
import { Generate } from "./Pages/Generate.jsx";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/templates" element={<Templates />}/>
        <Route path="/generate" element={<Generate />}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App;