import React from "react";
import "./_contact.scss";

const Contact = () => {
  return (
    <div>
      <main className="contact">
        <h2>Contact Office</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope" /> Website
            <div className="text-secondary">https://www.tccb.gov.tr/</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt" /> Phone
            <div className="text-secondary">+90 (312) 525 55 55 </div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt" /> Address
            <div className="text-secondary">
              Cumhurbaşkanlığı Külliyesi 06560 Beştepe-Ankara-Türkiye
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
