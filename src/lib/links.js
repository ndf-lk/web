export const getLinks = (lang = "en") => {
  if (lang == "si") {
    return [
      { link: `/home`, label: "මුල් පිටුව" },
      { link: `/news`, label: "ප්‍රවෘත්ති " },
      { link: `/gallery`, label: "ගැලරිය " },

      { link: `/home`, label: "අප ගැන " },
      { link: `/contact`, label: "අප අමතන්න" },
    ];
  } else if (lang == "tm") {
    return [
      { link: `/home/`, label: "முதற்பக்கம் " },
      { link: `/news`, label: "செய்தி  " },
      { link: `/gallery`, label: "கேலரி  " },

      { link: `/home`, label: "எம்மை பற்றி  " },
      { link: `/contact`, label: "தொடர்புகளுக்கு    " },
    ];
  }

  return [
    { link: `/home/`, label: "Home" },
    { link: `/news`, label: "News" },
    { link: `/gallery`, label: "Gallery" },

    { link: `/home`, label: "About Us" },
    { link: `/contact`, label: "Contact Us" },
  ];
};
