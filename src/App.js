import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}/>
            
          <Route path="/product/:id" element={<ProductDetail />}/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
