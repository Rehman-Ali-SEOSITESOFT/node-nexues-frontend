import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "../pages/Home1";
import Home2 from "../pages/Home2";
import Home3 from "../pages/Home3";
import Home4 from "../pages/Home4";
import Home5 from "../pages/Home5";
import Home6 from "../pages/Home6";
import Home from "../pages/Home";

function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/node-owner" element={<Home1 />} />
        <Route path="/coalition" element={<Home2 />} />
        <Route
          path="/application-developer"
          element={<Home3 />}
        />
        <Route path="/user" element={<Home4 />} />
        <Route
          path="/assets-backend-providers"
          element={<Home5 />}
        />
        <Route
          path="/authentic-intelligence"
          element={<Home6 />}
        />
      </Routes>
    </Router>
  );
}

export default RoutesList;


