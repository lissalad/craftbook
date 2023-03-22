import { MenuIcon } from "./Icons";
import { atom, useAtom } from "jotai";
import { menuOpenAtom } from "../_app";

export default function Header() {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);

  return (
    <div className="absolute p-3 text-2xl bg-rose-300 backdrop-blur-lg text-rose-50 w-full text-center z-40 border-b border-rose-200">
      <button
        className="absolute left-4 top-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="flex flex-row">
          <MenuIcon />
        </div>
      </button>
      <h1>craftBook</h1>
    </div>
  );
}
