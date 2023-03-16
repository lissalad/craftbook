import data from "./data.json";
import { Item } from "./types";

const materials = new Set<string>();

data.forEach((item: Item) => {
  item.materials.forEach((material: string) => {
    materials.add(material);
  });
});

const allMaterials = Array.from(materials);

export default data;
export {allMaterials};
