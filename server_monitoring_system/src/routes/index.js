import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const Routes = () => {
  let token = "";
  return useRoutes(token ? privateRoutes : publicRoutes);
};

export default Routes;
