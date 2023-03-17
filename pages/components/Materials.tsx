interface CheckboxComponentProps {
  selectedMaterials: string[];
  allMaterials: string[];
  onChange: (material: string) => void;
}

export default function Materials({selectedMaterials, allMaterials, onChange}: CheckboxComponentProps) {

  const handleCheckboxChange = (material: string) => {
    onChange(material);
  };

  const materialsList = allMaterials.map((m, key) => 
    <li className="flex flex-row gap-2 h-fit" key={key}>
      <input type="checkbox" name={m} value={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => handleCheckboxChange(m)}
            />
      <p>{m}</p>
    </li>
)

  return <div className="invisible lg:visible my-4 px-7 py-2 border-r-4 border-rose-300/60 min-w-fit max-w-[520px] h-full text-left transition-all">
      <p className="my-2 text-lg font-semibold">Supply Closet</p>
      <ul className="flex flex-col py-2">
          {materialsList}
      </ul>
  </div>
}