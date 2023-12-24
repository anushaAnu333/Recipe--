import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe";
import SavesReceipe from "./pages/SavesReceipe";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-receipe" element={<CreateRecipe />} />
          <Route path="/saved-receipe" element={<SavesReceipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
