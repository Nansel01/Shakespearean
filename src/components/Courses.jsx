import { useState } from "react";
import CourseModal from "./CourseModal";
import "./css/service-card-section.css";

export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openCourseModal = (courseName) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const closeCourseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Классы</h2>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Уроки английского языка</h4>
                <p className="text-muted mb-3">
                  Современные методики, индивидуальный подход и быстрый прогресс.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Уроки английского языка")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Уроки английского с носителем</h4>
                <p className="text-muted mb-3">
                  Разговорная практика, произношение и погружение в язык.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Уроки английского с носителем")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Уроки китайского языка</h4>
                <p className="text-muted mb-3">
                  Пошаговое обучение, разговорная практика и культура.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Уроки китайского языка")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING CLUB SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Speaking Club</h2>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Английский Speaking Club</h4>
                <p className="text-muted mb-3">
                  Практика общения, живые темы и развитие уверенности.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Английский Speaking Club")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Speaking Club с носителем</h4>
                <p className="text-muted mb-3">
                  Живые обсуждения, расширение словарного запаса, опыт реального общения.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Speaking Club с носителем")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="fw-bold mb-2">Китайский Speaking Club</h4>
                <p className="text-muted mb-3">
                  Практика устной речи, лексика и культура общения.
                </p>
                <p className="price-tag">Цена: по запросу</p>
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() =>
                    openCourseModal("Китайский Speaking Club")
                  }
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL COMPONENT */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={closeCourseModal}
        course={selectedCourse}
      />
    </div>
  );
}
