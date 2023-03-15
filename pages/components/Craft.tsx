import { Item } from "../utils/Types"
import Image from "next/image";

export default function Craft(item) { //help
  const craft = item.craft;

  const image = `/images/${craft.image}`;
  console.log(item);

  return (
    <div className="w-[300px] h-[300px] relative rounded-3xl hover:scale-[95%] transition-all ">
      <p className="absolute text-rose-50 bg-rose-700/70 backdrop-blur-lg bottom-0 w-full p-4 rounded-b-3xl text-xl">{craft.title}</p>
      <img className="object-cover w-full h-full rounded-3xl shadow-xl" alt={craft.title} src={image}/>
    </div> )
}