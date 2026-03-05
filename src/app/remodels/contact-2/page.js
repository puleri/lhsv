import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "https://lsdev1.wpengine.com/portfolio/projects-2/" },
  { label: "Firm Profile", href: "https://lsdev1.wpengine.com/about-us/" },
  { label: "Home Service", href: "https://lsdev1.wpengine.com/home-service-2/" },
  { label: "Contact", href: "/remodels/contact-2", active: true },
];

export const metadata = {
  title: "Contact_Lockhart|Suver_2022 | Lockhart Suver",
  description: "Contact information for Lockhart Suver LLC.",
};

export default function ContactRemodelPage() {
  return (
    <div className="contact2-page">
      <header className="contact2-header">
        <div className="contact2-wrapper contact2-header-inner">
          <Link className="contact2-logo" href="/" aria-label="Lockhart Suver Home">
            <img src="https://lsdev1.wpengine.com/wp-content/uploads/2014/02/LSlogo2.png" alt="Lockhart Suver" />
          </Link>

          <nav aria-label="Primary">
            <ul className="contact2-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={item.active ? "is-active" : ""}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="contact2-main">
        <section className="contact2-title-row">
          <div className="contact2-wrapper">
            <h1>Contact</h1>
          </div>
        </section>

        <section className="contact2-content-wrap">
          <div className="contact2-wrapper">
            <article className="contact2-office-card">
              <h4>Our Office</h4>

              <p>
                Lockhart | Suver LLC
                <br />
                6201 Roosevelt Way NE
                <br />
                Seattle WA 98115
              </p>

              <p>
                Phone: 206 545-7800
                <br />
                Fax: 206 545-4192
              </p>

              <p>
                Email: <a href="mailto:info@lockhartsuver.com">info@lockhartsuver.com</a>
                <br />
                Web: <a href="https://www.lockhartsuver.com">www.lockhartsuver.com</a>
              </p>

              <p>
                <strong className="contact2-highlight">Keep in touch with us</strong>
                <br />
                For Home Service requests, New Project and general inquiries, please call us directly.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="contact2-footer">
        <div className="contact2-wrapper contact2-footer-inner">
          <div>© 2007 — 2026 Lockhart Suver LLC</div>
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
