import React from "react";
import { ArrowLeft } from "lucide-react";
import Button from "./Button";

const NavBack = ({ onBack, backText, lang }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4 md:py-5 border-b border-slate-200 px-6 md:px-12 w-full">
      <div className="flex justify-between items-center">
        <Button
          onClick={onBack}
          variant="secondary"
          icon={({ className }) => (
            <ArrowLeft size={18} className={`rtl:rotate-180 ${className}`} />
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
