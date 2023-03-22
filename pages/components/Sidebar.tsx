import { useState } from "react";
import { MenuIcon, OpenIcon } from "./Icons";
import { useAtom } from "jotai";
import { menuOpenAtom } from "../_app";

interface CheckboxComponentProps {
  selectedMaterials: string[];
  allMaterials: string[];
  onChange: (material: string) => void;
  handleClear: () => void;
  selectAll: () => void;
}

export default function Sidebar({
  selectedMaterials,
  allMaterials,
  onChange,
  handleClear,
  selectAll,
}: CheckboxComponentProps) {
  const [menuOpen] = useAtom(menuOpenAtom);
  const handleCheckboxChange = (material: string) => {
    onChange(material);
  };
  const buttonStyles = "text-sm font-light hover:font-normal";

  const materialsList = allMaterials.map((m, key) => (
    <li
      className="flex flex-row gap-2 h-fit capitalize whitespace-nowrap text-sm"
      key={key}
    >
      <label htmlFor={m} className="flex flex-row items-center">
        <input
          type="checkbox"
          id={m}
          name={m}
          value={m}
          checked={selectedMaterials.includes(m)}
          onChange={() => handleCheckboxChange(m)}
        />
        <span className="mx-2">{m}</span>
      </label>
    </li>
  ));

  if (menuOpen) {
    return (
      <div className="w-full sm:w-fit sm:static fixed bg-rose-50 shadow-rose-300 shadow-md min-h-screen text-rose-900">
        <div className="sticky top-0 py-4">
          <p className="text-md font-semibold border-b-2 border-rose-200 pb-4 mb-4 mx-4">
            Supply Closet
          </p>
          <div className="px-6">
            <ul className="flex flex-col pt-2 pb-6 gap-1">{materialsList}</ul>
            <div className="flex flex-col items-start">
              <button className={buttonStyles} onClick={selectAll}>
                select all
              </button>
              <button className={buttonStyles} onClick={handleClear}>
                clear
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
}
