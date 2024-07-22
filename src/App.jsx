import { Route, Routes } from "react-router-dom";
import { Templates } from "./Pages/Templates.jsx";
import { Generate } from "./Pages/Generate.jsx";
import { Home } from "./Pages/Home";

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