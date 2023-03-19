interface CheckboxComponentProps {
  selectedMaterials: string[];
  allMaterials: string[];
  onChange: (material: string) => void;
  handleClear: () => void;
  selectAll: () => void;
}

export default function Materials({
  selectedMaterials,
  allMaterials,
  onChange,
  handleClear,
  selectAll,
}: CheckboxComponentProps) {
  const handleCheckboxChange = (material: string) => {
    onChange(material);
  };

  const buttonStyles = "text-sm font-light hover:font-normal";

  const materialsList = allMaterials.map((m, key) => (
    <li className="flex flex-row gap-2 h-fit" key={key}>
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

  return (
    <div className="sm:w-0 my-4 px-7 py-2 border-rose-300/60 min-w-fit max-w-[520px] h-full text-left transition-all flex flex-col items-start font-">
      <p className="mt-2 text-lg font-semibold ">Supply Closet</p>
      <ul className="flex flex-col pt-2 pb-6">{materialsList}</ul>
      <button className={buttonStyles} onClick={selectAll}>
        select all
      </button>
      <button className={buttonStyles} onClick={handleClear}>
        clear
      </button>
    </div>
  );
}
