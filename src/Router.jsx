import { Link, useRoutes } from "react-router-dom";
//pages
import { HomePage } from "./pages/home";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return routes;
};
