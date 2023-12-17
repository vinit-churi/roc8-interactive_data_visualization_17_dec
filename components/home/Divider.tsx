import React from "react";

const Divider = ({ className }: { className: string }) => {
  return (
    <div
      className={`h-0 border-slate-300 border  rounded-xl ${className}`}
    ></div>
  );
};

export default Divider;
