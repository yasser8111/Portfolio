import React from "react";

const CustomBox = ({ color = "black", children, className = "" }) => {
  return (
    <div
      className="max-w-[90%] m-auto relative p-12 border-2 border-dashed"
      style={{ borderColor: color }}
    >
      <div className="absolute -top-2.5 -left-2.5 w-5 h-5" style={{ backgroundColor: color }}></div>
      <div className="absolute -top-2.5 -right-2.5 w-5 h-5" style={{ backgroundColor: color }}></div>
      <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5" style={{ backgroundColor: color }}></div>
      <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5" style={{ backgroundColor: color }}></div>
      
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default CustomBox;