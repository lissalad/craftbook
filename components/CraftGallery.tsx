import Craft from "./Craft";
import { Item } from "../utils/types";
import { useAtom } from "jotai";
import { filterAtom } from "./Sidebar";

interface Props {
  items: Item[];
  selectedMaterials: string[];
}

export default function CraftGallery({ items, selectedMaterials }: Props) {
  const [filter, setFilter] = useAtom(filterAtom);
  console.log(filter);
  const filteredItems = customFilter();

  function customFilter() {
    if (filter === "Includes Any") {
      return items.filter((item) =>
        item.materials.some((material) => selectedMaterials.includes(material))
      );
    } else if (filter === "Fully Supplied") {
      return items.filter((item) =>
        item.materials.every((material) => selectedMaterials.includes(material))
      );
    } else if (filter === "Includes All") {
      return items.filter((item) => {
        const remainingMaterials = [...selectedMaterials];
        for (const material of item.materials) {
          const index = remainingMaterials.indexOf(material);
          if (index === -1) {
            return false;
          } else {
            remainingMaterials.splice(index, 1);
          }
        }
        return remainingMaterials.length === 0;
      });
    } else return items;
  }

  return (
    <div className="grid grid-rows-auto xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 w-full m-4 h-fit">
      {filteredItems
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((craft) => (
          <Craft craft={craft} key={craft.id} />
        ))}
    </div>
  );
}
