import { Plus } from "phosphor-react";
import { Card } from "../Card";

export function List() {
  return (
    <div
      className="
      px-4 h-full flex-grow-0 flex-shrink-0 basis-80 [&:not(first-child)]:border-l 
      [&:not(first)]:border-[rgba(0,0,0,0.05)] select-none
    "
    >
      <header className="flex justify-between items-center h-10">
        <h2 className="font-medium px-[10px]">Tarefas</h2>

        <Card />

        <button
          type="button"
          className="w-10 h-10 rounded-2xl bg-[#3b5bfd] border-0 cursor-pointer"
        >
          <Plus size={24} color="#FFF" />
        </button>
      </header>
    </div>
  );
}
