export const getLinks = (lang = "en") => {
  if (lang == "si") {
    return [
      { link: `/home/${lang}`, label: "මුල් පිටුව" },
      { link: `/${lang}/news`, label: "ප්‍රවෘත්ති " },
      { link: `${lang}/gallery`, label: "ගැලරිය " },

      { link: `/${lang}/home`, label: "අප ගැන " },
      { link: `/contact/${lang}`, label: "අප අමතන්න" },
    ];
  } else if (lang == "pt") {
    return [
      { link: `/home/${lang}`, label: "முதற்பக்கம் " },
      { link: `/${lang}/news`, label: "செய்தி  " },
      { link: `/${lang}/gallery`, label: "கேலரி  " },

      { link: `/${lang}/home`, label: "எம்மை பற்றி  " },
      { link: `/${lang}/contact`, label: "தொடர்புகளுக்கு    " },
    ];
  }

  return [
    { link: `/home/${lang}`, label: "Home" },
    { link: `/${lang}/news`, label: "News" },
    { link: `/${lang}/gallery`, label: "Gallery" },

    { link: `/${lang}/home`, label: "About Us" },
    { link: `/contact/${lang}`, label: "Contact Us" },
  ];
};
