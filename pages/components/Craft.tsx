import { Item } from "../utils/types";
import Image from "next/image";

export default function Craft({ craft }: { craft: Item }) {
  //help
  const image = `/images/${craft.image}`;

  return (
    <div className=" m-3 flex flex-col flex-nowrap hover:scale-[0.94] transition-all">
      {/* flex grow */}
      <img
        className="w-[280px] h-[280px] object-cover rounded-xl"
        alt={craft.title}
        src={image}
      />
      <p className="capitalize p-2">{craft.title}</p>
    </div>
  );
}
