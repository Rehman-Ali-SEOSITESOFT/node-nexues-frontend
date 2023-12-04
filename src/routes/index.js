import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "../pages/Home1";
import NodeOwner from "../pages/NodeOwner";
import Coalition from "../pages/Coalition";
import ApplicationDeveloper from "../pages/ApplicationDeveloper";
import User from "../pages/User";
import AssetBackendProvider from "../pages/AssetsBackendProvider";
import AuthenticIntelligence from "../pages/AuthenticIntelligence";

function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/node-owner" element={<NodeOwner />} />
        <Route path="/coalition" element={<Coalition />} />
        <Route
          path="/applicatioin-developer"
          element={<ApplicationDeveloper />}
        />
        <Route path="/user" element={<User />} />
        <Route
          path="/assets-backend-providers"
          element={<AssetBackendProvider />}
        />
        <Route
          path="/authentic-intelligence"
          element={<AuthenticIntelligence />}
        />
      </Routes>
    </Router>
  );
}

export default RoutesList;


