import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-4 mt-auto">
      <div className="container">

        <div className="row">

          {/* Column 1 — Logo & About */}
          <div className="col-md-4 mb-3">
            <img
              src="/images/logo.png"
              alt="Шекспирыч Logo"
              className="navbar-logo"
            />

            <p className="small mt-2">
              Inspiring minds through the power of English language and literature.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About School</Link></li>
              <li><Link to="/teachers" className="footer-link">Teachers</Link></li>
              <li><Link to="/courses" className="footer-link">Courses</Link></li>
              <li><Link to="/contacts" className="footer-link">Contacts</Link></li>
            </ul>
          </div>

          {/* Column 3 — Contacts */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact Us</h6>
            <p className="small mb-1">📞 +1 (555) 000-1234</p>
            <p className="small mb-1">📧 contact@shakespearean.com</p>
            <p className="small">🌍 Online School</p>
          </div>

        </div>

        {/* Bottom row with © and legal links */}
        <div className="row mt-3 pt-3 border-top text-center text-md-start">

          {/* Left — copyright */}
          <div className="col-md-6 small mb-2">
            © {new Date().getFullYear()} Shakespearean — All rights reserved.
          </div>

          {/* Right — legal links */}
          <div className="col-md-6 small mb-2 text-md-end">
            <a href="#" className="text-light d-block">Согласие на обработку персональных данных</a>
            <a href="#" className="text-light d-block">Политика конфиденциальности</a>
            <a href="#" className="text-light d-block">Договор оферты</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
