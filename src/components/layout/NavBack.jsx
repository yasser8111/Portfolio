import React from "react";
import MaterialIcon from "../ui/MaterialIcon";
import Button from "../ui/Button";

const NavBack = ({ onBack, backText, lang }) => {
  return (
    <nav className="sticky top-0 z-[60] bg-white py-2 md:py-4 border-b border-slate-200 px-4 md:px-12 w-full">
      <div className="flex justify-between items-center">
        <Button
          onClick={onBack}
          variant="secondary"
          icon={({ size, className }) => (
            <MaterialIcon 
              icon="arrow_back" 
              size={size} 
              className={`rtl:rotate-180 ${className}`} 
            />
          )}
          iconPosition="start"
          className="uppercase"
        >
          {backText}
        </Button>
      </div>
    </nav>
  );
};

export default NavBack;
