import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Appconfig } from "../config";

const fetchItems = (slug) =>
  axios
    .get(`${Appconfig.apiUrl}posts/p/${slug}`)
    .then((response) => response.data);

export const usePost = (slug) => {
  return useQuery(["posts", slug], () => fetchItems(slug));
};
