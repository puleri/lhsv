import Link from "next/link";

export const metadata = {
  title: "New Homes | Lockhart Suver",
  description: "New homes portfolio index for Lockhart Suver.",
};

const homes = [
  {
    name: "The Bluff",
    href: "/portfolio/magnolia-residence/",
    image: "/wp-content/uploads/2024/04/Lawtonwood_30.jpg",
    position: "center bottom",
  },
  {
    name: "Dorothy’s House",
    href: "/portfolio/dorothys-house/",
    image: "/wp-content/uploads/2014/01/Front2_DorothyHR_1.jpg",
  },
  { name: "508 Residence", href: "/portfolio/508-residence/", image: "/wp-content/uploads/2013/05/508feature.jpg" },
  {
    name: "Southpaw Residence",
    href: "/portfolio/southpaw-residence/",
    image: "/wp-content/uploads/2014/02/southpawTitleHRes.jpg",
    position: "bottom left",
  },
  { name: "The Ranch", href: "/portfolio/the-ranch/", image: "/wp-content/uploads/2014/01/theRanch_ProjectsImage2000.jpg", position: "center right" },
  { name: "Pole Pass Cabin", href: "/portfolio/pole-pass-cabin/", image: "/wp-content/uploads/2015/05/LR_11054_00_Pole_Pass_N37.jpg" },
  { name: "DMG Residence", href: "/portfolio/dmg-residence/", image: "/wp-content/uploads/2016/02/CRO1558pc.jpg" },
  { name: "Mercer Island Residence", href: "/portfolio/mercer-island-residence/", image: "/wp-content/uploads/2017/08/Demopulos_38_2k.jpg" },
  { name: "Arrow Bay", href: "/portfolio/arrow-bay/", image: "/wp-content/uploads/2024/10/Arrow-Bay_5692.jpg" },
  { name: "Beans-Bight Residence", href: "/portfolio/beans-bight-residence/", image: "/wp-content/uploads/2016/09/koyoDSC03424revB.jpg", position: "bottom center" },
  { name: "Union Bay Residence", href: "/portfolio/union-bay-residence/", image: "/wp-content/uploads/2017/06/Talbot_3.jpg" },
  { name: "The Perch", href: "/portfolio/the-perch/", image: "/wp-content/uploads/2025/11/1_x_515_Comstock_24.jpg" },
  { name: "Madison Park", href: "/portfolio/madison-park/", image: "/wp-content/uploads/2014/01/madisonFrontPiece-390xHR2000.jpg" },
  { name: "The Cottage", href: "/portfolio/the-cottage/", image: "/wp-content/uploads/2017/09/403_Galer-304_2K.jpg", darkText: true },
  { name: "Longhouse Residence", href: "/portfolio/longhouse-residence/", image: "/wp-content/uploads/2014/02/longhouseTitleHRes.jpg" },
  { name: "Bellevue Residence", href: "/portfolio/laing-residence/", image: "/wp-content/uploads/2014/05/laing3.jpg" },
  { name: "Stone House", href: "/portfolio/stone-house/", image: "/wp-content/uploads/2014/05/stonehouse2.jpg" },
  { name: "Beans View", href: "/portfolio/beans-view/", image: "/wp-content/uploads/2025/12/2_CR_VS_Beansview-011.jpg" },
  {
    name: "Yarrow Point Residence",
    href: "/portfolio/yarrow-point-residence/",
    image: "/wp-content/uploads/2014/02/yarrowPointTitleHRes.jpg",
    position: "top center",
  },
  { name: "Phantom Lake Residence", href: "/portfolio/phantom-lake-residence/", image: "/wp-content/uploads/2014/02/phantomLakeResTitleHRes.jpg" },
  { name: "Phantom Lake Studio", href: "/portfolio/phantom-lake-studio/", image: "/wp-content/uploads/2014/05/phantomlakeStudio3.jpg" },
  { name: "Medina Residence", href: "/portfolio/obot-residence/", image: "/wp-content/uploads/2014/02/OBOTtitleHRes.jpg" },
];

export default function NewHomesPage() {
  return (
    <main className="new-homes-main">
      <section className="new-homes-title-row">
        <div className="projects2-wrapper">
          <h1>New Homes</h1>
        </div>
      </section>

      <section className="new-homes-list projects2-wrapper">
        {homes.map((home) => (
          <article key={home.name} className="new-homes-item">
            <div
              className="new-homes-image"
              style={{ backgroundImage: `url(${home.image})`, backgroundPosition: home.position ?? "center center" }}
            />
            <div className="new-homes-item-content">
              <div />
              <div className="new-homes-copy">
                <h2 className={home.darkText ? "dark-text" : ""}>{home.name}</h2>
                <h4>
                  <strong>
                    <Link href={home.href}>view portfolio</Link>
                  </strong>
                </h4>
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
          <Link href="/portfolio/projects-2/">Previous</Link> | <Link href="/portfolio/magnolia-residence/">Next</Link>
        </p>
      </section>
    </main>
  );
}
