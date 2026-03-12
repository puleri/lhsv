import Link from "next/link";
import Image from "next/image";

const FALLBACK_IMAGE_WIDTH = 1600;
const FALLBACK_IMAGE_HEIGHT = 1067;

function getImageDimensions(image) {
  return {
    width: image?.width ?? FALLBACK_IMAGE_WIDTH,
    height: image?.height ?? FALLBACK_IMAGE_HEIGHT,
  };
}

function DetailGroup({ label, lines, links }) {
  return (
    <div className="project-detail-group">
      <p className="project-detail-label">{label}</p>
      {lines?.map((line) => (
        <p key={line} className="project-detail-text text-white">
          {line}
        </p>
      ))}
      {links?.map((link) => (
        <p key={link.href} className="project-detail-text">
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </p>
      ))}
    </div>
  );
}

export default function PortfolioProjectTemplate({ project }) {
  const heroDimensions = getImageDimensions(project);

  return (
    <main className="portfolio-project-main">
      <section className="portfolio-project-title-row projects2-wrapper">
        <div>
          <h4 className="text-white">{project.category}</h4>
          <h1 className="text-orange font-light">{project.title}</h1>
          <h2 className="text-lightgrey">{project.location}</h2>
        </div>
      </section>

      <section className="portfolio-project-content projects2-wrapper">
        <Image
          src={project.heroImage}
          alt={project.heroAlt ?? project.title}
          className="portfolio-project-image"
          width={heroDimensions.width}
          height={heroDimensions.height}
          sizes="(max-width: 900px) 100vw, 1200px"
          priority
        />

        <div className="portfolio-project-two-col">
          <div>
            <h3>{project.title}</h3>
            <p className="project-detail-label text-lightgrey">Description:</p>
            {project.description.map((paragraph) => (
              <p key={paragraph} className="text-white project-detail-text">
                {paragraph}
              </p>
            ))}
            <p className="project-detail-label text-lightgrey">Location:</p>
            <p className="project-detail-text text-white">{project.location}</p>
          </div>

          <div>
            <p className="portfolio-project-nav-top">
              <Link href={project.previousHref}>Previous</Link> | <Link href={project.nextHref}>Next</Link>
            </p>
            {project.details.map((detail) => (
              <DetailGroup key={detail.label} {...detail} />
            ))}
          </div>
        </div>

        <div className="portfolio-project-gallery">
          {project.galleryImages.map((image) => {
            const dimensions = getImageDimensions(image);

            return (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt ?? project.title}
                className="portfolio-project-image"
                width={dimensions.width}
                height={dimensions.height}
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            );
          })}
        </div>

        <section className="projects2-bottom-row">
          <h3>
            <Link href="/contact/">Please contact us for more information about building your next project.</Link>
          </h3>
          <p>
            <Link href={project.previousHref}>Previous</Link> | <Link href={project.nextHref}>Next</Link>
          </p>
        </section>
      </section>
    </main>
  );
}
