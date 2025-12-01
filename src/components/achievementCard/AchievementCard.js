import React, { useState } from "react";
import "./AchievementCard.scss";
import Lightbox from "../lightbox/Lightbox";

export default function AchievementCard({ cardInfo, isDark }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div
        className="certificate-image-div"
        onClick={() => setIsLightboxOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
          loading="lazy"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
      {isLightboxOpen && (
        <Lightbox image={cardInfo.image} onClose={() => setIsLightboxOpen(false)} />
      )}
    </div>
  );
}
