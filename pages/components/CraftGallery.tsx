import Craft from "./Craft";
import { Item } from "../utils/Types";

interface Props {
  items: Item[];
  selectedMaterials: string[]
}

export default function CraftGallery({ items, selectedMaterials }: Props)  {

  console.log(items);

  return <div className="columns-1 md:columns-2 lg:columns-4 gap-4 m-6 transition-all">
    {items.filter((item) =>
    item.materials.every((material) => selectedMaterials.includes(material))
  ).map((craft) => (
        <Craft craft={craft} key={craft.id} />
      ))}
  </div>
}