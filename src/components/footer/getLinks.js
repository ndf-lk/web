import { getLinks } from "../../lib/links";

export const getFooterLinks = (lang = "en") => {
  let links = getLinks(lang);

  return {
    title: "About",
    links: links,
  };
};
