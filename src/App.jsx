// src/App.js
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
