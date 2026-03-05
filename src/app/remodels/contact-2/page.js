export const metadata = {
  title: "Contact_Lockhart|Suver_2022 | Lockhart Suver",
  description: "Contact information for Lockhart Suver LLC.",
};

export default function ContactRemodelPage() {
  return (
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
  );
}
