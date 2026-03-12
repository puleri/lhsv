import "./home-service.module.css";

export const metadata = {
  title: "Home Service | Lockhart Suver",
  description: "Lockhart|Suver Home Service offerings.",
};

export default function HomeServicePage() {
  return (
    <main className="home-service-main">
      <section className="home-service-intro">
        <div className="container home-service-intro-grid">
          <div>
            <h1>
              <span>Lockhart|Suver Home Service</span>
            </h1>
            <h5>Maintaining the beauty and value of your home investment.</h5>
          </div>
          <div>
            <h3>
              <span className="home-service-text-orange">Lockhart|Suver Home Service</span>{" "}
              offers our clients the peace of mind that comes from knowing their home receives the expert care and
              maintenance it needs.
            </h3>
            <h3>
              We&apos;re specialists in providing personalized service for everything from minor repairs and regular
              maintenance to remodels.
            </h3>
          </div>
        </div>
      </section>

      <section className="home-service-hero" aria-label="Home service truck image" />

      <section className="home-service-cta">
        <div className="container">
          <h3>
            <span>More about Lockhart|Suver Home Service</span>{" "}
            <a href="/about-home-service/" className="home-service-button">
              About Home Service
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
