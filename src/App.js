import "./App.css";
import ListExample from "./components/Navigation";
import Home from "./components/Home";
import ProductDescription from "./components/ProductDescription";
import Tweet from "./components/Tweets";
import ColdEmails from "./components/ColdEmails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ListExample />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/product-description"
            exact
            element={<ProductDescription />}
          />
          <Route path="/cold-emails" exact element={<ColdEmails />} />
          <Route path="/tweets" exact element={<Tweet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
