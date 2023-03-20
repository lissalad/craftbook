import Craft from "./Craft";
import { Item } from "../utils/types";

interface Props {
  items: Item[];
  selectedMaterials: string[];
}

export default function CraftGallery({ items, selectedMaterials }: Props) {
  console.log(items);

  return (
    <div className="grid grid-rows-auto grid-cols-4 gap-4 w-full m-4">
      {items
        .filter((item) =>
          item.materials.some((material) =>
            selectedMaterials.includes(material)
          )
        )
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((craft) => (
          <Craft craft={craft} key={craft.id} />
        ))}
    </div>
  );
}
