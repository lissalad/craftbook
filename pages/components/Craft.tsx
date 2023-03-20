import { Item } from "../utils/types";
import Image from "next/image";

export default function Craft({ craft }: { craft: Item }) {
  //help
  const image = `/images/${craft.image}`;

  return (
    <div className="flex flex-col flex-nowrap hover:scale-[0.96] transition-all aspect-square">
      {/* flex grow */}
      <img
        className="w-full h-full object-cover rounded-xl shadow-xl hover:shadow-3xl aspect-square"
        alt={craft.title}
        src={image}
      />
      <p className="capitalize pt-2">{craft.title}</p>
    </div>
  );
}
