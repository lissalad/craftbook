import Craft from "./Craft";
import { Item } from "../utils/Types";

interface Props {
  items: Item[];
  selectedMaterials: string[]
}

export default function CraftGallery({ items, selectedMaterials }: Props)  {

  console.log(items);

  return <div className="grid grid-cols-4 gap-4 m-4">
    {items.filter((item) =>
    item.materials.every((material) => selectedMaterials.includes(material))
  ).map((craft) => (
        <Craft craft={craft} key={craft.id} />
      ))}
  </div>
}