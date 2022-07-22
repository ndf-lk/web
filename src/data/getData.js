import english from "./english.json";
import sinhala from "./sinhala.json";

export const getData = (lang) => {
  console.log(lang);
  if (lang == "si") {
    return sinhala;
  }

  return english;
};
