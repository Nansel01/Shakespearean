import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConsultationModal = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Пожалуйста, введите имя.");
      return;
    }
    if (!phone.trim() && !telegram.trim()) {
      setError("Пожалуйста, укажите номер телефона или Telegram.");
      return;
    }
    if (!consent) {
      setError("Вы должны согласиться с условиями.");
      return;
    }

    setError("");
    console.log({ name, phone, telegram, consent });
    handleClose();
    alert("Заявка отправлена!");
  };

  if (!show) return null;

  return (
    <div 
      className="modal d-block" 
      tabIndex="-1" 
      role="dialog" 
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title">Запись на консультацию</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <label className="form-label">Имя <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Номер телефона</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Опционально"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Telegram (имя или номер)</label>
                <input
                  type="text"
                  className="form-control"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="Опционально"
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="consentCheck"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="consentCheck">
                  Я согласен с&nbsp;
                  <a href="#" className="text-decoration-underline">Согласие на обработку персональных данных</a>,&nbsp;
                  <a href="#" className="text-decoration-underline">Политика конфиденциальности</a> и&nbsp;
                  <a href="#" className="text-decoration-underline">Договор оферты</a>
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Закрыть
              </button>
              <button type="submit" className="btn btn-primary">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
