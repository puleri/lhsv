export const metadata = {
  title: "Commercial | Lockhart Suver",
  description: "Commercial page for Lockhart Suver.",
};

export default function CommercialPage() {
  return (
    <main className="commercial-main">
      <section className="commercial-hero text-light">
        <div className="commercial-wrapper">
          <div className="commercial-hero-grid">
            <div />
            <div className="commercial-hero-copy">
              <h1>
                Commercial — <span>Under Construction</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-bottom-row">
        <div className="commercial-wrapper commercial-bottom-grid">
          <h3>
            <a href="/remodels/contact-2/">
              Please contact us for more information about building your next project.
            </a>
          </h3>

          <h6>
            <span>
              <a href="/portfolio/small-projects/">Previous</a> | <a href="/about-us/">Next</a>
            </span>
          </h6>
        </div>
      </section>
    </main>
  );
}
