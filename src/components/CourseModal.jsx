import { useEffect } from "react";
import "./css/CourseModal.css";

export default function CourseModal({ isOpen, onClose, course }) {
  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const telegramMessage = `Здравствуйте! Я хочу записаться на курс: ${course}`;
  const telegramLink = `https://t.me/alsu_lit?text=${encodeURIComponent(
    telegramMessage
  )}`;

  return (
    <div className="course-overlay" onClick={onClose}>
      <div className="course-box" onClick={(e) => e.stopPropagation()}>
        <button className="course-close" onClick={onClose}>×</button>

        <h2 className="course-title">{course}</h2>

        <p className="course-text">
          Оставьте заявку, и мы свяжемся с вами в ближайшее время.
          <br />
          Или вы можете написать нам сразу в Telegram.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          className="course-btn"
        >
          Написать в Telegram
        </a>
      </div>
    </div>
  );
}
