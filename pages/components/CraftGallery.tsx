import Craft from "./Craft";
import { Item } from "../../utils/types";

interface Props {
  items: Item[];
  selectedMaterials: string[];
}

export default function CraftGallery({ items, selectedMaterials }: Props) {
  return (
    <div className="grid grid-rows-auto xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 w-full m-4">
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
