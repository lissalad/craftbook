import { Item } from "../utils/Types"
import Image from "next/image";

export default function Craft(item) { //help
  const craft = item.craft;

  const image = `/images/${craft.image}`;

  return (
    <div className="hover:scale-[95%] transition-all flex flex-col mb-4 relative">
      <img 
          width="100"
          height="100"
          className="h-fit w-full tile-image rounded-t-xl shadow-md transition-all transition-duration-500 hover:brightness-75 hover:shadow-xl"alt={craft.title} src={image}/>
      <p className=" text-stone-50 capitalize bg-stone-500/80 backdrop-blur-xl rounded-b-xl bottom-0 w-full p-3 text-md">{craft.title}</p>
    </div> )
}