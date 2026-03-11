export const metadata = {
  title: "Remodels | Lockhart Suver",
  description: "Lockhart|Suver Home Service remodeling services.",
};

export default function RemodelsPage() {
  return (
    <main className="remodels-main">
      <section className="remodels-intro">
        <div className="container remodels-grid">
          <div>
            <h1>
              <span>Home Service Remodels</span>
            </h1>
            <p>
              Are you looking to upgrade your kitchen, create a spacious master suite or add a home office? We have
              the expertise to turn ideas into reality. Our craftsmen draw on years of experience building some of the
              region&apos;s finest homes. From initial inspiration through to completion, we&apos;ll guide you through every
              step of the process with sound advice to help you make well-informed decisions.
            </p>
            <p>We&apos;re good listeners; tell us about your dreams and we&apos;ll build them.</p>
          </div>

          <div>
            <h3>
              “They were excellent at thinking about difficult design challenges and proposing alternatives. They&apos;re
              house experts — and they saved us a lot of money.”
            </h3>
            <p>
              <em>Scott Wyatt, Denny Blaine</em>
              <br />
              <em>Remodel</em>
            </p>
          </div>
        </div>
      </section>

      <section className="remodels-hero" aria-label="Home Service remodels showcase" />

      <section className="remodels-cta">
        <div className="container">
          <h3>
            <span>Contact Lockhart|Suver Home Service</span>{" "}
            <a href="/contact/" className="home-service-button">
              Contact Home Service
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
