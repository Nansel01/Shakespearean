import { useState } from "react";
import faqData from "./js/FaqData";

export default function FAQ() {
  const categories = Object.keys(faqData); // english, chinese, native
  const [activeCategory, setActiveCategory] = useState("english");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = faqData[activeCategory].filter(
    item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="bg-light py-5">
      <div className="container">
        <div className="row mb-4">
              <div className="col-12 col-md-6">
                <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
                  <i className="bi bi-globe-americas me-1"></i>Часто задаваемые вопросы
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
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск вопросов..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "english" ? "Английский" : cat === "chinese" ? "Китайский" : "Носитель языка"}
            </button>
          ))}
        </div>

        <div className="accordion" id="faqAccordion">
          {filteredQuestions.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.q}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
