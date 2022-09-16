import Home from "./pages/Home";
import Add from "./pages/Add";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default App;
