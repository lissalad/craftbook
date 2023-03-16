import { Item } from "../utils/Types"
import Image from "next/image";

export default function Craft(item) { //help
  const craft = item.craft;

  const image = `/images/${craft.image}`;

  return (
    <div className="max-w-[320px] max-h-[320px] relative rounded-3xl hover:scale-[95%] transition-all">
      <p className="absolute text-stone-900 capitalize bg-rose-50/30 backdrop-blur-lg bottom-0 w-full p-4 rounded-b-3xl text-xl">{craft.title}</p>
      <img className="object-cover w-full h-full rounded-3xl shadow-xl" alt={craft.title} src={image}/>
    </div> )
}