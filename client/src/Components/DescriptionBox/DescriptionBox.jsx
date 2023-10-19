import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vero voluptatibus laborum hic quis tempore consequatur ipsa eveniet
          repellendus blanditiis fuga modi dolorum cumque, ex nobis impedit nemo
          incidunt iste!
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, non.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
