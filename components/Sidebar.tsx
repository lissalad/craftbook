import { useState } from "react";
import { MenuIcon, OpenIcon } from "./Icons";
import { useAtom, atom } from "jotai";
import { menuOpenAtom } from "../pages/_app";

export const filterAtom = atom<string>("Fully Supplied");

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
  const optionStyles = "text-sm whitespace-nowrap ml-2";

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

  const [filter, setFilter] = useAtom(filterAtom);

  if (menuOpen) {
    return (
      <div className="w-full sm:w-fit sm:static fixed bg-rose-50 shadow-rose-300 shadow-md min-h-screen text-rose-900 z-50 -mt-[57px]">
        <div className="sticky top-0 py-4 overflow-clip">
          {/*                                          */}
          {/* title */}
          <p className="text-md font-semibold border-b-2 border-rose-200 pb-2 mb-2 mx-4">
            Supply Closet
          </p>

          {/* materials list */}
          <div className="px-6">
            <ul className="flex flex-col pt-2 gap-1 border-b-2 border-rose-200 pb-4">
              {materialsList}
            </ul>

            {/* options */}
            <div className="flex flex-col items-start">
              {/* dropdown options */}
              <div className="flex flex-col my-4 border-b-2 border-rose-200 pb-4 gap-1">
                <label htmlFor="any" className="flex flex-row items-center">
                  <input
                    type="radio"
                    id="any"
                    name="filter-options"
                    value="Includes Any"
                    onChange={() => setFilter("Includes Any")}
                  />
                  <span className={optionStyles}>
                    Includes any selected materials
                  </span>
                </label>
                <label htmlFor="all" className="flex flex-row items-center">
                  <input
                    type="radio"
                    id="all"
                    name="filter-options"
                    value="Includes All"
                    onChange={() => setFilter("Includes All")}
                  />
                  <span className={optionStyles}>
                    Includes all selected materials
                  </span>
                </label>
                <label htmlFor="fully" className="flex flex-row items-center">
                  <input
                    type="radio"
                    id="fully"
                    name="filter-options"
                    value="Fully Supplied"
                    onChange={() => setFilter("Fully Supplied")}
                  />
                  <span className={optionStyles}>
                    All required materials are selected
                  </span>
                </label>
              </div>

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
      </div>
    );
  } else return null;
}
