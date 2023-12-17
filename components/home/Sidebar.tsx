import React from "react";
import FilterForm from "./FilterForm";

const Sidebar = () => {
  return (
    <div className="bg-blue-50">
      <h2 className="font-medium text-4xl text-center py-5">Filters</h2>
      <div className="flex items-center gap-3 overflow-auto min-h-0 flex-col gap-4">
        <FilterForm />
      </div>
    </div>
  );
};

export default Sidebar;
