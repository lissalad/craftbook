import Craft from "./Craft";
import { Item } from "../utils/types";

interface Props {
  items: Item[];
  selectedMaterials: string[];
}

export default function CraftGallery({ items, selectedMaterials }: Props) {
  console.log(items);

  return (
    <div className="flex flex-row flex-wrap">
      {items
        .filter((item) =>
          item.materials.every((material) =>
            selectedMaterials.includes(material)
          )
        )
        .sort((a, b) => a.title.localeCompare(b.title)) // Sort items alphabetically
        .map((craft) => (
          <Craft craft={craft} key={craft.id} />
        ))}
    </div>
  );
}
