import "./our-commitment.module.css";

export const metadata = {
  title: "Our Commitment | Lockhart Suver",
  description: "Learn about the Lockhart|Suver Home Service commitment.",
};

export default function OurCommitmentPage() {
  return (
    <main className="our-commitment-main">
      <section className="our-commitment-intro">
        <div className="container our-commitment-grid">
          <div>
            <h1>
              <span>Our Commitment</span>
            </h1>
            <ol>
              <li>
                We will strive to respond to all emails and phone calls within 24 hours. We will keep all
                appointments and promptly communicate with you should there be a need to reschedule.
              </li>
              <li>
                We will collaborate with you to devise a plan that fits with both your home and your budget. We will
                follow-up after the project is completed to ensure that your expectations have been met or exceeded.
              </li>
              <li>
                We will consistently demonstrate our commitment to professionalism, quality craftsmanship and attention
                to detail on every project and in every interaction.
              </li>
            </ol>
          </div>

          <div>
            <h3>
              “They don&apos;t over-promise - [they] never make promises they can&apos;t keep.”
            </h3>
            <p>
              <em>Margi Allison, Interior Designer</em>
              <br />
              <em>Margaret Allison Design</em>
            </p>
          </div>
        </div>
      </section>

      <section className="our-commitment-hero" aria-label="Lockhart Suver home service craftsmanship" />

      <section className="our-commitment-cta">
        <div className="container">
          <h3>
            <span>Lockhart|Suver Home Service Small Projects and Repairs</span>{" "}
            <a href="/small-projects-and-repairs/" className="home-service-button">
              Small Projects and Repairs
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
