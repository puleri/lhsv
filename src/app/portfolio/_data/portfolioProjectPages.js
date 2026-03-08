const bluffImages = [
  "Lawtonwood_40.jpg",
  "Lawtonwood_11c.jpg",
  "Lawtonwood_15.jpg",
  "Lawtonwood_14c.jpg",
  "Lawtonwood_2.jpg",
  "Lawtonwood_1.jpg",
  "Lawtonwood_8and6split.jpg",
  "Lawtonwood_6.jpg",
  "Lawtonwood_20.jpg",
  "Lawtonwood_23.jpg",
  "Lawtonwood_29.jpg",
  "Lawtonwood_30.jpg",
  "Lawtonwood_31.jpg",
  "Lawtonwood_25.jpg",
  "Lawtonwood_27.jpg",
  "Lawtonwood_36.jpg",
  "Lawtonwood_18.jpg",
  "Lawtonwood_32.jpg",
  "Lawtonwood_16.jpg",
  "Lawtonwood_13_B.jpg",
  "Lawtonwood_12_B.jpg",
  "Lawtonwood_22.jpg",
  "Lawtonwood_38.jpg",
];

const portfolioProjectPages = {
  "the-bluff": {
    slug: "the-bluff",
    title: "The Bluff",
    category: "New Homes",
    location: "Seattle, Washington",
    heroImage: "/wp-content/uploads/2024/04/Lawtonwood_41Balt.jpg",
    previousHref: "/portfolio/new_homes/",
    nextHref: "/portfolio/dorothys-house/",
    description: [
      "An in-city retreat, situated on a low bluff over-looking the Salish Sea, the design team responded to the clients desire for this home to meld with the surrounding landscape. Muscular in its construction with substantial concrete and steel elements the home burrows into the hillside, with more than half the structure below ground, greatly reducing its scale.",
      "Interiors celebrate board form concrete, unadorned structural steel and reclaimed finishes including surfaces clad in beetle-kill pine. The great room two story volume focuses the view to the west, across the bay to the Olympic mountain range beyond.",
      "A solar array, ground source heat and cooling system, planted roofs and significant portions of the building built in-ground help lower energy consumption.",
    ],
    details: [
      {
        label: "Architect:",
        lines: ["Deforest Architects: John Deforest, Melissa Nordquist, Geoff Briggs"],
        links: [{ label: "www.deforestarchitects.com", href: "https://www.deforestarchitects.com" }],
      },
      {
        label: "Interiors:",
        lines: ["Lucas Design", "NB Design"],
        links: [
          { label: "www.lucasinterior.com", href: "https://www.lucasinterior.com" },
          { label: "www.nbdesigngroup.net", href: "https://www.nbdesigngroup.net" },
        ],
      },
      {
        label: "Landscape Architect:",
        lines: ["Atelier PS Landscape Architecture Urbanism, Charles Anderson"],
        links: [{ label: "www.charlesanderson.com", href: "https://www.charlesanderson.com" }],
      },
      {
        label: "Photography:",
        lines: ["Benjamin Benschneider Photography"],
        links: [{ label: "www.benschneiderphoto.com", href: "https://www.benschneiderphoto.com" }],
      },
    ],
    galleryImages: bluffImages.map((image) => ({
      src: `/wp-content/uploads/2024/04/${image}`,
      alt: `The Bluff - ${image.replace(/\.jpg$/i, "")}`,
    })),
  },
};

export default portfolioProjectPages;
