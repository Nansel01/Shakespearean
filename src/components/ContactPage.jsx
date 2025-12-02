import "./css/ContactPage.css";
import FAQ from "./FAQ";
export default function ContactPage() {
  return (
    <div>
      <section className="contact-section py-5">
      <div className="container py-4">
        <div className="row g-0 shadow-lg rounded-4 overflow-hidden">
          
          {/* Left Contact Info */}
          <div className="col-lg-5 p-4 text-white contact-info">
            <h3 className="fw-bold mb-3">Let’s get in touch</h3>
            <p className="mb-4">
              We’re open for any questions or to help you book a free trial lesson!
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt-fill me-3 fs-4"></i>
                <span>Saint Petersburg, Russia</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-3 fs-4"></i>
                <a href="tel:+79991112233" className="text-white text-decoration-none">
                  +7 999 111-22-33
                </a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-3 fs-4"></i>
                <a href="mailto:info@school.com" className="text-white text-decoration-none">
                  info@school.com
                </a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-telegram me-3 fs-4"></i>
                <a href="https://t.me/YOURCHANNEL" className="text-white text-decoration-none">
                  Telegram Channel
                </a>
              </li>
            </ul>

            <p className="opacity-75 mt-3 small">
              Working hours: Mon–Sat | 9:00 – 20:00
            </p>
          </div>

          {/* Right Form */}
          <div className="col-lg-7 bg-white p-4">
            <h3 className="fw-bold mb-4">Get in Touch</h3>

            <form>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label small">Full Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col">
                  <label className="form-label small">Phone (WhatsApp)</label>
                  <input type="tel" className="form-control" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small">Child's age / Level</label>
                <select className="form-select">
                  <option>Choose an option</option>
                  <option>3–6 years</option>
                  <option>7–12 years</option>
                  <option>Teen / Exam prep</option>
                  <option>Adult beginner</option>
                  <option>Adult advanced</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label small">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg px-4 rounded-pill">
                Book Free Trial Lesson
              </button>

              <p className="mt-3 small text-muted">
                We reply within 5–10 minutes during working hours 😊
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>

    <FAQ />
    </div>
   
  );
}
