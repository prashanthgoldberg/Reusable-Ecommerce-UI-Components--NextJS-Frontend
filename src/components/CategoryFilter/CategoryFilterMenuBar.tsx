"use client";

import React, { useState } from "react";
import { FilterDropDown } from "./FilterDropDown";

// Data for the filter dropdowns
const filterData = [
  {
    title: "brands",
    options: [
      "Klint 1",
      "Klint 2",
      "Klint 3",
      "Klint 4",
      "Klint 5",
    ],
  },
  {
    title: "flavors",
    options: [
      "Klint Artic Mint 1",
      "Klint Artic Mint 2",
      "Klint Artic Mint 3",
      "Klint Artic Mint 4",
      "Klint Artic Mint 5",
    ],
  },
  {
    title: "strength",
    options: ["01 dot", "02 dot", "03 dot", "04 dot", "05 dot"],
  },
];

// The CategoryFilterMenuBar component renders a menu bar with multiple filter dropdowns
export const CategoryFilterMenuBar: React.FC = () => {
  const [selected, setSelected] = useState<string[][]>([[], [], []]);

    // Handle change in selected values for each dropdown
  const handleChange = (idx: number, values: string[]) => {
    setSelected((prev) => prev.map((s, i) => (i === idx ? values : s)));
  };

  return (
    <div
      className="flex justify-center items-center bg-[#E6FAFC] border-0 rounded-[20px] shadow-none px-4 py-6"
      style={{ minWidth: 800, minHeight: 120 }}
    >
    
      <FilterDropDown
        title={filterData[0].title}
        _icon={undefined}
        options={filterData[0].options}
        selected={selected[0]}
        onChange={(values) => handleChange(0, values)}
      />

      <div className="h-[56px] mx-2 border-l border-[#E0E0E0]" style={{ width: 0 }} />
      <FilterDropDown
        title={filterData[1].title}
        _icon={undefined}
        options={filterData[1].options}
        selected={selected[1]}
        onChange={(values) => handleChange(1, values)}
      />

      <div className="h-[56px] mx-2 border-l border-[#E0E0E0]" style={{ width: 0 }} />
      <FilterDropDown
        title={filterData[2].title}
        _icon={undefined}
        options={filterData[2].options}
        selected={selected[2]}
        onChange={(values) => handleChange(2, values)}
      />
    </div>
  );
};
