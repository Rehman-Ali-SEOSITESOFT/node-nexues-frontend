import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "../pages/node/NodeOwnerHome";
import Home2 from "../pages/coalition/ColitionHome";
import Home3 from "../pages/app-dev/ApplicationDeveloperHome";
import Home4 from "../pages/users/UsersHome";
import Home5 from "../pages/asset/AssetsBackendHome";
import Home6 from "../pages/authentic/AuthenticIntelligenceHome";
import Home from "../pages/Home";

function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/node" element={<Home1 />} />
        <Route path="/coalition" element={<Home2 />} />
        <Route
          path="/app-dev"
          element={<Home3 />}
        />
        <Route path="/users" element={<Home4 />} />
        <Route
          path="/assets"
          element={<Home5 />}
        />
        <Route
          path="/authentic"
          element={<Home6 />}
        />


      {/* //////////// Route for Node Owner Site ///////// */}



      </Routes>
    </Router>
  );
}

export default RoutesList;


