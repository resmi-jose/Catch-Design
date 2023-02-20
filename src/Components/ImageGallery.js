import React from "react";
import "../Scss/index.scss";

const listImages = [
  { className: "image-1" },
  { className: "image-2" },
  { className: "image-3" },
  { className: "image-4" },
];

const ImageGallery = () => {
  return (
    <div className="flex-container">
      {listImages.map((image, index) => (
        <div className={`image ${image.className}`} key={index}></div>
      ))}
    </div>
  );
};

export default ImageGallery;
