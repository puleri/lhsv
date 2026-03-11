export const metadata = {
  title: "About Home Service | Lockhart Suver",
  description: "Learn more about Lockhart|Suver Home Service.",
};

export default function AboutHomeServicePage() {
  return (
    <main className="about-home-service-main">
      <section className="about-home-service-intro">
        <div className="container about-home-service-grid">
          <div>
            <h1>
              <span>About Us</span>
            </h1>
            <p>
              Burt Lockhart and Mike Suver have been building homes together in the Seattle area for more than 25
              years. Fine craftsmanship and a client-centered approach have always been the hallmark of their success.
              The Lockhart|Suver Home Service team was born of a recognition that, no matter how well you build a
              home, it is ultimately the care and maintenance that you put into it that keeps it looking great and
              performing flawlessly for generations to come.
            </p>
            <p>
              We assembled a team of friendly and professional craftsmen who are dedicated to maintaining the homes we
              build. Are you looking for someone to install a new porch or decorative crown molding? Solve a problem
              with your home audio system or lighting controls? Handle unexpected repairs? We can help you with any
              task on your list.
            </p>
            <p>
              Dreaming of a new home or large-scale remodel? We&apos;d love to talk with you about how we could turn your
              dream into a reality. Check out our main site for more information – and inspiration.
            </p>
          </div>
          <div>
            <h3>
              “They&apos;re very generous with their time. I can call and bounce ideas around, call for referrals, call
              and ask about even the smallest job. It&apos;s like having a security blanket.”
            </h3>
            <p>
              <em>Joe Terteling, Capitol Hill</em>
              <br />
              <em>Multiple Remodels</em>
            </p>
          </div>
        </div>
      </section>

      <section className="about-home-service-hero" aria-label="Lockhart Suver home service" />

      <section className="about-home-service-cta">
        <div className="container">
          <h3>
            <span>More about Lockhart|Suver Home Service&apos;s Commitment</span>{" "}
            <a href="/our-commitment/" className="home-service-button">
              Our Commitment
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
