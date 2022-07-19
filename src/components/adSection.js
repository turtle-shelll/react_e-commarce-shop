import React from "react";
import ad_1 from "../styleSheet/images/earPodt-ad.png";
import ad_2 from "../styleSheet/images/phone-ad.png";
import ad_3 from "../styleSheet/images/phone-ad-1.png";
import ad_4 from "../styleSheet/images/phone-ad-2.png";
import "../styleSheet/adSection.css";
function AdSection() {
  return (
    <div className="ad_container">
      <div className="ad_image_div">
        <img src={ad_1} alt="ad_1" />
      </div>
      <div className="ad_image_div">
        <img src={ad_2} alt="ad_2" />
      </div>
      <div className="ad_image_div">
        <img src={ad_3} alt="ad_3" />
      </div>
      <div className="ad_image_div">
        <img src={ad_4} alt="ad_4" />
      </div>
    </div>
  );
}

export default AdSection;
