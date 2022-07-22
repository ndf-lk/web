import { Link, useRoutes } from "react-router-dom";
//pages
import { HomePage } from "./pages/home";
import { IndexPage } from "./pages/index";

// layouts
import { AppLayout } from "./layouts";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <AppLayout>
          <IndexPage />
        </AppLayout>
      ),
    },

    {
      path: "/home/:lang",
      element: (
        <AppLayout>
          <HomePage />
        </AppLayout>
      ),
    },
  ]);

  return routes;
};
