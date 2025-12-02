import "./css/HomePage.css";
import FAQ from "./FAQ";
export default function HomePage() {
  return (
    <div className="page-container">

      {/* Hero Section */}
      <section className="hero bg-light rounded-4 p-4 mt-0">
        <div className="row align-items-center justify-content-center g-5 py-5 px-3 px-md-5">

          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-start text-brand">
              Boost Your English Skills With Fun Learning
            </h1>

            <p className="lead text-start">
              Study English in a friendly environment with modern methods and a native approach.
              <br />
              <span className="text-brand fw-semibold">
                Learn confidently — speak confidently.
              </span>
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-start align-items-center">
              <button
                type="button"
                className="btn btn-primary px-4 me-md-2"
                onClick={() => window.location.href = "#contacts"}
              >
                Join Us Today
              </button>

              <h6 className="text-muted mb-0">
                Contact us for a free consultation 📩
              </h6>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <img
              src="/images/7454886.jpg"
              className="hero-img d-block mx-auto img-fluid rounded-4"
              alt="English class"
            />
          </div>

        </div>
      </section>


      

      {/* About School Section */}
      <section className="about-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            
            
            {/* Left: Text Content */}
            <div className="col-lg-6 order-lg-1 order-2">
              <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
                <i className="bi bi-globe-americas me-1"></i> About Us
              </span>
              <h2 className="fw-bold mb-3">
                Empowering Students with Real Communication Skills
              </h2>
              <p className="text-muted mb-4">
                We are a modern English & Chinese language school offering lessons 
                for children and adults of all levels. Our certified native-speaking 
                teachers help students grow confident, improve fluency and enjoy 
                learning through real-life communication.
              </p>

              <div className="row gy-2">
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Native English Teachers</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Professional Chinese Tutors</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>All Ages & Levels</span>
                </div>
                <div className="col-6 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Online & Offline Classes</span>
                </div>
              </div>

              <a href="/about" className="btn btn-dark btn-lg mt-4 rounded-pill px-4">
                Learn More
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>

            {/* Right: Image / Illustration */}
            <div className="col-lg-6 order-lg-2 order-1">
              <img 
                src="/images/kids.jpeg" 
                alt="Our Language School" 
                className="img-fluid w-100 rounded-4 "
              />
              

              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-5 mb-3" id="services">
        <div className="container">
          <div className="services-container">

            <div className="row mb-4">
              <div className="col-12 col-md-6">
                <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
                  <i className="bi bi-globe-americas me-1"></i>Наши преимущества
                </span>
              </div>
              <div className="col-12 col-md-6">
                <h4 className="text-start fs-5 text-brand">
                  Learning English opens doors to new opportunities.
                  <br />
                  We help every student reach success!
                </h4>
              </div>
            </div>

            <div className="row g-4">
              
              {/* Card 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="card service-card shadow-sm h-100 border border-primary p-4">
                  <div className="icon-circle gradient-custom mb-4">
                    <i
                      className="bi bi-chat-dots-fill"
                      style={{ fontSize: "3rem", color: "cornflowerblue" }}
                    ></i>
                  </div>
                  <h4 className="mb-3">Speaking Practice</h4>
                  <p className="text-muted mb-0">Improve confidence and fluency in real conversations.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="card service-card shadow-sm h-100 border border-primary p-4">
                  <div className="icon-circle gradient-custom mb-4">
                    <i
                      className="bi bi-book-half"
                      style={{ fontSize: "3rem", color: "cornflowerblue" }}
                    ></i>
                  </div>
                  <h4 className="mb-3">Grammar & Vocabulary</h4>
                  <p className="text-muted mb-0">Clear explanations and useful phrases for everyday English.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-3 col-md-6">
                <div className="card service-card shadow-sm h-100 border border-primary p-4">
                  <div className="icon-circle gradient-custom mb-4">
                    <i
                      className="bi bi-laptop"
                      style={{ fontSize: "3rem", color: "cornflowerblue" }}
                    ></i>
                  </div>
                  <h4 className="mb-3">Online Lessons</h4>
                  <p className="text-muted mb-0">Flexible learning format from anywhere in the world.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-3 col-md-6">
                <div className="card service-card shadow-sm h-100 border border-primary p-4">
                  <div className="icon-circle gradient-custom mb-4">
                    <i
                      className="bi bi-stars"
                      style={{ fontSize: "3rem", color: "cornflowerblue" }}
                    ></i>
                  </div>
                  <h4 className="mb-3">Fun & Friendly</h4>
                  <p className="text-muted mb-0">Learn with enjoyment and motivation every lesson!</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIAL CAROUSEL SECTION ⭐ */}
      <section className="py-5 bg-light text-primary">
  <div className="container">
    <div className="row mb-4">
              <div className="col-12 col-md-6">
                <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
                  <i className="bi bi-globe-americas me-1"></i>отзывы
                </span>
              </div>
              <div className="col-12 col-md-6">
                <h4 className="text-start fs-5 text-brand">
                  Learning English opens doors to new opportunities.
                  <br />
                  We help every student reach success!
                </h4>
              </div>
            </div>
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

      

      <div className="carousel-inner text-center mb-3">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            className="rounded-circle mb-3 mx-auto d-block"
            alt="Student"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-primary me-1"></i>
            ))}
          </div>
          <blockquote className="blockquote">
            <p className="mb-1">
              “My English improved so fast! Lessons are fun and clear!”
            </p>
            <footer className="blockquote-footer text-white">Anna</footer>
          </blockquote>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
            className="rounded-circle mb-3 mx-auto d-block"
            alt="Student"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-primary me-1"></i>
            ))}
          </div>
          <blockquote className="blockquote">
            <p className="mb-1">
              “Great teachers and friendly atmosphere!”
            </p>
            <footer className="blockquote-footer text-white">Dmitry</footer>
          </blockquote>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
            className="rounded-circle mb-3 mx-auto d-block"
            alt="Student"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-primary me-1"></i>
            ))}
          </div>
          <blockquote className="blockquote">
            <p className="mb-1">
              “The best language school for speaking confidence!”
            </p>
            <footer className="blockquote-footer text-white">Maria</footer>
          </blockquote>
        </div>
      </div>
      

      {/* Indicators */}
      <div className="carousel-indicators mb-4">
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="0"
          className="active rounded-circle"
          style={{ width: "12px", height: "12px", backgroundColor: "#0d6efd" }}
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="1"
          className="rounded-circle"
          style={{ width: "12px", height: "12px", backgroundColor: "#0d6efd" }}
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="2"
          className="rounded-circle"
          style={{ width: "12px", height: "12px", backgroundColor: "#0d6efd" }}
        ></button>
      </div>

      {/* Prev Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#0d6efd",
          borderRadius: "50%",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#0d6efd",
          borderRadius: "50%",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
      </section>

      <FAQ />


    </div>
  );
}
