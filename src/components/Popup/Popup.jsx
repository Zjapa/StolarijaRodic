"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Popup.scss";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const isPopupShown = sessionStorage.getItem("isPopupShown");

  useEffect(() => {
    if (isPopupShown != "shown") {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("isPopupShown", "shown");
      }, 1000);
    }
  }, [isPopupShown]);
  ``;
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup-overlay ${showPopup ? "active" : ""}`}>
      <div className="popup-container">
        <Image
          src="/images/akcija.webp"
          alt="popup-image"
          width={300}
          height={300}
          className="popup-img"
        />
        <div className="popup-content">
          <p className="popup-close" onClick={closePopup}>
            X
          </p>
          <h2 className="popup-title">AKCIJA</h2>
          <p className="popup-subtitle">
            UZ KUPOVINU KROVNIH PROZORA SA BDX SETOM GRATIS MHL MREŽICA
          </p>
          <p className='popup-tel'>011 26 706 74 | 066/208-390 | 066/208-391</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
