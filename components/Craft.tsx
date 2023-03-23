import { Item } from "../utils/types";
import Image from "next/image";

export default function Craft({ craft }: { craft: Item }) {
  const image = `/images/${craft?.image}`;

  return (
    <div className="flex flex-col hover:scale-[0.98] transition-all aspect-square items-center justify-center relative group duration-200">
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl hover:shadow-3xl transition-all duration-200">
        <img
          className="w-full h-full object-cover group-hover:blur-sm group-hover:brightness-[50%] transition-all duration-200"
          alt={craft.title}
          src={image}
        />
      </div>
      <p className="capitalize p-2 w-full text-left">{craft.title}</p>
      <a
        href={craft.link}
        target="_blank"
        className="invisible group-hover:visible py-3 px-5 rounded-xl bg-rose-200 text-rose-900 shadow-xl absolute transition-all duration-400 border-4 border-rose-100 hover:bg-rose-100 mb-[30px]"
      >
        Try it Out
      </a>
    </div>
  );
}
