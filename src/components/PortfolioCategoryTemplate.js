import Link from "next/link";

export default function PortfolioCategoryTemplate({ title, items, previousHref, nextHref, nextLabel = "Next", previousLabel = "Previous" }) {
  return (
    <main className="portfolio-category-main">
      <section className="portfolio-category-title-row">
        <div className="projects2-wrapper">
          <h1 className="font-light text-orange">{title}</h1>
        </div>
      </section>

      <section className="portfolio-category-list">
        {items.map((item) => (
          <article key={item.name} className="portfolio-category-item">
            <div
              className="portfolio-category-image"
              style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.position ?? "center center" }}
            />
            <div className="portfolio-category-item-content projects2-wrapper">
              <div />
              <div className="portfolio-category-copy font-semilight">
                <h2 className={item.darkText ? "dark-text" : ""}>{item.name}</h2>
                <h4>
                  <strong>
                    <Link className="font-semilight hover-orange text-yellow" href={item.href}>view portfolio</Link>
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
          <Link href={previousHref}>{previousLabel}</Link> | <Link href={nextHref}>{nextLabel}</Link>
        </p>
      </section>
    </main>
  );
}
