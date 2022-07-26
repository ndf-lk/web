import { Link, useRoutes } from "react-router-dom";
//pages
import { HomePage } from "./pages/home";
import { IndexPage } from "./pages/index";
import { ContactUs } from "./pages/contact";

// layouts
import { AppLayout } from "./layouts";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },

    {
      path: "/contact",
      element: (
        <AppLayout>
          <ContactUs />
        </AppLayout>
      ),
    },

    {
      path: "/home",
      element: (
        <AppLayout>
          <HomePage />
        </AppLayout>
      ),
    },
  ]);

  return routes;
};
