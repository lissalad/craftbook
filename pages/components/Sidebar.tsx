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
      <input
        type="checkbox"
        name={m}
        value={m}
        checked={selectedMaterials.includes(m)}
        onChange={() => handleCheckboxChange(m)}
      />
      <p>{m}</p>
    </li>
  ));

  if (menuOpen) {
    return (
      <div className="bg-rose-200">
        <div className="sticky top-0 p-6">
          <p className="text-lg font-semibold">Supply Closet</p>
          <ul className="flex flex-col pt-2 pb-6">{materialsList}</ul>
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
    );
  } else return <></>;
}
