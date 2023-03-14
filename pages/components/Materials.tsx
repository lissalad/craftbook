export default function Materials({ setMaterials, filters}) {
  console.log(filters);

  const materials = ["paper", "glue", "paint", "cardboard"];

  function toggleMaterial(material: string) {
    const index = filters.indexOf(material);
    if (index > -1) {
      console.log("removing");
      // setMaterials(filters.filter(material));
    }
    else {
      console.log("adding");

      setMaterials([...filters, material]);
    }
  }

  const materialsList = materials.map((m, key) => 
    <li className="flex flex-row gap-2 w-fit">
      <input type="checkbox" key={key} name={m} value={m}
              // onChange={e => toggleMaterial(m)}
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