import { useState } from "react";
import CertificateLightbox from "./CertificateLightbox";

export default function TeacherModal({ teacher, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>{teacher.name}</h2>
        <p className="text-muted">{teacher.position}</p>

        <p className="mt-3">{teacher.experience}</p>

        <h4 className="mt-4">Сертификаты</h4>

        <div className="cert-grid mt-3">
          {teacher.certificates.map((src, index) => (
            <img
              key={index}
              src={src}
              className="cert-thumbnail"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <CertificateLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
