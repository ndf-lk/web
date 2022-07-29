import english from "./form/english.json";
import sinhala from "./form/sinhala.json";
import tamil from "./form/tamil.json";

export const getFormData = (lang) => {
  if (lang == "si") {
    return sinhala;
  } else if (lang == "tm") {
    return tamil;
  }

  return english;
};
