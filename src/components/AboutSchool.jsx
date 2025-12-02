import "./css/AboutSchool.css"
import "./css/goal-section.css"
import "./css/stats-section.css"
import "./css/why-section.css"
import { useEffect } from "react";

export default function AboutSchool() {
  useEffect(() => {
  const numbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || "";

          let count = 0;
          const step = target / 80;

          const counter = setInterval(() => {
            count += step;

            if (count >= target) {
              el.textContent = target.toLocaleString("ru-RU") + suffix;
              clearInterval(counter);
            } else {
              el.textContent = Math.floor(count).toLocaleString("ru-RU");
            }
          }, 20);

          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.55 } // only animate when 55% of the section is visible
  );

  numbers.forEach(num => observer.observe(num));
}, []);


  return (
    <div>
      <section className="aboutus-section py-5">
        <div className="container">
          <div className="row justify-content-center">
      <div 
        className="aboutus-content"
      >
        <h2 className="fw-bold text-primary mb-3">
          Привет! Мы — языковая школа «Шекспирыч»
        </h2>

        <p className="aboutus-text">
          <span>Наша школа была создана с идеей дать каждому возможность открыть для
          себя мир через язык. Мы верим, что обучение — это не только правила и
          грамматика, но и уверенность в реальном общении, расширение горизонтов
          и ощущение принадлежности к глобальному сообществу.  </span>
            
          
        
            <span>В «Шекспирыч» мы сохраняем индивидуальный подход и делаем процесс 
          изучения английского и китайского языков по-настоящему увлекательным 
          и вдохновляющим.</span>
             
          
          
         
        </p>
      </div>
    </div>
        </div>
    
  
</section>


<section className="why-stats-wrapper py-5">
  <div className="container">
    <div className="row align-items-center">

      
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h2 className="fw-bold text-primary mb-3">Наш повод</h2>

        <p className="why-text">
          Мы создали школу, чтобы сделать изучение иностранных языков доступным,
          вдохновляющим и по-настоящему живым. Наши студенты не просто учат правила —
          они открывают новые возможности, расширяют горизонты и становятся
          частью глобального сообщества.
        </p>

        <p className="why-text">
          Наша миссия — показать, что язык может быть мостом: к уверенности,
          карьере, путешествиям и новым знакомствам. Мы верим в индивидуальный подход,
          силу общения и обучение, которое приносит удовольствие.
        </p>

        <p className="why-text">
          Каждый студент для нас — история роста. И наша цель —
          превращать знания в реальные результаты.
        </p>
      </div>

      
      <div className="col-lg-6">
        <section className="stats-section" id="stats">
          <div className="overlay"></div>

          <div className="container position-relative text-center py-5">
            <div className="row">

              <div className="col-6 col-md-6 mb-4">
                <h2 className="stat-number" data-target="90" data-suffix="%">0</h2>
                <p className="stat-label">УРОКОВ ПО ПЕРСОНАЛЬНЫМ ПЛАНАМ</p>
              </div>

              <div className="col-6 col-md-6 mb-4">
                <h2 className="stat-number" data-target="600" data-suffix="+">0</h2>
                <p className="stat-label">УСПЕШНЫХ СТУДЕНТОВ</p>
              </div>

              <div className="col-6 col-md-6 mb-4">
                <h2 className="stat-number" data-target="12" data-suffix="+">0</h2>
                <p className="stat-label">АКТИВНОСТЕЙ В МЕСЯЦ</p>
              </div>

              <div className="col-6 col-md-6 mb-4">
                <h2 className="stat-number" data-target="95" data-suffix="%">0</h2>
                <p className="stat-label">ПОЛОЖИТЕЛЬНЫХ ОТЗЫВОВ</p>
              </div>

            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</section>

<section className="goal-section fade-in-section">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT SIDE */}
      <div className="col-md-7 order-1 order-md-2">
        <h2 className="fw-bold text-primary mb-3">
          Цель нашей онлайн-школы
        </h2>
        <p className="section-text">
          Цель онлайн школы — предоставить каждому удобный доступ к качественному
          обучению иностранным языкам, чтобы студенты могли учиться эффективно
          из любой точки мира, сочетая современные технологии с живым общением
          и реальным прогрессом.
        </p>

        <a href="/teachers" className="btn btn-primary">
          Наши преподаватели
        </a>
      </div>

      {/* RIGHT SIDE — CIRCLE PIC */}
      <div className="col-md-5 text-center mt-4 mt-md-0 order-1 order-md-2">
        <div className="circle-image">
          <img
            src="/images/SchoolPic.jpeg"
            alt="language school"
          />
        </div>
      </div>

    </div>
  </div>
</section>




    </div>
  
  );
}
