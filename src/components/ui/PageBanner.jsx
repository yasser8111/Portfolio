import React from "react";
import { TextBlock } from "./TextBlockEffect";

const PageBanner = ({ title, subtitle, titleColor = "#2563eb", subtitleColor = "#94a3b8" }) => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-slate-200 bg-slate-50/30">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-slate-900 mb-8">
          <TextBlock blockColor={titleColor} className="block">
            {title}
          </TextBlock>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
          <TextBlock blockColor={subtitleColor} className="block">
            {subtitle}
          </TextBlock>
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
