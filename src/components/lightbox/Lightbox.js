import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.scss";

export default function Lightbox({ image, onClose }) {
    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = e => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return createPortal(
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                ×
            </button>
            <img
                src={image}
                alt="Enlarged view"
                className="lightbox-image"
                onClick={e => e.stopPropagation()}
            />
        </div>,
        document.body
    );
}
