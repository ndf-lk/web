import { useRoutes } from "react-router-dom";
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
        <AppLayout showHero={true}>
          <Join />
        </AppLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <AppLayout showHero={true}>
          <ContactUs />
        </AppLayout>
      ),
    },

    {
      path: "/post/:slug",
      element: (
        <AppLayout showHero={true}>
          <Post />
        </AppLayout>
      ),
    },

    {
      path: "/news",
      element: (
        <AppLayout showHero={true}>
          <News />
        </AppLayout>
      ),
    },

    {
      path: "/home",
      element: (
        <AppLayout showHero={true}>
          <HomePage />
        </AppLayout>
      ),
    },
  ]);

  return routes;
};
