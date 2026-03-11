import Link from "next/link";

export const metadata = {
  title: "Projects | Lockhart Suver",
  description: "Project portfolio categories and links for Lockhart Suver.",
};

const projectGroups = [
  {
    heading: "New Homes",
    textLight: true,
    backgroundImage: "/wp-content/uploads/2015/12/508feature-min.jpg",
    links: [
      ["The Bluff", "/portfolio/the-bluff/"],
      ["Dorothy’s House", "/portfolio/dorothys-house/"],
      ["508 Residence", "/?portfolio=508-residence"],
      ["Southpaw Residence", "/?portfolio=test-residence"],
      ["The Ranch", "/portfolio/the-ranch/"],
      ["Pole Pass Cabin", "/portfolio/pole-pass-cabin/"],
      ["DMG Residence", "/?portfolio=dmg-residence"],
      ["Mercer Island Residence", "/portfolio/mercer-island-residence/"],
      ["Arrow Bay", "/portfolio/arrow-bay/"],
      ["Beans-Bight Residence", "/portfolio/beans-bight-residence/"],
      ["Union Bay Residence", "/portfolio/union-bay-residence/"],
      ["The Perch", "/portfolio/comstock/"],
      ["Madison Park", "/portfolio/madison-park/"],
      ["The Cottage", "/portfolio/the-cottage/"],
      ["Longhouse Residence", "/portfolio/longhouse-residence/"],
      ["Bellevue Residence", "/portfolio/laing-residence/"],
      ["Stone House", "/?portfolio=stone-house"],
      ["Beans View", "/portfolio/beans-view/"],
      ["Yarrow Point Residence", "/?portfolio=yarrow-point-residence"],
      ["Phantom Lake Residence", "/?portfolio=phantom-lake-residence"],
      ["Phantom Lake Studio", "/?portfolio=phantom-lake-studio"],
      ["Medina Residence", "/?portfolio=obot-residence"],
    ],
  },
  {
    heading: "Downtown Condos",
    backgroundImage: "/wp-content/uploads/2013/11/remodel_title2.jpg",
    links: [
      ["Four Seasons Penthouse", "/portfolio/four-seasons-penthouse/"],
      ["Bruno Residence", "/portfolio/bruno-residence/"],
      ["Pioneer Square Residence", "/portfolio/pioneer-square-residence/"],
      ["1521 Residence", "/portfolio/1521-condo/"],
      ["Big Star Belltown", "/portfolio/big-star-belltown/"],
      ["First Hill Penthouse", "/portfolio/first-hill-penthouse/"],
      ["Carillon Point Residence", "/portfolio/carillon-point-residence/"],
    ],
  },
  {
    heading: "Remodels and Renovations",
    textLight: true,
    backgroundImage: "/wp-content/uploads/2014/05/zen5.jpg",
    links: [
      ["Restoration Point Residence", "/portfolio/restoration-point-residence/"],
      ["Light House Residence", "/portfolio/light-house-residence/"],
      ["Queen Anne Residence", "/portfolio/queen-anne-residence-2/"],
      ["Waverly Residence", "/portfolio/waverly-residence/"],
      ["601 Residence", "/portfolio/601-residence/"],
      ["Capitol Hill Arts and Crafts Home", "/portfolio/capitol-hill-arts-and-crafts-home/"],
      ["Edmonds Waterfront Residence", "/portfolio/edmonds-waterfront-residence/"],
      ["Classic Seattle", "/portfolio/classic-seattle/"],
      ["Tumble Creek Residence", "/portfolio/tumble-creek-residence/"],
      ["Laurelhurst Kitchen", "/portfolio/laurelhurst-kitchen/"],
      ["Zen House", "/portfolio/zen-house/"],
      ["Capitol Hill Kitchen", "/portfolio/capitol-hill-kitchen/"],
    ],
  },
  {
    heading: "Small Projects",
    textLight: true,
    backgroundImage: "/wp-content/uploads/2014/05/windermereArbors8.jpg",
    links: [
      ["Madison Park Residence Remodel", "/portfolio/madison-park-residence-remodel/"],
      ["Queen Anne Bathroom", "/portfolio/queen-anne-bathroom/"],
      ["Denny-Blaine", "/portfolio/denny-blaine/"],
      ["Madrona Residence", "/portfolio/madrona-residence/"],
      ["Windermere Arbors", "/portfolio/windermere-arbors/"],
      ["Washington Park Residence", "/portfolio/washington-park-residence/"],
    ],
  },
  {
    heading: "Commercial",
    textLight: true,
    backgroundImage: "/wp-content/uploads/2015/12/home5_reduced.jpg",
    links: [["Currently Under Construction", "/commercial/"]],
  },
];

export default function ProjectsTwoPage() {
  return (
    <main className="projects2-main">
      <section className="projects2-title-row">
        <div className="projects2-wrapper text-orange">
          <h1>Projects</h1>
        </div>
      </section>

      <section className="projects2-groups">
        {projectGroups.map((group) => (
          <article
            key={group.heading}
            className={`projects2-group ${group.textLight ? "" : "text-normal"}`}
            style={{ backgroundImage: `url(${group.backgroundImage})` }}
          >
            <div className="projects2-overlay" />
            <div className="projects2-wrapper projects2-group-content">
              <div className="projects2-empty-col" />
              <div className="projects2-list-col">
                <h2>{group.heading}</h2>
                <ul className="text-yellow">
                  {group.links.map(([label, href]) => (
                    <li key={href} className="hover-orange">
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="projects2-bottom-row projects2-wrapper">
        <h3>
          <Link href="/contact/">Please contact us for more information about building your next project.</Link>
        </h3>
        <p>
          <Link href="/">Previous</Link> | <Link href="/portfolio/new_homes/">Next</Link>
        </p>
      </section>
    </main>
  );
}
