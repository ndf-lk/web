import { Link, useRoutes } from "react-router-dom";
//pages
import { HomePage } from "./pages/home";
import { IndexPage } from "./pages/index";
import { ContactUs } from "./pages/contact";
import { News } from "./pages/news";
import { Post } from "./pages/post";
import { Join } from "./pages/join";

// layouts
import { AppLayout } from "./layouts";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/join",
      element: (
        <AppLayout>
          <Join />
        </AppLayout>
      ),
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
      path: "/post/:slug",
      element: (
        <AppLayout>
          <Post />
        </AppLayout>
      ),
    },

    {
      path: "/news",
      element: (
        <AppLayout>
          <News />
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
