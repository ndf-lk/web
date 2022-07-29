import english from "./english.json";
import sinhala from "./sinhala.json";
import tamil from "./tamil.json";

export const getData = (lang) => {
  if (lang == "si") {
    return sinhala;
  } else if (lang == "tm") {
    return tamil;
  }

  return english;
};
