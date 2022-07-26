import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Appconfig } from "../config";

const fetchItems = (lang) =>
  axios
    .get(`${Appconfig.apiUrl}posts/${lang}`)
    .then((response) => response.data);

export const usePosts = (lang) => {
  return useQuery(["posts"], () => fetchItems(lang));
};
