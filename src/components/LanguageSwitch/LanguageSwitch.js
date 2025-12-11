import React, { useState, useEffect } from "react";
import emoji from "react-easy-emoji";
import { lang, setLanguage } from "../../language";
import "./LanguageSwitch.scss"; // reuse the same CSS

const LanguageSwitch = () => {
  const [isFrench, setIsFrench] = useState(lang === "fr");

  useEffect(() => {
    setIsFrench(lang === "fr");
  }, []);

  const handleToggle = () => {
    const newLang = isFrench ? "en" : "fr";
    setLanguage(newLang); // updates localStorage and reloads page
    setIsFrench(!isFrench);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={!isFrench}
        onChange={handleToggle}
      />
      <span className="slider round">
        <span className="emoji">{isFrench ? emoji("🇫🇷") : emoji("🇬🇧")}</span>
      </span>
    </label>
  );
};

export default LanguageSwitch;
