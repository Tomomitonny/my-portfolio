import React from "react";

const ItemRotate = ({ src, className, style }) => {
  return (
    <div className={`flex ${className}`} style={style}>
      <div className="w-fit h-fit object-scale-down bg-no-repeat transform animate-rotate">
        <img
          src={src}
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default ItemRotate;
