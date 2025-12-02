import { useState } from "react";
import TeacherModal from "./TeacherModal";
import "./css/teacher-section.css"

export default function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    {
      id: 1,
      name: "Rimven Nansel Peter",
      position: "Native Speaker",
      photo: "/images/SchoolPic.jpeg",
      experience:
        "Я создала школу, чтобы каждый смог открыть для себя мир через язык. Преподаю с 2020 года, работаю со взрослыми и детьми.",
      certificates: [
        "/images/SchoolPic.jpeg",
        "/images/SchoolPic.jpeg",
      ],
    },
    {
      id: 2,
      name: "Teacher 2",
      position: "English Teacher",
      photo: "/images/SchoolPic.jpeg",
      experience:
        "Опыт работы 5+ лет. Специализация — разговорная практика и подготовка к экзаменам.",
      certificates: [
        "/images/SchoolPic.jpeg",
        "/images/SchoolPic.jpeg",
      ],
    },
    {
      id: 3,
      name: "Teacher 3",
      position: "English Teacher",
      photo: "/images/SchoolPic.jpeg",
      experience:
        "Опыт работы 4 года. Использую современные методики и игровые техники.",
      certificates: [
        "/images/SchoolPic.jpeg",
      ],
    },
  ];

  return (
    <section className="teachers-section container py-5">
      <h2 className="text-center mb-4">Наши преподаватели</h2>

      <div className="row">
        {teachers.map((t) => (
          <div className="col-md-4 mb-4" key={t.id}>
            <div className="teacher-card p-3 shadow">
              <img src={t.photo} className="teacher-photo mb-3" alt={t.name} />
              <h4>{t.name}</h4>
              <p className="text-muted">{t.position}</p>

              <button
                className="btn btn-primary mt-2"
                onClick={() => setSelectedTeacher(t)}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTeacher && (
        <TeacherModal
          teacher={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}
    </section>
  );
}
