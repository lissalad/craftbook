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
    <li className="flex flex-row gap-2 w-fit" key={key}>
      <input type="checkbox" name={m} value={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => handleCheckboxChange(m)}
            />
      <p>{m}</p>
    </li>
)

  return <div className="m-4">
      <p className="py-2">Your Supply Closet</p>
      <ul className="flex flex-col p-2 border-2  flex-wrap h-32">
          {materialsList}
      </ul>
  </div>
}