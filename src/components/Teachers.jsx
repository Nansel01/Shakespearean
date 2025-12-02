import "./css/ceo-section.css";
import { useState } from "react";
import TeachersSection from "./TeachersSection";

export default function Teachers() {
  const [activeImage, setActiveImage] = useState(null);

  const certificates = [
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.02.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.12.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.20.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.29.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.45.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.35.55.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.36.05.png",
    "/images/Certificates/Alsu/Screenshot 2025-11-25 at 14.36.44.png",
  ];


  return (
    <div>

      {/* CEO SECTION */}
      <section className="ceo-section py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* CEO IMAGE */}
            <div className="col-md-4 text-center mb-4">
              <img
                src="/images/SchoolPic.jpeg"
                alt="CEO"
                className="img-fluid ceo-photo"
              />
              <h4 className="mt-3">Alsu Litvinova</h4>
              <p className="text-muted">Founder & CEO</p>
            </div>

            {/* TEXT BLOCK */}
            <div className="col-md-8">
              <h2 className="fw-bold mb-3">Почему я создала школу</h2>

              <p className="ceo-text">
                Я создала школу, чтобы каждый смог открыть для себя мир через
                язык — не просто выучить правила, а почувствовать уверенность
                в настоящем общении, расширить горизонты и стать частью
                глобального сообщества, сохраняя индивидуальность и получая
                реальное удовольствие от процесса обучения.
              </p>

              <p className="ceo-text">
                Онлайн-школа была основана в 2020 году с целью предоставить
                удобный доступ к качественному обучению иностранным языкам,
                чтобы студенты могли эффективно учиться из любой точки мира,
                сочетая современные технологии с живым общением и реальным
                прогрессом.
              </p>
            </div>
          </div>

          {/* CERTIFICATE SLIDER */}
          <div className="row mt-5">
            <h3 className="fw-bold mb-4 text-center">Сертификаты</h3>

            {certificates.map((img, index) => (
              <div className="col-4 col-md-2 mb-3 text-center" key={index}>
                <img
                  src={img}
                  alt="Certificate"
                  className="img-fluid cert-thumb"
                  onClick={() => setActiveImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* FULLSCREEN MODAL */}
        {activeImage && (
          <div className="cert-modal" onClick={() => setActiveImage(null)}>
            <button className="close-btn">&times;</button>
            <img src={activeImage} className="modal-image" alt="Certificate" />
          </div>
        )}
      </section>

       

      <TeachersSection />
    </div>
  );
}
