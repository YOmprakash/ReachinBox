import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OneBox from "./pages/OneBox";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/onebox" element={<OneBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
