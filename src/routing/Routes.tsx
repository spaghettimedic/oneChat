import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/home" element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
