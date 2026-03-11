export const metadata = {
  title: "Ongoing Maintenance | Lockhart Suver",
  description: "Lockhart|Suver Home Service ongoing maintenance.",
};

export default function SmallProjectsAndRepairsPage() {
  return (
    <main className="small-projects-repairs-main">
      <section className="small-projects-repairs-intro">
        <div className="container small-projects-repairs-grid">
          <div>
            <h1>
              <span>Ongoing Maintenance</span>
            </h1>
            <p>
              One of the biggest challenges of owning a home is keeping up with all the maintenance work required to
              preserve its value and keep it running efficiently. And it&apos;s almost always more costly to fix — or
              replace — something after it breaks than it is to properly maintain it along the way. We provide free
              in-home assessments to identify ongoing maintenance issues and small repairs before they become expensive
              problems.
            </p>
            <p>
              We&apos;ll work with you to design a customized plan for regular maintenance that fits with both your needs
              and your budget. And there&apos;s no need to try and keep track of it all — we&apos;ll remind you when service is
              due and schedule it for a time that is convenient for you.
            </p>
          </div>

          <div>
            <h3>
              “They built our house years ago, but to this day I can call with any maintenance issue, and someone will
              be here in short order, or they&apos;ll tell me who to call.”
            </h3>
            <p>
              <em>Jan Roddy, Bellevue</em>
              <br />
              <em>New Construction</em>
            </p>
          </div>
        </div>
      </section>

      <section className="small-projects-repairs-hero" aria-label="Ongoing maintenance service" />

      <section className="small-projects-repairs-cta">
        <div className="container">
          <h3>
            <span>Lockhart|Suver Home Service Remodels</span>{" "}
            <a href="/remodels/" className="home-service-button">
              Remodels
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
