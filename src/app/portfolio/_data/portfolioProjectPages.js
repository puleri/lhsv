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

const dorothysHouseImages = [
  "b_DorothyHR_2.jpg",
  "c_DorothyHR_3-scaled.jpg",
  "d_DorothyHR_4-scaled.jpg",
  "e_DorothyHR_5-scaled.jpg",
  "f_DorothyHR_6-scaled.jpg",
  "g_DorothyHR_7c.jpg",
  "h_DorothyHR_8-scaled.jpg",
  "i_DorothyHR_9c.jpg",
  "j_DorothyHR_10.jpg",
  "k_DorothyHR_11.jpg",
  "l_DorothyHR_12.jpg",
  "m_DorothyHR_13.jpg",
  "n_DorothyHR_14-scaled.jpg",
  "o_DorothyHR_15.jpg",
  "p_DorothyHR_16.jpg",
];

const residence508Images = [
  "508_03.jpg",
  "508_06.jpg",
  "508_09.jpg",
  "508_10.jpg",
  "508_11.jpg",
  "508_12.jpg",
  "508_14.jpg",
  "508_31.jpg",
  "508_32.jpg",
  "508_47.jpg",
  "508_49.jpg",
  "508_58.jpg",
];

const southpawResidenceImages = [
  "southpaw26.jpg",
  "southpaw28.jpg",
  "southpaw03.jpg",
  "southpaw18.jpg",
  "southpaw20.jpg",
  "southpaw11.jpg",
  "southpaw17.jpg",
  "southpaw04.jpg",
  "southpaw06.jpg",
  "southpaw07.jpg",
  "southpaw08.jpg",
  "southpaw10.jpg",
  "southpaw16.jpg",
  "southpaw15.jpg",
  "southpaw23.jpg",
  "southpaw24.jpg",
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
  "dorothys-house": {
    slug: "dorothys-house",
    title: "Dorothy's House",
    category: "New Homes",
    location: "Seattle, Washington",
    heroImage: "/wp-content/uploads/2024/09/a_DorothyHR_1.jpg",
    previousHref: "/portfolio/the-bluff/",
    nextHref: "/portfolio/508-residence/",
    description: [
      "A tree house at waters edge, this home is located in a forested setting, with a number of natural constraints including an adjacent stream running through the property. The narrow footprint inspired a bold cantilever supported by two steel trusses reaching toward the waters edge. Challenging site access required significant off-site fabrication with a bolt-together construction that was embraced by the buildings architecture.",
      "The dramatic retreat has a reserved palette, incorporating cost effective finishes including aluminum clad windows and doors, drywall and applied trim. Reclaimed lighting fixtures from the previous home, stainless woven fabric acting as a guard rail, driftwood colored wire brushed casework accents and patinated steel emphasize its proximity to the salt water environment.",
    ],
    details: [
      {
        label: "Architect:",
        lines: ["Deforest Architects: John Deforest, Rosie Donavan"],
        links: [{ label: "www.deforestarchitects.com", href: "https://www.deforestarchitects.com" }],
      },
      {
        label: "Interiors:",
        lines: ["Lucas Design: David and Suzie Lucas"],
        links: [{ label: "www.lucasinterior.com", href: "https://www.lucasinterior.com" }],
      },
      {
        label: "Landscape Architect:",
        lines: ["SCJ Studio Landscape Architecture: Mark Garff"],
        links: [{ label: "www.scjstudiola.com", href: "https://www.scjstudiola.com" }],
      },
      {
        label: "Photography:",
        lines: ["Benjamin Benschneider Photography"],
        links: [{ label: "www.benschneiderphoto.com", href: "https://www.benschneiderphoto.com" }],
      },
    ],
    galleryImages: dorothysHouseImages.map((image) => ({
      src: `/wp-content/uploads/2024/09/${image}`,
      alt: `Dorothy's House - ${image.replace(/\.jpg$/i, "")}`,
    })),
  },
  "508-residence": {
    slug: "508-residence",
    title: "508 Residence",
    category: "New Homes",
    location: "Washington Park, Seattle, Washington",
    heroImage: "/wp-content/uploads/2014/02/508_01.jpg",
    previousHref: "/portfolio/dorothys-house/",
    nextHref: "/portfolio/southpaw-residence/",
    description: [
      "A modern masterpiece, the design team worked with a palette of four primary materials: concrete, wood, steel and stone. The surfaces of these materials received finishes in rich warm tones and texture, all installed with extreme precision. High ceilings and a wall of windows running parallel with the lake allow natural light to fill the airy open rooms.",
      "Sandstone-paved terraces link the house to the landscape at both the street side and lake side. Maples and black pines nearly 100 years old serve as living pieces of sculpture along side modern steel sculpture and antique Chinese stone benches. Energy-conscious features include a ground-source heat pump and green roofs.",
    ],
    details: [
      {
        label: "Architect:",
        lines: [
          "Peter Conard principal architect",
          "Freya Johnson project architect",
          "Conard Romano Architects (formerly Sullivan Conard Architects)",
        ],
        links: [{ label: "www.conardromano.com", href: "https://www.conardromano.com" }],
      },
      {
        label: "Interiors:",
        lines: ["Doug Rasar Interior Design", "ds@rasarinteriors.com"],
      },
      {
        label: "Landscape Architect:",
        lines: ["Allworth Design"],
        links: [{ label: "www.allworthdesign.com", href: "https://www.allworthdesign.com" }],
      },
      {
        label: "Photography:",
        lines: ["Aaron Leitz Photography"],
        links: [{ label: "www.aaronleitz.com", href: "https://www.aaronleitz.com" }],
      },
    ],
    galleryImages: residence508Images.map((image) => ({
      src: `/wp-content/uploads/2014/02/${image}`,
      alt: `508 Residence - ${image.replace(/\.jpg$/i, "")}`,
    })),
  },
  "southpaw-residence": {
    slug: "southpaw-residence",
    title: "Southpaw Residence",
    category: "New Homes",
    location: "Seward Park, Seattle, Washington",
    heroImage: "/wp-content/uploads/2014/02/southpaw21.jpg",
    previousHref: "/portfolio/508-residence/",
    nextHref: "/portfolio/teanaway-ranch/",
    description: [
      "Unconventional, inventive and daring. Rather than conforming to the typical front yard, house, back yard site plan, the architects boldly chose to locate the house its long axis running East to West, and shifted toward the North property line, in order to create a sunny south facing modern villa with a courtyard that serves as an outdoor living space.",
      "Equally bold is the use of air-placed concrete structural walls, finished with true integral color trowel finished cement stucco, resulting in walls that appear to be carved from a single block of stone. The north wall of the home is monolithic exposed smooth concrete, over 75′ long, 28′ tall and 2′ thick.",
      "Metal roofing, and steel windows and doors create a building shell that will age gracefully with virtually no maintenance. The interiors feature exposed steel and reclaimed fir beams and ceilings, Moroccan tile mosaic floors and a sinuous, sculptural steel stair railing.",
    ],
    details: [
      {
        label: "Architect:",
        lines: ["Replinger Hossner Osolin Architects"],
        links: [{ label: "www.rhoarchitects.com", href: "https://www.rhoarchitects.com" }],
      },
      {
        label: "Interiors:",
        lines: ["Janice Viekman"],
        links: [{ label: "www.viekman.com", href: "https://www.viekman.com" }],
      },
      {
        label: "Landscape Architect:",
        lines: ["Allworth Nussbaum"],
        links: [{ label: "www.allworthnussbaum.com", href: "https://www.allworthnussbaum.com" }],
      },
      {
        label: "Photography:",
        lines: ["Lara Swimmer Photography"],
        links: [{ label: "www.swimmerphoto.com", href: "https://www.swimmerphoto.com" }],
      },
    ],
    galleryImages: southpawResidenceImages.map((image) => ({
      src: `/wp-content/uploads/2014/02/${image}`,
      alt: `Southpaw Residence - ${image.replace(/\.jpg$/i, "")}`,
    })),
  },
};

export default portfolioProjectPages;
