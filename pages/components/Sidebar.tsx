import { useState } from "react";
import { MenuIcon, OpenIcon } from "./Icons";

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
  const handleCheckboxChange = (material: string) => {
    onChange(material);
  };
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const buttonStyles = "text-sm font-light hover:font-normal";

  const materialsList = allMaterials.map((m, key) => (
    <li
      className="flex flex-row gap-2 h-fit capitalize whitespace-nowrap"
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

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  function ShowMaterials() {
    if (menuOpen) {
      return (
        <div className="py-2">
          <p className="text-lg font-semibold">Supply Closet</p>
          <ul className="flex flex-col pt-2 pb-6">{materialsList}</ul>
          <button className={buttonStyles} onClick={selectAll}>
            select all
          </button>
          <button className={buttonStyles} onClick={handleClear}>
            clear
          </button>
        </div>
      );
    } else return <></>;
  }

  return (
    <div className="bg-rose-50 sticky top-0 h-full text-left items-start w-fit z-20 transition-all p-6">
      <button className="" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      <ShowMaterials />
    </div>
  );
}
