export default function CertificateLightbox({ image, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img
        src={image}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-close" onClick={onClose}>✖</button>
    </div>
  );
}
