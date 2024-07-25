import { Route, Routes } from "react-router-dom";
import { Templates } from "./pages/Templates.jsx";
import { Generate } from "./pages/Generate.jsx";
import { Home } from "./pages/Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/templates" element={<Templates />}/>
      <Route path="/generate" element={<Generate />}/>
    </Routes>
  )
}

export default App;