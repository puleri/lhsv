const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Firm Profile", href: "#firm-profile" },
  { label: "Home Service", href: "#home-service" },
  { label: "Contact", href: "#contact" },
];

const sliderImages = [
  "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home1.jpg",
  "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home2.jpg",
  "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home3_reduced.jpg",
  "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home6.jpg",
  "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home5_reduced.jpg",
  "https://lsdev1.wpengine.com/wp-content/uploads/2014/02/home4.jpg",
];

const projectSections = [
  {
    title: "New Homes",
    href: "https://lsdev1.wpengine.com/portfolio/new_homes/",
    cta: "view the new homes portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/508feature-min.jpg",
    light: true,
  },
  {
    title: "Downtown Condos",
    href: "https://lsdev1.wpengine.com/portfolio/downtown-condos/",
    cta: "view the downtown condos portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/bruno_reduced.jpg",
    light: false,
  },
  {
    title: "Remodels and Renovations",
    href: "https://lsdev1.wpengine.com/portfolio/remodels-and-renovations/",
    cta: "view the remodels and renovations portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/601_reduced.jpg",
    light: false,
  },
  {
    title: "Small Projects",
    href: "https://lsdev1.wpengine.com/portfolio/small-projects/",
    cta: "view the small projects portfolio",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/smallprojects_reduced.jpg",
    light: true,
  },
  {
    title: "Commercial",
    href: "https://lsdev1.wpengine.com/commercial/",
    cta: "commercial portfolio under construction",
    image: "https://lsdev1.wpengine.com/wp-content/uploads/2015/12/home5_reduced.jpg",
    light: true,
  },
];

export default function Home() {
  return (
    <div className="homepage">
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="https://lsdev1.wpengine.com" aria-label="Lockhart Suver Home">
            <img
              src="https://lsdev1.wpengine.com/wp-content/uploads/2014/02/LSlogo2.png"
              alt="Lockhart Suver"
            />
          </a>

          <nav aria-label="Primary">
            <ul className="main-nav">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-label="Featured homes">
          <div className="hero-track">
            {sliderImages.concat(sliderImages).map((src, index) => (
              <div key={`${src}-${index}`} className="hero-slide" style={{ backgroundImage: `url(${src})` }} />
            ))}
          </div>
          <div className="hero-overlay" />
          <div className="hero-content container">
            <h1>Craftsmanship in every detail.</h1>
            <p>
              We specialize in turning challenging architecture and one-of-a-kind designs into
              well-crafted homes, interiors and built environments.
            </p>
            <a id="firm-profile" href="https://lsdev1.wpengine.com/about-us/">
              view the firm profile
            </a>
          </div>
        </section>

        <section id="projects" className="project-grid container">
          {projectSections.map((section) => (
            <article
              key={section.title}
              className={`project-card ${section.light ? "text-light" : "text-normal"}`}
              style={{ backgroundImage: `url(${section.image})` }}
            >
              <div className="card-overlay" />
              <div className="card-content">
                <h2>{section.title}</h2>
                <a href={section.href}>{section.cta}</a>
              </div>
            </article>
          ))}
        </section>

        <section id="contact" className="contact container">
          <h3>
            <a href="https://lsdev1.wpengine.com/contact/">
              Please contact us for more information about building your next project.
            </a>
          </h3>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© 2007 — 2026 Lockhart Suver LLC</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/lockhartsuverllc" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lockhartsuver/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
