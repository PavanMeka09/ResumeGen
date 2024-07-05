import { Route, Routes } from "react-router-dom";
import { Generate } from "./Pages/Generate";
import { Home } from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/generate" element={<Generate />}/>
      </Routes>
    </>
  )
}

export default App;