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
    <li className="flex flex-row gap-2 h-fit pr-4" key={key}>
      <input type="checkbox" name={m} value={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => handleCheckboxChange(m)}
            />
      <p>{m}</p>
    </li>
)

  return <div className="invisible lg:visible fixed px-4 py-2 border-4 border-rose-200 bg-rose-100 shadow-lg rounded-3xl grid-cols-2 w-[300px] text-center">
      <p className="my-2 text-xl">Your Supply Closet</p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-2 gap-1 py-2">
          {materialsList}
      </ul>
  </div>
}