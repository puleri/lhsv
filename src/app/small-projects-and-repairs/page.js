import "./small-projects-and-repairs.module.css";

export const metadata = {
  title: "Small Projects and Repairs | Lockhart Suver",
  description: "Lockhart|Suver Home Service small projects and repairs.",
};

export default function SmallProjectsAndRepairsPage() {
  return (
    <main className="small-projects-repairs-main">
      <section className="small-projects-repairs-intro">
        <div className="container small-projects-repairs-grid">
          <div>
            <h1>
              <span>Small Projects &amp; Repairs</span>
            </h1>
            <p>
              Whether you are looking to install a new deck or convert an office into a nursery, our craftsmen can
              build virtually anything. Every project, regardless of size, is professionally managed from start to
              finish with the same exacting attention to quality, materials and design on which we have built our
              reputation. And since no one likes surprises, we&apos;re happy to provide you a detailed estimate for your
              project and make sure the only thing we exceed is your expectations.
            </p>
            <p>
              And when something breaks, there often isn&apos;t time to research a qualified professional to fix it. In the
              end, you can end up paying more for sub-par work and no follow-up. We&apos;re known and trusted in the
              community for our quality workmanship as well as our ability to solve almost any problem.
            </p>
          </div>

          <div>
            <h3>
              “I always feel they have the client&apos;s best interests at heart. They raise the bar on quality, but they
              keep the budget under control.”
            </h3>
            <p>
              <em>Chris Spivey, Wallingford</em>
              <br />
              <em>Remodel</em>
            </p>
          </div>
        </div>
      </section>

      <section className="small-projects-repairs-hero" aria-label="Small projects and repairs craftsmanship" />

      <section className="small-projects-repairs-cta">
        <div className="container">
          <h3>
            <span>More about Lockhart|Suver Home Service&apos;s Ongoing Maintenance service</span>{" "}
            <a href="/ongoing-maintenance/" className="home-service-button">
              Ongoing Maintenance
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
