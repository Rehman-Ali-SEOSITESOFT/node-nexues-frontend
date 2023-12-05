import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "../pages/NoeOwnerHome";
import Home2 from "../pages/ColitionHome";
import Home3 from "../pages/ApplicationDeveloperHome";
import Home4 from "../pages/UsersHome";
import Home5 from "../pages/AssetsBackendHome";
import Home6 from "../pages/AuthenticIntelligenceHome";
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


